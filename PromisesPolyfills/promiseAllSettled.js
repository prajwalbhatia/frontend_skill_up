//Q)WHAT Promise.allSettle do?
//1-> it return a promise
//2 -> it return an array with a result of all the promises whether they are rejected or resolved


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

function myPromiseAllSettled(promisesList) {
  let result = [];

  result = promisesList.map((promise) => {
    return promise.then((result) => {
      return {status : 'fulfilled' , value : result}
    })
    .catch((err) => {
      return { status: 'rejected', value: err }
    })
  })


  return Promise.all(result);
}


Promise.myPromiseAllSettled = myPromiseAllSettled;
Promise.myPromiseAllSettled([promise1(), promise2(), promise3()]).then((result) => {
  console.log(result)
});