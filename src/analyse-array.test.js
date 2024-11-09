import analyseArray from "./analyse-array";

test("Array of numbers returns an object", () => {
  expect(analyseArray([1, 2, 7, 5, 9])).toEqual(expect.any(Object));
});

test("Returned object contains min, max, length & average values", () => {
  expect(analyseArray([1, 2, 7, 5, 9])).toEqual(
    expect.objectContaining({
      min: expect.any(Number),
      max: expect.any(Number),
      average: expect.any(Number),
      length: expect.any(Number),
    })
  );
});

test("Throw error if parameter isn't a single array", () => {
  expect(() => analyseArray(1)).toThrow(Error);
  expect(() => analyseArray([1, 2, 3], 4, 5)).toThrow(Error);
});

test("Return smallest number in the array in object.min", () => {
  expect(analyseArray([1, 2, 7, 5, 9])).toEqual(
    expect.objectContaining({
      min: 1,
    })
  );
});

test("Return biggest number in the array in object.max", () => {
  expect(analyseArray([1, 2, 7, 5, 9])).toEqual(
    expect.objectContaining({
      max: 9,
    })
  );
});

test("Return average of numbers in array in object.average", () => {
  expect(analyseArray([1, 2, 7, 5, 10])).toEqual(
    expect.objectContaining({
      average: 5,
    })
  );
});

test("Return length of the array in object.length", () => {
  expect(analyseArray([1, 2, 7, 5, 10])).toEqual(
    expect.objectContaining({
      length: 5,
    })
  );
});

test("Throw error if array contains non number values", () => {
  expect(() => analyseArray([1, 2, "seven", 4, 3, "ten"])).toThrow(Error);
});
