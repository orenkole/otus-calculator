const { minus } = require('./minus');

test("minus('5', '2') equal '3'", () => {
  expect(minus('5', '2')).toBe('3');
});