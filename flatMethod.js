// let arr = [
//   [1,2,3,4],
//   [1,2],
//   [3,6 , [3 , 4]]
// ];

// let arr = [
//   [1, 2, 3, 4],
//   [1, 2, 3, [3, 4], 4],


// ];

// function flat(arr, depth = 1) {
//   let result = [];

//   arr.forEach(element => {
//     if (Array.isArray(element) && depth > 0) {
//       result.push(...flat(element , depth - 1))
//     }
//     else {
//       result.push(element)
//     }
//   });

//   return result;
// }


// console.log(flat(arr , 1))