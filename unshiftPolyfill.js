
function customUnshift() {
  'use strict';

  if (this === null || this === undefined) {
    throw new TypeError('Please use array')
  }

  let length = this.length || 0;
  let list = Object(this);
  let argsLength = arguments.length;

  if (!argsLength) {
    return length;
  }

  let totalLength = argsLength + length;

  for (let i = length - 1; i >= 0; i--) {
    if (i in list) {
      this[i + argsLength] = this[i];
    }

    delete this[i];
  }

  for (let i = argsLength - 1; i >= 0; i--) {
    this[i] = arguments[i];
  }

  this.length = length + argsLength;

  return this.length;
}

Array.prototype.customUnshift = customUnshift;