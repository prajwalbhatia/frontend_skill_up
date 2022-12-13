const response = {
  name: 'Manu',
  age: 21,
  characteristics: {
    height: '6 feet',
    complexion: 'dark',
    hair: 'black',
  },
  techStack: {
    language: 'Javascript',
    framework: {
      name: 'Nextjs',
      version: '12',
    },
  },
};

function flattenObj(objData, keyPoint, obj) {

  let keyVal = keyPoint;
  let result = { ...obj };

  for (let key in objData) {
    if (typeof objData[key] === 'object') {
      keyVal = keyVal.length > 0 ? `${keyVal}.${key}` : key;
      result = { ...result, ...flattenObj(objData[key], keyVal, result) };
      keyVal = ""
    }
    else {
      let keyData = keyVal.length > 0 ? `${keyVal}.${key}` : key;
      result[keyData] = objData[key]
    }
  }

  return result;

}

console.log(flattenObj(response, "", {}));

// let result = {};
// let keyData = '';
// const flattenObj = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       keyData = key;
//       flattenObj(obj[key]);
//     } else {
//       let keyVal = keyData.length > 0 ? `${keyData}.${key}` : key;
//       result[keyVal] = obj[key];
//     }
//   }

//   return result;
// };


// function flattenObj(objData) {
//   function flat(obj, keyPoint,resultData) {
//     let result = {};
//     let keyData = keyPoint;
//     for (let key in obj) {
//       if (typeof obj[key] === 'object') {
//         keyData = keyData.length > 0 ? `${keyData}.${key}` : key;
//         result = { ...result, ...resultData, ...flat(obj[key], keyData, result) };
//         keyData = ""
//       } else {
//         let keyVal = keyData.length > 0 ? `${keyData}.${key}` : key;
//         result[keyVal] = obj[key];
//       }
//     }

//     return result;
//   }
//   return flat(objData , "" , {});
// }



