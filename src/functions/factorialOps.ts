import { factorial } from "./MathFuncs";

export const factorialOps = (expression: string): string => {
  const startIndex = expression.search(/[0-9.]+!/);
  const endIndex = expression.search(/!/);
  const value = expression.substring(startIndex, endIndex);
  const result = startIndex !== -1
    ? expression
      .substring(0, startIndex)
      .concat((factorial(value)))
      .concat(expression.substring(endIndex + 1))
    : expression;
  if (result.search(/[0-9.]*!/) !== -1) {
    return factorialOps(result);
  }
  return result;
};