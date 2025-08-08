function add(input) {
  if (input === "") return 0;
  // It modifies my array and returns a number. When I pass any type (like a boolean, string, etc.) as an argument to map, it still returns the type.
  const numbers = input.split(",").map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
