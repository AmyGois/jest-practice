"use strict";

var _caesarCipher = _interopRequireDefault(require("./caesar-cipher"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test("Lowercase single word string returns shifted by X letters", () => {
  expect((0, _caesarCipher.default)("hello", 3)).toBe("khoor");
});
test("All caps single word string returns shifted by x letters", () => {
  expect((0, _caesarCipher.default)("HELLO", 3)).toBe("KHOOR");
});
test("Single word string with uppercase first letter returns shifted by x letters", () => {
  expect((0, _caesarCipher.default)("Hello", 3)).toBe("Khoor");
});
test("All characters that aren't letters remain the same", () => {
  expect((0, _caesarCipher.default)("Hello World!", 3)).toBe("Khoor Zruog!");
});
test("Throws error when first parameter isn't a string", () => {
  expect(() => (0, _caesarCipher.default)(5, 3)).toThrow(Error);
});
test("Throws error when second parameter isn't a number", () => {
  expect(() => (0, _caesarCipher.default)("Hello world!", "three")).toThrow(Error);
});
test("Throws error when second parameter isn't an integer", () => {
  expect(() => (0, _caesarCipher.default)("Hello world!", 1.2)).toThrow(Error);
});