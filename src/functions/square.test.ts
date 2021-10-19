import { square } from "./square";

test("square", () => {
  expect(square("1+2*3-3+6/3")).toBe("1+2*3-3+6/3");
  expect(square("3+2**")).toBe("3+4");
  expect(square("1+2**+3**")).toBe("1+4+9");
});
