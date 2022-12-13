//Q) What is unshift method?
// It add one or more element to the beginning of the array and return the length of the new array.

//cases
//let arr = [1,2,3]
//-> arr.unshift(10) -> return 5

//let arr = []
//-> arr.unshift(10) -> return 1

//let arr = [1,2,3]
//-> arr.unshift() -> return 3

//const obj = {
// length: 3,
//   unrelated: "foo",
//    2: 4,
// };

//Array.prototype.unshift.call(obj, 1, 2);

//here it will start from index 0
//index       -> value
// 0          -> 1
// 1          -> 2
// length - 1 -> 4 //already existing value
// all other properties as it is and length would be previous length + no. of arguments passed to append i.e 5

//{ 0: 1, 1: 2, 4: 4, length: 5, unrelated: "foo" }


function customUnshift() {
  'use strict';

  if (this === null || this === undefined) {
    throw new TypeError('unsift is not a function')
  }

  let length = this.length || 0;
  let list = this;
  let argsLength = arguments.length;

  if (!argsLength) {
    return length;
  }


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


let arr = [1,2,3,4];

console.log(arr.customUnshift(10));

console.log(arr)