const response = {
  name: "Manu",
  age: 21,
  characteristics: {
    height: "6 feet",
    complexion: "dark",
    hair: "black",
  },
  techStack: {
    language: "Javascript",
    framework: {
      name: "Nextjs",
      version: "12",
    },
  },
};

function flatObject(object , keyPoint = "")
{
    let result = {};
    for(let key in object)
    {
        let keyVal = keyPoint.length ? `${keyPoint}.${key}` : key;
        if(typeof object[key] === 'string' || typeof object[key] === 'number')
        {
            result[keyVal] = object[key] 
        }
        else if(typeof object[key] === 'object')
        {
           result = {...result , ...flatObject(object[key] , keyVal)}
        }
    }

    return result;
}


console.log(flattenObj(response, "", {}));
