/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import * as ts from "typescript";
import Creator, { correctCase } from "./creator";

type Describable = {
  description?: string;
};

export type Reference = Describable & {
  $ref: string;
};

export type JoinerSchema = (Reference | Schema["object"])[];

export type OneOfSchema = { oneOf: JoinerSchema };
export type AnyOfSchema = { anyOf: JoinerSchema };
export type AllOfSchema = { allOf: JoinerSchema };

export type Schema = {
  integer: Describable & {
    type: "integer";
    minimum?: number;
    maximum?: number;
    default?: number;
  };

  number: Schema["integer"] & { type: "number" };

  string: Describable & {
    type: "string";
    enum?: string[];
    format?: "uri";
    default?: string;
  };

  boolean: Describable & {
    type: "boolean";
    default?: boolean;
  };

  array: Describable & {
    type: "array";
    items: Schema[keyof Schema];
  };

  object: Describable & {
    type: "object";
    properties: { [key: string]: Schema[keyof Schema] };
    required?: (keyof Schema["object"]["properties"])[];
  } & Partial<OneOfSchema & AnyOfSchema & AllOfSchema>;
};

export type SchemaTypes = keyof Schema;
export type CommonSchema = Schema[SchemaTypes];
export type AnySchema =
  | CommonSchema
  | Reference
  | OneOfSchema
  | AnyOfSchema
  | AllOfSchema;

export type Schema2Primitive<S extends AnySchema> = S extends Reference
  ? any
  : S extends Schema["array"]
  ? Schema2Primitive<S["items"]>[]
  : S extends Schema["boolean"]
  ? boolean
  : S extends Schema["integer"]
  ? number
  : S extends Schema["number"]
  ? number
  : S extends Schema["string"]
  ? string
  : S extends Schema["object"]
  ? object
  : any;

export type VkError = {
  code: number;
  name: string;
  description: string;
};

export type Method = Describable & {
  name: string;
  access_token_type: ("user" | "group" | "service")[];
  parameters: (CommonSchema & {
    name: string;
    default?: any;
    required?: boolean;
  })[];
  responses: {
    response: Reference;
    extendedResponse?: Reference;
  };
  errors: VkError[];
};

/**
 * В этой функции очень много боли. Она должна работать логично,
 * но не должна. Потому что вк пишут файлы как-попало или я просто
 * чего-то не понимаю в спеке. Оно просто работает конкретно с этими
 * файлами. А раз работает, то трогать не нужно.
 * (И пихать что-попало тоже)
 * @param schema JSON схема
 *
 */
export default function parse(schema: AnySchema): ts.TypeNode {
  const refSchema = schema as Reference;
  const typedSchema = schema as CommonSchema;
  const anyOfSchema = schema as AnyOfSchema;
  const allOfSchema = schema as AllOfSchema;
  const oneOfSchema = schema as OneOfSchema;
  const describableSchema = schema as Describable;
  const ats /* @'s */ = [];

  let result;

  if (refSchema.$ref) {
    result = Creator.reference(refSchema.$ref);
  } else if (anyOfSchema.anyOf || oneOfSchema.oneOf) {
    const els = anyOfSchema.anyOf || oneOfSchema.oneOf || [];

    result = Creator.union(els.map(parse));
  } else if (allOfSchema.allOf) {
    result = Creator.intersection(allOfSchema.allOf.map(parse));
  } else if (Array.isArray(typedSchema.type)) {
    const types = typedSchema.type as typeof typedSchema.type[];

    result = Creator.union(
      // @ts-ignore
      types.map((type) => parse({ ...typedSchema, type }))
    );
  } else if ((typedSchema as Schema["object"]).properties) {
    const s = typedSchema as Schema["object"];

    result = Creator.objectLiteral(
      Object.keys(s.properties).map((key) => {
        const value = s.properties[key as keyof typeof s.properties];

        return {
          name: key,
          type: parse(value),
          required: (s.required || []).includes(key)
        };
      })
    );
  } else {
    switch (typedSchema.type) {
      case "integer":
        result = Creator.number();

        ats.push("@type {integer}");

        if (typedSchema.maximum) {
          ats.push(`@maximum ${typedSchema.maximum}`);
        }

        if (typedSchema.minimum) {
          ats.push(`@minimum ${typedSchema.minimum}`);
        }

        if (typedSchema.default) {
          ats.push(`@default ${typedSchema.default}`);
        }
        break;

      // @ts-ignore
      case "number":
        return parse({ ...schema, type: "integer" } as any);

      case "string":
        if (typedSchema.enum && typedSchema.enum.length > 0) {
          ats.push(`@enum {string} ${typedSchema.enum.join(", ")}`);
          result = Creator.union(
            typedSchema.enum.map((s) => Creator.literal(s))
          );
        } else {
          result = Creator.string();
        }

        if (typedSchema.format) {
          ats.push(`@format ${typedSchema.format}`);
        }

        if (typedSchema.default) {
          ats.push(`@default ${typedSchema.default}`);
        }
        break;

      case "boolean":
        result = Creator.union([
          Creator.boolean(),
          ts.createTypeReferenceNode("0", undefined),
          ts.createTypeReferenceNode("1", undefined)
        ]);
        if (typedSchema.default) {
          ats.push(`@default ${typedSchema.default}`);
        }
        break;

      case "array":
        result = Creator.array(parse(typedSchema.items));
        break;

      case "object":
        if (typedSchema.properties) {
          result = Creator.objectLiteral(
            Object.keys(typedSchema.properties).map((key) => {
              const value = typedSchema.properties[
                key as keyof typeof typedSchema.properties
              ] as any;

              return {
                name: key,
                type: parse(value),
                required: (typedSchema.required || []).includes(key)
              };
            })
          );
        } else {
          result = Creator.simpleObject();
        }

        break;

      default:
        throw new TypeError(
          `Unable to recognize schema: ${JSON.stringify(schema)}`
        );
    }
  }

  describableSchema.description = `${
    describableSchema.description || ""
  }\n * ${ats.join("\n * ")}`;

  if (describableSchema.description)
    return Creator.comment(result, describableSchema.description);

  return result;
}
/**
 * Эта функция генерирует D.TS код функций, которые можно вставить в интерфейсы/типы.
 * Она создаёт методы и доки к ним. Может и не очень красиво, но зато информативно
 * и + если есть вариант расширенного ответа, она это тоже учитывает. Именно ради
 * этой функции я и писал кодоген с 0, а не спёр у negezor'a.
 * @param m Объект описания метода
 *
 * @see https://github.com/negezor/vk-io/tree/master/scripts/typings-generator
 */
