import caesarCipher from "./caesar-cipher";

test("Lowercase single word string returns shifted by X letters", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("All caps single word string returns shifted by x letters", () => {
  expect(caesarCipher("HELLO", 3)).toBe("KHOOR");
});

test("Single word string with uppercase first letter returns shifted by x letters", () => {
  expect(caesarCipher("Hello", 3)).toBe("Khoor");
});

test("All characters that aren't letters remain the same", () => {
  expect(caesarCipher("Hello World!", 3)).toBe("Khoor Zruog!");
});

test("Throws error when first parameter isn't a string", () => {
  expect(() => caesarCipher(5, 3)).toThrow(Error);
});

test("Throws error when second parameter isn't a number", () => {
  expect(() => caesarCipher("Hello world!", "three")).toThrow(Error);
});

test("Throws error when second parameter isn't an integer", () => {
  expect(() => caesarCipher("Hello world!", 1.2)).toThrow(Error);
});
