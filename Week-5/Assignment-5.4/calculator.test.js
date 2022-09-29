const mathOperations = require("./calculator");

// Examples of passing tests:

test("adding 10 and 20 should return 30", () => {
  expect(mathOperations.sum(10, 20)).toBe(30);
});

test("subtracting 5 from 27 should return 22", () => {
  expect(mathOperations.diff(27, 5)).toBe(22);
});

test("multiplying 5 and 4 should return 20", () => {
  expect(mathOperations.product(5, 4)).toBe(20);
});


// Examples of failing tests:

test("adding 10 and 20 should return 40", () => {
  expect(mathOperations.sum(10, 20)).toBe(40);
});

test("subtracting 5 from 27 should return 20", () => {
  expect(mathOperations.diff(27, 5)).toBe(20);
});

test("multiplying 5 and 4 should return 25", () => {
  expect(mathOperations.product(5, 4)).toBe(25);
});
