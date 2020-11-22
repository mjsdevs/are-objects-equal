"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectComparator = _interopRequireDefault(require("./objectComparator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var areArraysEqual = function areArraysEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  if (array1.length !== array2.length) return false;
  var matches = array1.filter(function (element1, index) {
    var type = _typeof(element1);

    var element2 = array2[index];
    if (type !== _typeof(element2)) return false;

    if (type === 'object') {
      if (element1 === null || element2 === null) {
        return element1 === element2;
      }

      if (!Array.isArray(element1) && !Array.isArray(element2)) {
        return (0, _objectComparator["default"])(element1, element2);
      }

      if (Array.isArray(element1) && Array.isArray(element2)) {
        return areArraysEqual(element1, element2);
      }

      return false;
    }

    return element1 === element2;
  });
  if (matches.length !== array1.length) return false;
  return true;
};

var _default = areArraysEqual;
exports["default"] = _default;