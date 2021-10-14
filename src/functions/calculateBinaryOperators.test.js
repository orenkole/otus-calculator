const { calculateBinaryOperators } = require('./calculateBinaryOperators');

test("calculateBinaryOperators", () => {
  expect(calculateBinaryOperators('1.5+2')).toBe('3.5');
});