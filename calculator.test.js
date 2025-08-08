const add = require('./calculator');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number when only one number is provided', () => {
  expect(add("5")).toBe(5);
});

test('handles two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum of multiple comma-separated numbers', () => {
  expect(add("1,2,3")).toBe(6);
});

test('handles new line as delimiter', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('throws error on negative numbers', () => {
  expect(() => add("1,-2")).toThrow("Negatives not allowed: -2");
});