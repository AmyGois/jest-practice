function shift(charCode, initialCharCode, shiftValue) {
  let value = charCode - initialCharCode;
  let shifted = (value + shiftValue) % 26;
  return shifted;
}

function caesarCipher(string, shiftValue) {
  if (typeof string !== "string") {
    throw new Error("First parameter must be a string!");
  }

  if (!Number.isInteger(shiftValue)) {
    throw new Error("Second parameter must be an integer number!");
  }

  let shiftedString = "";

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      let shifted = shift(string.charCodeAt(i), 97, shiftValue);
      shiftedString += String.fromCharCode(97 + shifted);
    } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      let shifted = shift(string.charCodeAt(i), 65, shiftValue);
      shiftedString += String.fromCharCode(65 + shifted);
    } else {
      shiftedString += string.charAt(i);
    }
  }

  return shiftedString;
}

export default caesarCipher;
