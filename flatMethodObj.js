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

let result = {};
let keyData = '';
const flattenObj = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      keyData = key;
      flattenObj(obj[key]);
    } else {
      let keyVal = keyData.length > 0 ? `${keyData}.${key}` : key;
      result[keyVal] = obj[key];
    }
  }

  return result;
};

console.log(flattenObj(response));