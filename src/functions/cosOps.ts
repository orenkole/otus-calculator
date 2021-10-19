import { cos } from "./MathFuncs";

export const cosOps = (expression: string): string => {
  const regexResult = expression.match(/\W?cos[0-9.]*/);
  let operand;
  if (regexResult) {
    if (regexResult[0].startsWith("cos")) {
      operand = regexResult[0];
    } else {
      operand = regexResult[0].slice(1);
    }
  } else {
    return expression;
  }
  const startIndex = expression.indexOf(operand);
  const endIndex = startIndex + operand.length;
  const value = expression.substring(startIndex + 3, endIndex);
  const result = startIndex !== -1
    ? expression
      .substring(0, startIndex)
      .concat((cos(value)).toString().slice(0,6))
      .concat(expression.substring(endIndex))
    : expression;
  if (result.search(/\W?cos[0-9.]*/) !== -1) {
    return cosOps(result);
  }
  return result;
};