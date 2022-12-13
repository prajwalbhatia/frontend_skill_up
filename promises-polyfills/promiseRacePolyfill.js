//Q)WHAT Promise.any do?
//1 -> it return a promise
//2 -> it return fulfill or reject promise as soon as any of the input promise fulfills or reject
//3 -> if no input promise is resolved then it will resturn with the array of error of rejections of all promises

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1');
    }, 500);
  })
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2');
    }, 100);
  })
}

function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 3');
    }, 20);
  })
}

function myPromiseAny(taskList) {
  let result = [];
  return new Promise((resolve, reject) => {
    taskList.forEach((promise) => {
      promise.then((res) => {
        resolve(res);
      })
        .catch((err) => {
          reject(err);
        })
    })
  })
}


Promise.myPromiseAny = myPromiseAny;
Promise.myPromiseAny([promise1(), promise2(), promise3()]).then((result) => {
  console.log(result)
}).catch((error) => console.log('ERROR' , error))