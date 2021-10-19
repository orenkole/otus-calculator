import { removeBrackets } from "./removeBrackets";

test("removeBrackets('1+2*(3+1)+6/(2+1)') to be '1+2*4+6/3'", () => {
  expect(removeBrackets("1+2*(3+1)+6/(2+1)")).toBe("1+2*4+6/3");
  expect(removeBrackets("1+(1*(2+1))")).toBe("1+1*3");
  expect(removeBrackets("(1+2)*4")).toBe("3*4");
});