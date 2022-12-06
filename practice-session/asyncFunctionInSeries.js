// function asyncTask(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value)
//     }, 1000 * value);
//   });
// }

// const input = [
//   asyncTask(3),
//   asyncTask(1),
//   asyncTask(2)
// ]


// const asyncSeriesExecuter = async function (input) {

// 1) WAY 1 (IT WILL RETRUN ARRAY )
// Promise.all(input)
// .then((res) => console.log(res))

// 2) WAY 2
// for (let promise of input) {
//   try {
//     const promiseData = await promise;
//     console.log(promiseData)
//   } catch (error) {
//     console.log('error')
//   }
// }

// WAY 3 - Recurssion
// const curr = input.shift();

// curr.then((res) => {
//   console.log(res);

//   if(input.length > 0)
//   {
//     asyncSeriesExecuter(input)
//   }
// })
// .catch((err) => {
// })

// }

// asyncSeriesExecuter(input)
