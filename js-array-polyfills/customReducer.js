//CUSTOM REDUCER

function customReduce(callback, initialValue) {
  // DO NOT REMOVE
  'use strict';

  if (typeof callback !== 'function') throw new TypeError();

  if (this.length === 0 && initialValue) return initialValue;

  if (typeof this !== 'object') throw new TypeError();

  if (this.length === 0) throw new TypeError();

  // write your solution below
  let arr = this;
  let accumulator = initialValue || arr[0];

  let initialIndex = initialValue ? 0 : 1;

  for (let i = initialIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

Array.prototype.customReducer = customReducer;


const arr = [1 , 2 , 3 , 4]

const reduced = arr.customReducer((accu, curr) => accu += curr , 0);


// const reduced = arr.reduce((accu , curr) => accu += curr)

console.log(reduced);