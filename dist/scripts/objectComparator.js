"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _arrayComparator = _interopRequireDefault(require("./arrayComparator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var objectComparator = function objectComparator(object1, object2) {
  var isObject = function isObject(object) {
    if (_typeof(object) !== 'object') return false;
    return true;
  };

  if (object1 === null || object2 === null) {
    return object1 === object2;
  }

  if (!isObject(object1) || !isObject(object2)) return false;

  if (Array.isArray(object1) || Array.isArray(object2)) {
    if (Array.isArray(object1) && Array.isArray(object2)) {
      return (0, _arrayComparator["default"])(object1, object2);
    }

    return false;
  }

  var keys1 = Object.keys(object1);
  var keys2 = Object.keys(object2);
  var length = keys1.length;
  if (length !== keys2.length) return false;
  var keyMatches = keys1.filter(function (key1) {
    return keys2.includes(key1);
  });
  if (keyMatches.length !== length) return false;
  var valueMatches = keys1.filter(function (key1) {
    var value1 = object1[key1];
    var value2 = object2[key1];

    var valueType = _typeof(value1);

    if (valueType !== _typeof(value2)) return false;

    if (valueType === 'object') {
      return objectComparator;
    }

    return object1[key1] === object2[key1];
  });
  if (valueMatches.length !== length) return false;
  return true;
};

var _default = objectComparator;
exports["default"] = _default;