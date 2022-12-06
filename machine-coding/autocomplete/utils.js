import { FRUITS } from "./data.js";

export const getSuggestion = (keyword) => {
  let result = [];
  if (keyword.length > 0) {
    result = FRUITS.filter(
      (i) => i.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
    );
  } else {
    return [];
  }

  const modifiedResult = result.map((item) => highlight(item.toLowerCase(), keyword))

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(modifiedResult);
    }, 500);
  });
};

export const debounce = (func, delayTime = 500) => {
  let timer = null;

  return function (args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, arguments);
    }, delayTime);
  };
};


const highlight = (str, word) => {
  let modifiedString = str;
  let result = [];
  const indexInStr = modifiedString.indexOf(word[0]);
  const getTheWord = modifiedString.slice(indexInStr, indexInStr + word.length);

  if (getTheWord === word) {
    let splitted = modifiedString.split("");
    let newStr = splitted.splice(indexInStr, word.length)
    newStr.push('</strong>')
    newStr.unshift('<strong style="color:blue;background:yellow">')
    splitted.splice(indexInStr, 0, newStr.join(""));
    modifiedString = splitted.join("");
    return modifiedString
  }
}
