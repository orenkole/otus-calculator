import { factorial } from "./MathFuncs";

test('factorial', () => {
  expect(factorial('3')).toBe('6');
  expect(factorial('0')).toBe('1');
});