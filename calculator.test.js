const add = require('./calculator');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number when only one number is provided', () => {
  expect(add("5")).toBe(5);
});