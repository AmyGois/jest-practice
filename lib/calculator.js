"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function checkIfNumber(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Both parameters must be numbers!");
  }
}
const calculator = {
  add: function (x, y) {
    checkIfNumber(x, y);
    return x + y;
  },
  subtract: function (x, y) {
    checkIfNumber(x, y);
    return x - y;
  },
  divide: function (x, y) {
    checkIfNumber(x, y);
    return x / y;
  },
  multiply: function (x, y) {
    checkIfNumber(x, y);
    return x * y;
  }
};
var _default = exports.default = calculator;