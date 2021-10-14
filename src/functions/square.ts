export const square = (expression: string): string => {
  const startIndex = expression.search(/[0-9\.]*\*\*/);
  const endIndex = expression.search(/\*\*/);
  const value = expression.substring(startIndex + 1, endIndex - 1);
  const result = startIndex !== -1
    ? expression
      .substring(0, startIndex)
      .concat((+value * +value).toString())
      .concat(expression.substring(endIndex + 2))
    : expression;
  if (result.search(/[0-9\.]*\*\*/) !== -1) {
    return square(result);
  }
  return result;
};