export default function analyseArray(array) {
  if (!Array.isArray(array) || arguments.length > 1) {
    throw new Error("Parameter must be a single ARRAY of numbers!");
  }

  const minVal = Math.min(...array);
  const maxVal = Math.max(...array);
  const lengthVal = array.length;
  let averageVal = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      throw new Error("Parameter must be an array of NUMBERS only!");
    }
    averageVal += array[i];
  }
  averageVal = averageVal / array.length;

  return {
    min: minVal,
    max: maxVal,
    average: averageVal,
    length: lengthVal,
  };
}
