"use strict";

var _calculator = _interopRequireDefault(require("./calculator"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test("Two integers add up correctly", () => {
  expect(_calculator.default.add(7, 5)).toBe(12);
});
test("Two numbers with fractions add up correctly", () => {
  expect(_calculator.default.add(7.2, 5.2)).toBeCloseTo(12.4);
});
test("Throws error when one or both parameters aren't numbers (addition)", () => {
  expect(() => _calculator.default.add("one", 3)).toThrow(Error);
});
test("Second integer gets subtracted from first", () => {
  expect(_calculator.default.subtract(14, 6)).toBe(8);
});
test("Second fractional number gets subtracted from first", () => {
  expect(_calculator.default.subtract(14.4, 6.2)).toBeCloseTo(8.2);
});
test("Throws error when one or both parameters aren't numbers (subtraction)", () => {
  expect(() => _calculator.default.subtract("five", 2)).toThrow(Error);
});
test("First integer gets divided by second", () => {
  expect(_calculator.default.divide(10, 2)).toBe(5);
});
test("First fractional number gets divided by second", () => {
  expect(_calculator.default.divide(4.5, 1.5)).toBeCloseTo(3);
});
test("Throws error when one or both parameters aren't numbers (division)", () => {
  expect(() => _calculator.default.divide(6, "two")).toThrow(Error);
});
test("Two integers get multiplied correctly", () => {
  expect(_calculator.default.multiply(2, 5)).toBe(10);
});
test("Two fractional numbers get multiplied correctly", () => {
  expect(_calculator.default.multiply(1.5, 3)).toBeCloseTo(4.5);
});
test("Throws error when one or both parameters aren't numbers (multiplication)", () => {
  expect(() => _calculator.default.multiply(6, "two")).toThrow(Error);
});