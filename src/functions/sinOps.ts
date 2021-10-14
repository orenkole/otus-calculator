import { sin } from "./MathFuncs";

export const sinOps = (expression: string): string => {
    const regexResult = expression.match(/\W?sin[0-9\.]*/)
    let operand;
    if (regexResult) {
        if (regexResult[0].startsWith('sin')) {
            operand = regexResult[0];
        } else {
            operand = regexResult[0].slice(1)
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
        .concat((sin(value)).toString().slice(0,6))
        .concat(expression.substring(endIndex))
      : expression;
    if (result.search(/\W?sin[0-9\.]*/) !== -1) {
      return sinOps(result);
    }
    return result;
  };