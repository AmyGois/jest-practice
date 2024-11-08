import reverseString from "./reverse-string";

test("Single word string returns reversed", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Multiple word string returns reversed", () => {
  expect(reverseString("Hello world!")).toBe("!dlrow olleH");
});

test("Parameters that aren't strings throw an error", () => {
  expect(() => reverseString(123)).toThrow(Error);
});
