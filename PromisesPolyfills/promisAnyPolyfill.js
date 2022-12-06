//Q)WHAT Promise.any do?
//1 -> it return a promise
//2 -> it resolve as soon as any of the input promise get resolved
//3 -> if no input promise is resolved then it will resturn with the array of error of rejections of all promises

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 1');
    }, 1000);
  })
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2');
    }, 500);
  })
}

function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 3');
    }, 100);
  })
}

function myPromiseAny(taskList) {
  let result = [];
  let promiseRejected = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise.then((res) => {
        resolve(res);
      })
        .catch((err) => {
          result[index] = err;
          promiseRejected += 1;

          if (promiseRejected === result.length) {
            reject(result);
          }
        })
    })
  })
}


Promise.myPromiseAny = myPromiseAny;
Promise.myPromiseAny([promise1(), promise2(), promise3()]).then((result) => {
  console.log(result)
});