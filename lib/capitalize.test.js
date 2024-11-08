"use strict";

var _capitalize = _interopRequireDefault(require("./capitalize"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test("Capitalized single word string remains capitalized on first letter", () => {
  expect((0, _capitalize.default)("Hello")).toBe("Hello");
});
test("Not capitalized single word string returns capitalized on first letter", () => {
  expect((0, _capitalize.default)("hello")).toBe("Hello");
});
test("Not capitalized multiple word string returns all first letters capitalized", () => {
  expect((0, _capitalize.default)("hello world!")).toBe("Hello World!");
});
test("Multiple word string with various capitalizations returns first letters capitalized", () => {
  expect((0, _capitalize.default)("why heLLo There!")).toBe("Why HeLLo There!");
});
test("String with numbers returns with words capitalized on first letter", () => {
  expect((0, _capitalize.default)("hello world 123!")).toBe("Hello World 123!");
});
test("Parameters that aren't strings throw an error", () => {
  expect(() => (0, _capitalize.default)(123)).toThrow(Error);
});