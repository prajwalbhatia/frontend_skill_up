let arr = [1.1, 1.2, 1.3, 2.1, 2.4, 3.2];

// result = {
//   1 : [1.1 , 1.2 , 1.3],
//   2 : [2.1 , 2.4 ],
//   3 : [3.2]
// }

const upperCase = (item) => {
  return item.toUpperCase();
}

const reverse = (item) => {
  return item.split('').reverse().join('');
}

const append = (item) => {
  return "hello" + " " + item;
}

let arr1 = [upperCase , reverse , append];

const result = arr.reduce((acc, curr, currIndex, arr) => {
  const floorVal = Math.floor(curr);
  if (!acc[floorVal]) {
    acc[floorVal] = [];
  }

  acc[floorVal].push(curr)
  return acc;
}, {});


const result1 = arr1.reduce((acc , curr , currIndex , arr) => {
    const result = curr(acc);
    return result;
} , 'prajwal');

console.log(result1);


