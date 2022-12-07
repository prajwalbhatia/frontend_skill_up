//What is debouncing
//It is basically a way to execute a function 
//-> when it is made sure that no more function call will happen in that particular time frame

//With the help of this approach we can improve the performance of our webapp by not calling same function again and again in a partiular time frame
//Typical example is search bar we found in almost every webapp

//if you want to learn debounce in more depth then follow the link - https://hashnode.com/post/javascript-debouncing-ckoon9ijs0lpo6ds151lsclkx

//PROBLEM STATEMENT
//1) Implement a debounce function

const debounceFun = (callback, delay) => {
  let timer; //variable to keep record of timeout

  //returns a new anonymous function
  return function () {
    const context = this;
    const args = arguments;

    if (timer) clearTimeout(timer); //clearing the timeout if it already exist

    timer = setTimeout(() => {
      callback.apply(context, [...args]) //calling a callback after a delay
    }, delay);
  }
}


function value(val) {
  console.log(val)
}


// const debounced = debounceFun(value, 1000);
// debounced('c');
// debounced('co');
// debounced('cod');

// setTimeout(() => {
//   debounced('code');
// }, 900);


//Result will be -> 'code'


//PROBLEM STATEMENT
//1) Implement a debounce function with immediate flag

//-> Immediate flag should be optional and it should only work for inital function call
const debounceFunImmediate = (callback, delay, immediate = true) => {
  let timer; //variable to keep record of timeout

  //returns a new anonymous function
  return function () {
    const context = this;
    const args = arguments;
    let callNow = immediate && !timer; //id immediate flag is true and we don't already have something in timer(i.e initial case)

    if (timer) clearTimeout(timer); //clearing the timeout if it already exist

    if (callNow) callback.apply(context, [...args]) //calling function for initial case

    timer = setTimeout(() => {
      callback.apply(context, [...args]) //calling a callback after a delay
    }, delay);
  }
}


function value(val) {
  console.log(val)
}


const debounced = debounceFunImmediate(value, 1000);
debounced('c');
debounced('co');
debounced('cod');

setTimeout(() => {
  debounced('code');
}, 900);


//Result will be -> 'c' //initial call
//-> 'code'

