import capitalize from "./capitalize";

test("Capitalized single word string remains capitalized on first letter", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("Not capitalized single word string returns capitalized on first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Not capitalized multiple word string returns all first letters capitalized", () => {
  expect(capitalize("hello world!")).toBe("Hello World!");
});

test("Multiple word string with various capitalizations returns first letters capitalized", () => {
  expect(capitalize("why heLLo There!")).toBe("Why HeLLo There!");
});

test("String with numbers returns with words capitalized on first letter", () => {
  expect(capitalize("hello world 123!")).toBe("Hello World 123!");
});

test("Parameters that aren't strings throw an error", () => {
  expect(() => capitalize(123)).toThrow(Error);
});
