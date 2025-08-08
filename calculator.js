function add(input) {
  if (input === "") return 0;
  // It modifies my array and returns a number. When I pass any type (like a boolean, string, etc.) as an argument to map, it still returns the type.
  // To handle new lines, we use a regex in the split method. The input is a string, but using map allows us to convert each value to a number.
  const numbers = input.split(/,|\n/).map(Number);
  // To check negative number is present or not by using filter function
  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(",")}`);
  }
  return numbers.reduce((sum, num) => sum + num, 0);
}

/**
   * So my Assessment has been competed hope you enjoy 
   * All 6 test cases from my end
    PASS  ./calculator.test.js
  ✓ returns 0 for empty string (2 ms)
  ✓ returns the number when only one number is provided (1 ms)
  ✓ handles two comma-separated numbers
  ✓ returns sum of multiple comma-separated numbers
  ✓ handles new line as delimiter (1 ms)
  ✓ throws error on negative numbers (6 ms)

    Test Suites: 1 passed, 1 total
    Tests:       6 passed, 6 total
    Snapshots:   0 total
    Time:        0.206 s, estimated 1 s
    Ran all test suites.
   */

module.exports = add;
