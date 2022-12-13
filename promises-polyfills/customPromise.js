function MyOwnPromise(callback) {

  let isFullfilled = false, onResolve, onReject, value, isCalled = false, isRejected = false;

  if (typeof callback !== 'function') {
    throw TypeError('')
  }

  function resolve(val) {
    isFullfilled = true;
    value = val;

    if (typeof onResolve === 'function') {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onReject === 'function') {
      onReject(value);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFullfilled && !isCalled) {
      onResolve(value);
    }

    return this;
  }

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      onReject(value);
    }
    return this;
  }

  callback(resolve, reject);

}

let promiseCall = new MyOwnPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am resolved')
  }, 1000);
})

promiseCall.then((res) => {
  console.log(res);
}).catch((error) => {
  console.log(error)
})