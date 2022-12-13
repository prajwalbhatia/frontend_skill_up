//Q)WHAT Promise.all do?
//1-> it return a promise
//2 -> it resolve when all the promises are resolved
//3 -> it reject when one of the promise get rejected

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1');
    }, 1000);
  })
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2');
    }, 1000);
  })
}

function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3');
    }, 1000);
  })
}

function myPromiseAll(taskList) {
  let result = [];
  let promiseResolved = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise.then((res) => {
        result[index] = res;
        promiseResolved += 1;

        if (promiseResolved === result.length) {
          resolve(result);
        }
      })
        .catch((err) => {
          reject(err);
        })
    })
  })
}


Promise.myPromiseAll = myPromiseAll;
Promise.myPromiseAll([promise1(), promise2(), promise3()]).then((result) => {
  console.log(result)
});