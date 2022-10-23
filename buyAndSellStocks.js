// var findAnagrams = function (s, p) {
//   let start = 0;
//   let end = 0;
//   debugger
//   let newMap = new Map();
//   let index = [];

//   for(let val of p)
//   {
//     if(newMap.has(val))
//     {
//       newMap.set(val , newMap.get(val) + 1)
//     }
//     else
//     {
//       newMap.set(val, 1);
//     }
//   }

//   let count = newMap.size;


//   while(end < s.length)
//   {
//     if(newMap.has(s[end]))
//     {
//       newMap.set(s[end], newMap.get(s[end]) - 1);

//       if(newMap.get(s[end]) === 0) count--;
//     }

//     if(count === 0) index.push(start);

//     if(end - start + 1 < p.length)
//     {
//       end ++;
//     }
//     else if(end - start + 1 === p.length)
//     {
//         if(newMap.has(s[start]))
//         {
//           newMap.set(s[start] , newMap.get(s[start]) + 1)

//           if (newMap.get(s[start]) === 1 ) count++;
//         }

//         start++;
//         end++;
//     }
//   }

//   return index
// };

// console.log(findAnagrams("cbaebabacd", "abc"));