import { performMath } from "./calculate";

export const removeBrackets = (expression: string): string => {
  const subproblemStartArray: number[] = [];
  const subproblemEndArray: number[] = [];

  let level = 0;
  for(let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      if(level === 0) {
        subproblemStartArray.push(i);
      }
      level++;
    }
    if (expression[i] === ")") {
      if(level === 1) {
        subproblemEndArray.push(i);
      }
      level--;
    }
  }
  const noBrackets = !subproblemStartArray.length;
  if(noBrackets) {
    return performMath(expression);
  }
  const subproblems: string[] = [];
  subproblemStartArray.forEach((subproblemStart, index) => {
    subproblems.push(expression.substring(subproblemStart + 1, subproblemEndArray[index]));
  });
  const substringsArray: string[] = subproblemStartArray[0] !== 0 
    ? [expression.substring(0, subproblemStartArray[0])] 
    : [];
  subproblemStartArray.forEach((_, i) => {
    substringsArray.push(removeBrackets(subproblems[i]).toString());
    substringsArray.push(expression.substring(subproblemEndArray[i] + 1, subproblemStartArray[i + 1]));
  });
  const resultantString = substringsArray.join("").trim();
  return resultantString;
};