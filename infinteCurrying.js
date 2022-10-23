//Infinite currying

// const add = function (val1) {
//   return function (val2) {
//     return function ()
//     {
//       return val1 + val2;
//     }
//   }
// } 
// console.log(add(5)(2)());

// const add = function(val1)
// {
//   return function(val2)
//   {
//     if(val2) return add(val1 + val2)
//     else return val1;
//   }
// } 

// console.log(add(5)(2)(8)());


// Driver code
// let sum = function (a) {
//   // Write your code here
//   return (b) => {
//     if (b) return sum(a + b);
//     else return a;
//   };
// };

// console.log(sum(1)(2)(5)());
// // console.log(sum(1)(2)(5)());
