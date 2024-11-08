"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reverseString;
function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Parameter is not a string!");
  }
  let stringReversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringReversed += string.charAt(i);
  }
  return stringReversed;
}