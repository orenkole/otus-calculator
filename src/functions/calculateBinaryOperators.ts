import { multiply } from "./multiply";
import { divide } from "./divide";
import { sum } from "./sum";
import { minus } from "./minus";
import { power } from "./power";

export const calculateBinaryOperators = (expression: string): string => {
  const operands = expression.split(/[+]|[-]|[*]|[/]|[\^]/);
  const operators = Array.isArray(expression.split(/[0-9.]+/)) && expression.split(/[0-9.]+/).slice(1, -1);
  while (
    operators 
    && ( operators.includes("^"))
  ) {
    const multiplyIndex = operators.findIndex((operator) => {
      return operator === "^";
    });
    if (multiplyIndex !== -1 ) {
      operands[multiplyIndex] = power(operands[multiplyIndex], operands[multiplyIndex + 1]);
      operands.splice(multiplyIndex + 1, 1);
      operators.splice(multiplyIndex, 1);
    }    
  }
  while (
    operators 
    && ( operators.includes("*") || operators.includes("/"))
  ) {
    const multiplyIndex = operators.findIndex((operator) => {
      return operator === "*";
    });
    const divisionIndex = operators.findIndex((operator) => {
      return operator === "/";
    });
    if (
      (   
        multiplyIndex !== -1 
        && divisionIndex === -1
      ) || (
        multiplyIndex !== -1 
        && divisionIndex !== -1
        && multiplyIndex < divisionIndex
      )
    ) {
      operands[multiplyIndex] = multiply(operands[multiplyIndex], operands[multiplyIndex + 1]);
      operands.splice(multiplyIndex + 1, 1);
      operators.splice(multiplyIndex, 1);
    }
    if (
      (   
        divisionIndex !== -1 
        && multiplyIndex === -1
      ) || (
        divisionIndex !== -1 
        && multiplyIndex !== -1
        && divisionIndex < multiplyIndex
      )
    ) {
      operands[divisionIndex] = divide(operands[divisionIndex], operands[divisionIndex + 1]);
      operands.splice(divisionIndex + 1, 1);
      operators.splice(divisionIndex, 1);
    }      
  }
  while (
    operators 
    && ( operators.includes("+") || operators.includes("-"))
  ) {
    const multiplyIndex = operators.findIndex((operator) => {
      return operator === "+";
    });
    const divisionIndex = operators.findIndex((operator) => {
      return operator === "-";
    });
    if (
      (   
        multiplyIndex !== -1 
        && divisionIndex === -1
      ) || (
        multiplyIndex !== -1 
        && divisionIndex !== -1
        && multiplyIndex < divisionIndex
      )
    ) {
      operands[multiplyIndex] = sum(operands[multiplyIndex], operands[multiplyIndex + 1]);
      operands.splice(multiplyIndex + 1, 1);
      operators.splice(multiplyIndex, 1);
    } 
    if (
      (   
        divisionIndex !== -1 
        && multiplyIndex === -1
      ) || (
        divisionIndex !== -1 
        && multiplyIndex !== -1
        && divisionIndex < multiplyIndex
      )
    ) {
      operands[divisionIndex] = minus(operands[divisionIndex], operands[divisionIndex + 1]);
      operands.splice(divisionIndex + 1, 1);
      operators.splice(divisionIndex, 1);
    }      
  }
  return operands[0];
};