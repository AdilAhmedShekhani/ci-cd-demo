// index.test.js

// Simple addition function for testing
function add(a, b) {
  return a + b;
}

// Jest test case
test("adds 2 + 3 to equal 5", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
