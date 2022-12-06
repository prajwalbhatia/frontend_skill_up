const asyncFun = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => { reject('Failed') }, 1000)
  })
}

const retry = function (asyncFun, rettries = 3, delay = 50, finalError = 'Failed') {
  let executed = 0;
  let interval = null;

  async function executing(fun) {
    executed++;
    try {
      const data = await fun();
      console.log(data)
    } catch (error) {
      if (interval) {
        clearTimeout(interval);
      }

      if (executed !== rettries) {
        console.log('err')
        interval = setTimeout(() => {
          executing(fun);
          console.log('Retrying after 50ms')
        }, delay);
      }
      else {
        clearTimeout(interval)
        console.log(finalError)
      }
    }
  }

  executing(asyncFun);
}

retry(asyncFun);