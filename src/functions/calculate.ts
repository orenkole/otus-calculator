import { calculateBinaryOperators } from "./calculateBinaryOperators";
import { factorialOps } from "./factorialOps";
import { removeBrackets } from "./removeBrackets";
import { removeSpaces } from "./removeSpaces";
import { sinOps } from "./sinOps";
import { cosOps } from "./cosOps";
import { tanOps } from "./tanOps";
import { square } from "./square";
import { fibOps } from "./fibOps";

export const performMath = (expression: string): string => {
  const fibOpResult = fibOps(expression)
  const sinOpResult = sinOps(fibOpResult);
  const cosOpResult = cosOps(sinOpResult);
  const tanOpResult = tanOps(cosOpResult);
  const squareOpResult = square(tanOpResult);
  const factorialOpResult = factorialOps(squareOpResult);
  const binaryOpsResult = calculateBinaryOperators(factorialOpResult);
  return binaryOpsResult;
};

export const calculate = (expression: string): string => {
  const withoutSpaces = removeSpaces(expression);
  const withoutBrackets = removeBrackets(withoutSpaces);
  const result =  performMath(withoutBrackets);
  return result;
};