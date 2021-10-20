export const power = (operand1: string, operand2: string): string => {
  return (Math.pow(+operand1, +operand2)).toString();
};