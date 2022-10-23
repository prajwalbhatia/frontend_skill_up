const field = document.getElementById('normalCall');
const field2 = document.getElementById('throttleCall');

let count = 0;
let countThrottle = 0;

function throttle(func, wait) {
  // your code here
  let waiting = false;
  let waitingArgs = null;

  const timeoutFun = () => {
    if (waitingArgs == null) {
      waiting = false;
    }
    else {
      func(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFun, wait)
    }
  }

  return (...args) => {
    if (waiting) {
      waitingArgs = args
      return;
    }


    func(...args);
    waiting = true;

    setTimeout(timeoutFun, wait)

  }
}

const throttleFunc = () => {
  countThrottle += 1;
  field2.innerHTML = countThrottle;
} 


document.addEventListener('mousemove' , () => {
  count += 1;
  field.innerHTML =  count;
})


document.addEventListener('mousemove', throttle(throttleFunc , 1000))




function throttle(func, wait) {
  let waiting = false;

  return (...args) => {
    //If waiting is true then we just have to ignore the more function call
    if (waiting) {
      return;
    }

    //if waiting is false then we have to straight away execute the function and put the waiting = true
    func(...args);
    waiting = true;

    //After waiting for the time provided we have to update the waiting to false, so that we can take the new
    //function call
    setTimeout(() => {
      waiting = false
    }, wait)
  }
}

//Calling the function
const throttled = throttle(() => { console.log('throttling....') , 1000})
throttled();
