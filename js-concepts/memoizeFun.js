// //Memoize function

// const clumpsy = (num1 , num2) => {
//   for(let i = 0 ; i < 1000000000 ; i++)
//   {}
//     return num1 + num2;
  
// }


// const memoization = (fun, context) => {
//   let cache = {};

//   return function(...args)
//   { 
//     let argCache = JSON.stringify(args);

//     if(!cache[argCache])
//     {
//       cache[argCache] = fun.call(context || this , ...args);
//     }
//     else
//     {
//       return cache[argCache];
//     }
//   }
// }

// const memoized = memoization(clumpsy)


// console.time('First call');
// console.log(memoized(3233 , 4487));
// console.timeEnd('First call');

// console.time('Second call');
// console.log(memoized(3233 , 4487));
// console.timeEnd('Second call');
