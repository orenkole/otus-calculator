import { sinOps } from "./sinOps";

test("sinOps", () => {
  expect(sinOps("sin1+2*(1+2)")).toBe("0.8414+2*(1+2)");
  expect(sinOps("sin1+sin2")).toBe("0.8414+0.9092");
});