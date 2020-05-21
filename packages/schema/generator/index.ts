/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable import/no-extraneous-dependencies */
/**
 * Этот файл позволяет генерировать типизацию API Vk по их JSON Schem'е
 *
 * @see https://github.com/VKCOM/vk-api-schema
 */

import * as ts from "typescript";
import { promises as fs } from "fs";
import fetch from "node-fetch";
import { format as prettier } from "prettier";

import { resolve } from "path";
import parser, { parseMethod, VkError } from "./parser";
import { correctCase } from "./creator";

const FILE_NAME = "index.ts";
const SAVE_TO = resolve(__dirname, "..", FILE_NAME);

const source = ts.createSourceFile(
  FILE_NAME,
  "/* eslint-disable */",
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TS
);

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

/**
 * Я честно хз как это нормально описать.
 * Функция магическим образом генерирует типизацию по полю definitions
 * в JSON Schem'e
 * @param defs Definitions
 * @param ns Namespace
 */
function transformDefinitions(defs: any, ns = "") {
  let result = `\nexport namespace ${ns} {\n`;

  Object.keys(defs).forEach((response) => {
    const newName = correctCase(response);
    // @ts-ignore
    const typedef = parser(defs[response]);
    const comments = ts.getSyntheticLeadingComments(typedef);

    if (comments) {
      ts.setSyntheticLeadingComments(typedef, []);

      result += `/**
      * ${comments.map((c) => c.text).join("\n* ")}
      */\n`;
    }

    result += `export type ${newName} = `;
    result += printer.printNode(ts.EmitHint.Unspecified, typedef, source);
    result += "\n";
  });

  return `${result}\n}`;
}

Promise.all([
  fetch("https://github.com/VKCOM/vk-api-schema/raw/master/objects.json")
    .then((data) => data.json())
    .then((data) => {
      console.log("Objects data downloaded");
      return data;
    })
    .then((json) => transformDefinitions(json.definitions, "Objects")),

  fetch("https://github.com/VKCOM/vk-api-schema/raw/master/responses.json")
    .then((data) => data.json())
    .then((data) => {
      console.log("Responses data downloaded");
      return data;
    })
    .then((json) => transformDefinitions(json.definitions, "Responses")),

  fetch("https://github.com/VKCOM/vk-api-schema/raw/master/methods.json")
    .then((data) => data.json())
    .then(({ methods, errors }) => {
      console.log("Methods data downloaded");

      /**
       * Значит так, я планирую сделать типизированный Execute и для этого
       * придётся продублировать все методы в синхронном виде, так-как
       * typescript не вытягивает generic 'и с условными ответами.
       * Там чисто any, и нормальными методами это не решить.
       */

      const asyncMapping = new Map<string, ts.MethodSignature[]>();
      const syncMapping = new Map<string, ts.MethodSignature[]>();

      methods.forEach((m: any) => {
        const className = m.name.split(".")[0];
        const asyncMethod = parseMethod(m);
        const syncMethod = parseMethod(m, false);

        const otherAsyncMembers = asyncMapping.get(className);
        const otherSyncMembers = syncMapping.get(className);

        if (otherAsyncMembers) {
          asyncMapping.set(className, [...otherAsyncMembers, asyncMethod]);
        } else {
          asyncMapping.set(className, [asyncMethod]);
        }

        if (otherSyncMembers) {
          syncMapping.set(className, [...otherSyncMembers, syncMethod]);
        } else {
          syncMapping.set(className, [syncMethod]);
        }
      });

      let result = "\nexport namespace Methods {\n";

      asyncMapping.forEach((ms, interfaceName) => {
        const inn = correctCase(interfaceName);

        const i = ts.createInterfaceDeclaration(
          undefined,
          undefined,
          inn,
          undefined,
          undefined,
          ms
        );

        result += `export `;
        result += printer.printNode(ts.EmitHint.Unspecified, i, source);
        result += "\n";
      });

      result += `export ${printer.printNode(
        ts.EmitHint.Unspecified,
        ts.createClassDeclaration(
          undefined,
          undefined,
          "_domainsSpecifier",
          undefined,
          undefined,
          [...asyncMapping.keys()].map((c) => {
            const name = c[0].toLowerCase() + c.substring(1);
            const className = c[0].toUpperCase() + c.substring(1);

            return ts.createProperty(
              undefined,
              undefined,
              name,
              ts.createToken(ts.SyntaxKind.ExclamationToken),
              ts.createTypeReferenceNode(
                ts.createQualifiedName(
                  ts.createIdentifier("Methods"),
                  className
                ),
                undefined
              ),
              undefined
            );
          })
        ),
        source
      )}`;

      result += `export const _exportedDomains = [${[...asyncMapping.keys()]
        .map((c) => `"${c[0].toLowerCase() + c.substring(1)}"`)
        .join(",")}] as const`;

      result += "\n}";

      // Асинхронные методы закончились. Пора говнокодить

      result += "\nexport namespace SyncMethods {\n";

      syncMapping.forEach((ms, interfaceName) => {
        const inn = correctCase(interfaceName);

        const i = ts.createInterfaceDeclaration(
          undefined,
          undefined,
          inn,
          undefined,
          undefined,
          ms
        );

        result += `export `;
        result += printer.printNode(ts.EmitHint.Unspecified, i, source);
        result += "\n";
      });

      result += "\n}\n";

      // Method ends. Now errors
      result += "\nexport namespace Errors {\n";

      let errorsIndex = "export const ErrorsIndex = {";

      errors.forEach((e: VkError) => {
        const nn = correctCase(e.name.toLowerCase());

        errorsIndex += `\t${e.code}: ${nn},\n`;

        // errorsIndex.set(e.code, nn);

        result += `export class ${nn} extends Error {
          code = ${e.code};
          message = "${e.description.replace('"', '\\"')}";
          name = "${e.name}"
        };\n`;
      });

      errorsIndex += "};\n";

      result += errorsIndex;

      result += "\n}\n";

      return result;
    })
])
  .then((strings) => strings.join("\n\n"))
  .then(
    (code) =>
      `/* eslint-disable */
import { URL } from "url";

${code}`
  )
  .then((code) =>
    code
      // Убираем всё форматирование, чтобы преттиер не оперался на него
      .replace(/\/\*[* \s\n]+\*\//g, "")

      // Частично решаем ебалу с комментами
      .replace(/\*\//g, "*/\n")
      .replace(/\s*\*\s*\*\//g, "\n*/")
      .replace(/(\t| )+/g, " ")
      .replace(/\* \*/g, "*")
      .replace(/\*\/\s+/g, "*/\n")
      .replace(/\/\*\*/g, "\n/**")

      // Замена ссылок в стиле вк на сслыки в стиле JSDoc.
      .replace(/\[vk\.com\/(.*?)\|(.*?)\]/g, "{@link https://vk.com/$1|$2}")
  )
  .then((code) => prettier(code, { parser: "typescript" }))
  .then((full) => fs.writeFile(SAVE_TO, full, "utf8"))
  .then(() => console.log("Generation complete!"));

/**
 * Тут нет проверки на Несуществующие объекты
 * (Пока что)
 *
 * Поэтому после генерации надо исправлять
 * косяки ВК ручками
 *
 * @see https://github.com/VKCOM/vk-api-schema/issues/174
 */
