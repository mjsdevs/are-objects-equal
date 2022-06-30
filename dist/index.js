"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var areObjectsEqual = function areObjectsEqual(a, b) {
  if (a === b) return true;
  if (_typeof(a) !== _typeof(b)) return false;

  var typeOfVariables = _typeof(a);

  var isANaN = typeOfVariables === 'number' && isNaN(a);
  var isBNaN = typeOfVariables === 'number' && isNaN(b);
  if (isANaN && isBNaN) return true;
  if (isANaN || isBNaN) return false;

  if (typeOfVariables !== 'object') {
    if (a !== b) return false;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; i += 1) {
      if (!areObjectsEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  } else if (Array.isArray(a) || Array.isArray(b)) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  for (var _i = 0; _i < keysA.length; _i += 1) {
    var currentKey = keysA[_i];

    if (!areObjectsEqual(a[currentKey], b[currentKey])) {
      return false;
    }
  }

  for (var _i2 = 0; _i2 < keysB.length; _i2 += 1) {
    var _currentKey = keysB[_i2];

    if (!areObjectsEqual(a[_currentKey], b[_currentKey])) {
      return false;
    }
  }

  return true;
};

var _default = areObjectsEqual;
exports["default"] = _default;