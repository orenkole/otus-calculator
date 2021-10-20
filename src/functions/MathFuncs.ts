export const factorial = (value: string): string => {
  if(value === "1") return "1";
  if(value === "0") return "1";
  return (+value * +factorial((+value - 1).toString())).toString();
};

export const sin = (value: string): string => {
  return (Math.sin(+value)).toString();
};

export const cos = (value: string): string => {
  return (Math.cos(+value)).toString();
};

export const tan = (value: string): string => {
  return (Math.tan(+value)).toString();
};

export const fib = (value: string): string => {
  const calculateFib = (n: number): number => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return calculateFib(n-1) + calculateFib(n-2);
  };
  return calculateFib(+value).toString();
};