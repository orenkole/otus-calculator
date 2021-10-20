import { calculate } from "./calculate";

test("calculate", () => {
  expect(calculate("sin(1)+2*(1+2)-3!+2**+12/6+2^3+fib(8)")).toBe("35.8414");
});