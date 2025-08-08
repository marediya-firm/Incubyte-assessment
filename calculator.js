function add(input) {
  if (input === "") return 0;
  // It modifies my array and returns a number. When I pass any type (like a boolean, string, etc.) as an argument to map, it still returns the type.
  // To handle new lines, we use a regex in the split method. The input is a string, but using map allows us to convert each value to a number.
  const numbers = input.split(/,|\n/).map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
