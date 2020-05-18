/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-extraneous-dependencies
import * as ts from "typescript";

/**
 * Эта функция консистентно конвертирует Snake Case в Pascal Case
 * @param str Строка
 */
export function correctCase(str: string) {
  return str
    .split("_")
    .map(s => s[0].toUpperCase() + s.substr(1))
    .join("");
}

/**
 * Этот класс упрощает создания типов в typescript'e
 */
export default class TypesCreator {
  static string() {
    return ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
  }

  static number() {
    return ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
  }

  static boolean() {
    return ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
  }

  static reference(to: string) {
    const [file, path] = to.split("#");

    return ts.createTypeReferenceNode(
      ts.createQualifiedName(
        ts.createIdentifier(correctCase(file.split(".")[0])),
        ts.createIdentifier(correctCase(path.replace("/definitions/", "")))
      ),
      undefined
    );
  }

  static union(items: ts.TypeNode[]) {
    return ts.createUnionTypeNode(items);
  }

  static array(el: ts.TypeNode) {
    return ts.createArrayTypeNode(el);
  }

  static intersection(items: ts.TypeNode[]) {
    return ts.createIntersectionTypeNode(items);
  }

  static literal(string: string) {
    return ts.createLiteralTypeNode(ts.createLiteral(string));
  }

  static propSig(name: string, type: ts.TypeNode, required = false) {
    const comments = ts.getSyntheticLeadingComments(type);
    if (comments) ts.setSyntheticLeadingComments(type, []);

    const result = ts.createPropertySignature(
      undefined,
      // А тут проверочка стоит из-за того, что вк даёт поле 2fa_required
      /^[A-z_][A-z0-9_]*$/.test(name) ? name : `"${name.replace('"', '\\"')}"`,
      required ? undefined : ts.createToken(ts.SyntaxKind.QuestionToken),
      type,
      undefined
    );

    if (comments) {
      return ts.addSyntheticLeadingComment(
        result,
        ts.SyntaxKind.MultiLineCommentTrivia,
        `* \n * ${comments.map(c => c.text).join("\n * ")} \n`
      );
    }

    return result;
  }

  static objectLiteral(
    props: { name: string; type: ts.TypeNode; required?: boolean }[]
  ) {
    const objectProps = props.map(prop =>
      TypesCreator.propSig(prop.name, prop.type, Boolean(prop.required))
    );

    return ts.createTypeLiteralNode(objectProps);
  }

  static simpleObject() {
    return ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword);
  }

  static comment(node: ts.TypeNode, comment: string) {
    return ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.MultiLineCommentTrivia,
      `* ${comment} `,
      false
    );
  }
}
