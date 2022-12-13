function addFive(a) {
  return a + 5;
}

function subtractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

//One way
// const compose = (...args) => {
//   return function (value) {
//     let result = value;
//     args.reverse().forEach((element, index) => {
//         result = element(result);
//     })

//     return result
//   }
// }


//other way
// const compose = (...args) => {
//   return function (value) {
//     return args.reduceRight((acc , fun) => fun(acc) , value)
//   }
// }


// const evaluate = compose(addFive, subtractTwo, multiplyFour);

// console.log(evaluate(5));

