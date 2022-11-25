import { FRUITS } from "./data.js";

export const getSuggestion = (keyword) => {
  console.log(keyword);
  let result = [];
  if (keyword.length > 0) {
    result = FRUITS.filter(
      (i) => i.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
    );
  } else {
    return [];
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
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
