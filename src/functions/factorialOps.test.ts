import { factorialOps } from "./factorialOps";

test("factorialOps", () => {
  expect(factorialOps("11!+2*3")).toBe("39916800+2*3");
  expect(factorialOps("1+2!+2!")).toBe("1+2+2");
});