export function parseMethod(m: Method, async = true) {
  const jsdocJoiner = "\n* ";

  const access = m.access_token_type
    .map((v) => `@access ${v}`)
    .join(jsdocJoiner);
  const throws = (m.errors || [])
    .map(
      (e) =>
        `@throws {Errors.${correctCase(e.name.toLowerCase())}} - ${
          e.description
        }`
    )
    .join(jsdocJoiner);
  const hasParams = m.parameters && m.parameters.length;

  const paramsType = hasParams
    ? Creator.objectLiteral(
        m.parameters.map((p) => {
          const { name, required } = p;

          const type = parse(p);

          return { type, name, required: Boolean(required) };
        })
      )
    : ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword);

  const params = ts.createParameter(
    undefined,
    undefined,
    undefined,
    "params",
    hasParams ? undefined : ts.createToken(ts.SyntaxKind.QuestionToken),
    ts.createTypeReferenceNode("Params", undefined),
    undefined
  );

  const wrapIfAsync = (t: ts.TypeNode) =>
    async ? ts.createTypeReferenceNode("Promise", [t]) : t;

  const responseType = wrapIfAsync(
    ts.createIndexedAccessTypeNode(
      ts.createTypeReferenceNode("Required", [parse(m.responses.response)]),
      Creator.literal("response")
    )
  );

  const extendedResponseType = m.responses.extendedResponse
    ? wrapIfAsync(
        ts.createIndexedAccessTypeNode(
          ts.createTypeReferenceNode("Required", [
            parse(m.responses.extendedResponse)
          ]),
          Creator.literal("response")
        )
      )
    : responseType;

  const method = ts.createMethodSignature(
    [ts.createTypeParameterDeclaration("Params", paramsType, undefined)],
    [params],

    m.responses.extendedResponse
      ? ts.createConditionalTypeNode(
          ts.createTypeReferenceNode('Params["extended"]', undefined),
          Creator.union([
            ts.createTypeReferenceNode("true", undefined),
            ts.createTypeReferenceNode("1", undefined)
          ]),
          extendedResponseType,
          responseType
        )
      : responseType,
    m.name.split(".")[1],
    undefined
  );

  return ts.addSyntheticLeadingComment(
    method,
    ts.SyntaxKind.MultiLineCommentTrivia,
    [
      "*",
      m.description || "Method not described",
      ...(async ? [`@async`] : []),
      access,
      throws,
      `@see https://vk.com/dev/${m.name}`,
      ""
    ].join(jsdocJoiner)
  );
}

/**
 * Всем кто это читает, сорян за ебалу с звёздочками и JSDoc'ом
 *
 * Это очень сильно отразилось на файле `index.ts`
 * Земля ему пухом. F
 */
