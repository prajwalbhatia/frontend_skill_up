//Q) What is some method?
// 1) Atleast one element passes the condition given in the callback
// 2) It return true for the match otherwise it return false
// 3) some() will not run its predicate on empty slots.

//It can be called in three ways
//1) some((val) => {...})
//2) some(callback , thisArg)
//1) some(function() {} , thisArgs)

//cases
//let arr = [1,2,3]
//-> arr.some((val) => val > 1)  -> return true

//let arr = []
//-> arr.some((val) => val > 1)  -> return false

//let arr = [1,2,3]
//-> arr.some() -> Uncaught TypeError: missing argument 0 when calling function Array.prototype.some


//example taken from MDN
// const arrayLike = {
//   length: 3,
//   0: "a",
//   1: "b",
//   2: "c",
// };

// console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
//false


function customSome(callback) {
  'use strict';

  if (this === null || this === undefined) {
    throw new TypeError('some is not a function')
  }
  else if (callback && typeof callback !== 'function') {
    throw new TypeError('missing argument 0 when calling function Array.prototype.customSome');
  }

  let list = Object(this);
  let thisArgs = arguments[1] || this; //if this is explicitly passed
  let length = this.length || 0;
  let currentValue = undefined;

  if (!length) return false;
  let found = false;

  for (let i = 0; i < length; i++) {
    currentValue = this[i];
    if (i in list && callback.call(thisArgs, currentValue, i, list)) {
      found = true;
      break;
    }
  }

  return found;
}

Array.prototype.customSome = customSome;