const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ['Jav'];

function highlight(str, words) {
  let modifiedString = str;
  words.forEach(word => {
    const indexInStr = modifiedString.indexOf(word[0]);
    const getTheWord = modifiedString.slice(indexInStr, indexInStr + word.length);

    if(getTheWord === word)
    {

      let splitted = modifiedString.split("");
      let newStr = splitted.splice(indexInStr, word.length)
      newStr.push('</strong>')
      newStr.unshift('<strong style={{color : "red"}}>')
      splitted.splice(indexInStr, 0 , newStr.join(""));
      modifiedString = splitted.join("");
    }
    
  });
  console.log(modifiedString)
}

highlight(str, words);