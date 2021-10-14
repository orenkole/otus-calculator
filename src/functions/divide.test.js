const { divide } = require('./divide');

test("divide('6', '2') to equal '3'", () => {
  expect(divide('6', '2')).toBe('3');
});