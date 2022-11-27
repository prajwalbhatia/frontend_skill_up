function customSome(callback) {
  'use strict';

  if (this === null || this === undefined) {
    throw new TypeError('Please use array')
  }
  else if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  let list = Object(this);
  let thisArgs = arguments[1] || this;
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