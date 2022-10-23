//Compare date object
// let d1 = new Date()
// let d2 = new Date(d1)

// // console.log(d1.getTime() === d2.getTime())
// console.log(d1 === d2)



// console.log("helloWorld".startsWith("Hello"))



// function sum(a ,b ,c , d)
// {
//   console.log("hello")
// }

// console.log(sum.length)


// var img = new Image(); //it creates new image tag just like document.createElement('img')
// img.onload = function () {
//   console.log(this.width + "x" + this.height);
// };
// img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";

// let obj = {
//   name : 'Prajwal bhatia'
// }

// Object.seal(obj);

// obj.name = 'Prajwal'
// obj.age = 24
// delete obj.name

// console.log(obj);

// const target = 5;
// const source = { b: 3, c: 4 };


// let returnedObj = Object.assign({a:target , ...source});

// console.log(returnedObj);


// const object = {
//   a: "Good morning",
//   b: 100,
// };

// console.log(Object.entries(object));

// for(let val of Object.entries(object))
// {
//   console.log(key, value)
// }

// for (let val of Object.values(object)) {
//   console.log(val)
// }




// let weak = new WeakSet();
// let strong = new Set();

// strong.
// weak.


// weak.add({a : 45})

// weak.add({ a: 45 })

// console.log(weak);




// let sampleObj = {a : 1}

// let newObj = Object.create(sampleObj)

// console.log(Object.getPrototypeOf(newObj) === sampleObj)


// let a = {p : '23'}

// let b = {t : '78'}

// let p = Object.assign(b , a)

// console.log(b)



// let sampleObj = {}

// let newObj = {}

// Object.setPrototypeOf(newObj , null)

// console.log(Object.getPrototypeOf(newObj))


// const getList = ([x, ...y]) => [x, y]
// const getUser = user => ({ name: user.name, age: user.age })

// const list = [1, 2, 3, 4]
// const user = { name: "Lydia", age: 21 }

// console.log(getList(list)) 
// console.log(getUser(user))

// let obj = { 
//   a : "34",
//   jh : {
//     name : 'dfgdhf'
//   }
// }

// let clone = structuredClone(obj)


// console.log(clone.jh === obj.jh);


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
//       reject('Promise 2');
//     }, 100);
//   })
// }

// function promise3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 3');
//     }, 1000);
//   })
// }


// // console.log(promise1().then((res) => console.log(res)) )
// // console.log(promise2())
// // console.log(promise3())


// let all = Promise.any([promise1() , promise2() , promise3()])

// console.log(all.then((res) => console.log(res)).catch(err => console.log(err)))



// async function loadJson()
// {
//   const fetched = await fetch(url);

//   if(fetched.status === 200)
//   {
//     let json = await fetched.json()
//     return json
//   }
//   else
//   {
//     throw new Error('hello')
//   }

// }



// loadJson("ajdsnds").catch((err) => console.log(err))



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
//       reject('Promise 2');
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



// function promiseRec (promises)
// {
//   if(promises.resolve === 0) return;

//   let data = promises.shift();
//   console.log('🚀 ~ file: index.js ~ line 223 ~ data', data);

//   data().then(res => console.log(res)).catch(err => console.log(err));

//   promiseRec(promises);

// }

// promiseRec([promise1 , promise2 , promise3]);

// function PromisePolyfill (executor) 
// {

//   let onResolve, onReject,isFullfilled = false , isCalled  = false , isRejected = false, value;

//   function resolve (val)
//   {
//     isFullfilled = true;
//     value = val;

//     if(typeof onResolve === 'function')
//     {
//       onResolve(val);
//       isCalled = true;
//     }
//   }

//   function reject(val) {
//     isRejected = true;
//     value = val;

//     if(typeof onReject === 'function')
//     {
//       onReject(val);
//       isCalled = true;
//     }
//   }

//   this.then = function (callback)
//   {
//     onResolve = callback;

//     if(isFullfilled && !isCalled)
//     {
//       isCalled = true;
//       onResolve(value);
//     }

//     return this;
//   }

//   this.catch = function (callback)
//   {
//     onReject = callback;

//     if (isRejected && !isCalled) {
//       isCalled = true;
//       onReject(value);
//     }

//     return this;
//   }

//   executor(resolve , reject);
// }

// const examplePromise = new PromisePolyfill((resolve , reject) => {
//   // setTimeout(() => {
//     reject('I am rejected')
//   // }, 1000)
// });

// examplePromise.then((res) => {
//   console.log(res)
// })
// .catch((error) => {
//   console.log(error)
// })


// const calc = {
//   total : 0,
//   add : function(val) {
//     this.total += val;
//     return this;
//   },
//   subtract: function (val) {
//     this.total -= val;
//     return this;
//   },
//   multiply: function (val) {
//     this.total *= val;
//     return this;
//   },
// }

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total)



// function output() {
//   for (var i = 0; i < 3; i++) {
//     function a(val) {
//       var i = val;
//       setTimeout(() => {
//         console.log(i)
//       }, 1000);
//     }
//     a(i);
//   }
// }

// output();
