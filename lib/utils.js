"use strict";

var isArray = Array.isArray;
var hasOwn = Object.prototype.hasOwnProperty;

/**
 * @param  {Object} v
 */
function clone(v) {
  if (v === null || typeof v !== "object") {
    return v;
  }

  if (isArray(v)) {
    var arr = v.slice();
    for (var i = 0; i < v.length; i++) {
      arr[i] = clone(arr[i]);
    }
    return arr;
  } else {
    var obj = {};
    for (var k in v) {
      obj[k] = clone(v[k]);
    }
    return obj;
  }
}

/**
 * @param  {Object} firstObject
 * @param  {Object} secondObject
 * @param  {Boolean} ifAppend
 */
exports.merge = function (firstObject, secondObject, ifAppend) {
  if (firstObject === null || typeof firstObject !== "object") {
    throw new TypeError(
      "merge() - First Object has to be an object, not " +
        typeof firstObject +
        "."
    );
  }

  if (secondObject === null || typeof secondObject !== "object") {
    throw new TypeError(
      "merge() - Second Object has to be an object, not " +
        typeof secondObject +
        "."
    );
  }

  if (isArray(firstObject) || isArray(secondObject)) {
    throw new TypeError("merge() - Unsupported for arrays.");
  }

  for (var key in secondObject) {
    var firstObjectVal,
      secondObjectVal = secondObject[key];
    if (hasOwn.call(firstObject, key)) {
      if (!ifAppend) {
        firstObjectVal = firstObject[key];
        if (
          firstObjectVal !== null &&
          typeof firstObjectVal === "object" &&
          secondObjectVal !== null &&
          typeof secondObjectVal === "object"
        ) {
          merge(firstObjectVal, secondObjectVal);
        } else {
          firstObject[key] = clone(secondObjectVal);
        }
      }
    } else {
      firstObject[key] = clone(secondObjectVal);
    }
  }
  return firstObject;
};

/**
 * @param  {String} signingKey
 * @param  {String} subscriptionKey
 */
exports.tokenGenerator = function (signingKey, subscriptionKey) {
  var bas64_subscription_key =
    "" + new Buffer.from(subscriptionKey).toString("base64");

  var tokenString =
    "" + new Buffer(signingKey + bas64_subscription_key).toString("base64");

  return tokenString;
};
