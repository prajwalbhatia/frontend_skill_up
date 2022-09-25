// function Promisepolyfill(executor)
// { 

//   let onResolve , onReject , isFullfilled = false , isCalled = false , isRejected = false , value;

//   function resolve(val)
//   {
//       isFullfilled = true;
//       value = val;
//       if(typeof onResolve === 'function')
//       {
//         onResolve(value);
//         isCalled = true;
//       }
//   }

//   function reject(val)
//   {
//     isRejected = true;
//     value = val;
//     if (typeof onReject === 'function')
//     {
//       onReject(value);
//       isCalled = true;
//     }

//   }

//   this.then = function (callback)
//   {
//     onResolve = callback;

//     if(isFullfilled && !isCalled)
//     {
//       onResolve(value);
//     }
//     return this;
//   }

//   this.catch = function (callback)
//   {
//     onReject = callback;

//     if (isRejected && !isCalled) {
//       onReject(value);
//     }
//     return this;
//   }

//   executor(resolve , reject);
// }

// let promiseCall = new Promisepolyfill((resolve , reject) => {
//   // setTimeout(() => {
//       reject('I am reject')
//   // }, 1000);
// })

// promiseCall.then((res) => {
//   console.log(res);
// }).catch((error) => {
//   console.log(error)
// })


//Polyfill Promise.all

// function promise1()
// {
//   return new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve('Promise 1');
//     }, 1000);
//   })
// }

// function promise2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 2');
//     }, 1000);
//   })
// }

// function promise3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 3');
//     }, 1000);
//   })
// }



// let allPromise = Promise.all([promise1() , promise2() , promise3()]);

// console.log(allPromise.then((res) => console.log(res)));
// Promise.allPolyfill = (promises) => {
//   return new Promise((resolve , reject) => {
//     const results = [];

//     if(!promises.length)
//     {
//       resolve(results);
//       return;
//     }

//     const pending = promises.length;

//     promises.forEach((promise , index) => {
//       Promise.resolve(promise).then((res) => {
//         results[index] = res;
//         pending--;

//         if(pending === 0)
//         {
//           resolve(results);
//         }
//       } , reject)
//     });

//   })
// }