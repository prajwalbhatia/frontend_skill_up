function customEvery(callback) {
  'use strict';

  if (this === null || this === undefined) {
    throw new TypeError('Please use array')
  }
  else if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  let list = Object(this);
  let thisArg = arguments[1] || this;
  let length = this.length || 0;
  let currentValue = undefined;

  if (!length) return true

  for (let i = 0; i < length; i++) {
    currentValue = list[i]
    if (i in list && !callback.call(thisArg, currentValue, i, list)) {
      return false;
    }
  }

  return true;

}

Array.prototype.customEvery = customEvery;