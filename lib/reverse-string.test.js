"use strict";

var _reverseString = _interopRequireDefault(require("./reverse-string"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test("Single word string returns reversed", () => {
  expect((0, _reverseString.default)("Hello")).toBe("olleH");
});
test("Multiple word string returns reversed", () => {
  expect((0, _reverseString.default)("Hello world!")).toBe("!dlrow olleH");
});
test("Parameters that aren't strings throw an error", () => {
  expect(() => (0, _reverseString.default)(123)).toThrow(Error);
});