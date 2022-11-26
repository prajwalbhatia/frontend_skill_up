/**
 * Read FAQs section on the left for more information on how to use the editor
**/
function customPop() {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError('Please use array')
  }

  let length = this.length || 0;

  if (!length) return undefined;

  let poppedElm = this[length - 1];
  delete this[length - 1];

  this.length = length - 1;

  return poppedElm;
}

Array.prototype.customPop = customPop;