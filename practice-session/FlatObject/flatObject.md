    const response = {

    name: "Prajwal",

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

**Output =**

    {

    age: 21,

    characteristics.complexion: "dark",

    characteristics.hair: "black",

    characteristics.height: "6 feet",

    name: "Manu",

    techStack.framework.name: "Nextjs",

    techStack.framework.version: "12",

    techStack.language: "Javascript"

    }

**Step 1) Define function and call function**

    function flatObject(object)

    {



    }



    flatObject(res)

**Step 2) Break the problem into small problems**

    const response = {

    name: "Prajwal",

    age: 21,

    }

**Step 3) Here we can see that we have two type of data which is string and number, let's handle this**

    function flatObject(object)

    {

    for(let key in object)

    {

    if(typeof object[key] === 'string' || typeof object[key] === 'number')

    {



    }

    }

    }



**Step 4) One condition is ready now if this condition is passed then we have to add the data in the final result object**

    function flatObject(object)

    {

    let result = {};

    for(let key in object)

    {

    if(typeof object[key] === 'string' || typeof object[key] === 'number')

    {

    result[key] = object[key]

    }

    }



    return result;

    }



**Output =**

    {

    name: "Prajwal",

    age: 21,

    }



    flatObject(res)

**Step 5) Increase the complexity of problem**

    const response = {

    name: "Prajwal",

    age: 21,

    characteristics: {

    height: "6 feet",

    complexion: "dark",

    hair: "black",

    },

    }

Now we can see that we have one more data type to handle i.e object, let's handle this

    function flatObject(object)

    {

    let result = {};

    for(let key in object)

    {

    if(typeof object[key] === 'string' || typeof object[key] === 'number')

    {

    result[key] = object[key]

    }

    else if(typeof object[key] === 'object')

    {

    }

    }



    return result;

    }



**Step 6) Now we can see that if it is a object then in that we again have data types like string , number which case is already handled , so it is clearly visible that this is a case of recurrsion, so**

    function flatObject(object)

    {

    let result = {};

    for(let key in object)

    {

    if(typeof object[key] === 'string' || typeof object[key] === 'number')

    {

    result[key] = object[key]

    }

    else if(typeof object[key] === 'object')

    {

    flatObject(object[key])

    }

    }



    return result;

    }

**Step 7) We know that flatObject will return an object so we have to handle that way, and also we have to retain the previous result**

    function flatObject(object)

    {

    let result = {};

    for(let key in object)

    {

    if(typeof object[key] === 'string' || typeof object[key] === 'number')

    {

    result[key] = object[key]

    }

    else if(typeof object[key] === 'object')

    {

    result = {...result , ...flatObject(object[key])}

    }

    }



    return result;

    }

**Output =**

    {

    age: 21,

    complexion: "dark",

    hair: "black",

    height: "6 feet",

    name: "Prajwal"

    }

We can see that result is correct but we have to handle the key , so basically we have to pass the key of the parent object when we are calling the flatObject method again

**Step 8) To retain the key of the parent object we have to pass another param in flatObject function whose initial value will be empty string because initially we don't have any parent**

    function flatObject(object , keyPoint = "")

    {

    let result = {};

    for(let key in object)

    {

    if(typeof object[key] === 'string' || typeof object[key] === 'number')

    {

    result[key] = object[key]

    }

    else if(typeof object[key] === 'object')

    {

    result = {...result , ...flatObject(object[key] , key)}

    }

    }



    return result;

    }

**Step 9) Now we have to use this param
So while looping over the object**

    const response = {

    name: "Prajwal",

    age: 21,

    characteristics: {

    height: "6 feet",

    complexion: "dark",

    hair: "black",

    },

    }

First is name -> result = {name : 'Prajwal'}

Second is age -> result = { name : 'Prajwal' , age : 21}

Third is characteristics which is a object , so we call our flatObject again with

    {

    height: "6 feet",

    complexion: "dark",

    hair: "black",

    }

and key = characteristics

Now we again iterating over object

    {

    height: "6 feet",

    complexion: "dark",

    hair: "black",

    }

but now the key should be

First is characteristics.height -> result = {characteristics.height : '6 feet'}

Second is characteristics.complexion -> result = {characteristics.height : '6 feet' , characteristics.complexion : 'dark'}

Third is characteristics.hair -> result = {characteristics.height : '6 feet' , characteristics.complexion : 'dark' , characteristics.hair : 'black'}

So to handle this case we will do one thing

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

**Output =**

    {

    age: 21,

    characteristics.complexion: "dark",

    characteristics.hair: "black",

    characteristics.height: "6 feet",

    name: "Prajwal"

    }

**Step 10) Now if we use the complete input i.e**

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

**Output =**

    {

    age: 21,

    characteristics.complexion: "dark",

    characteristics.hair: "black",

    characteristics.height: "6 feet",

    name: "Manu",

    techStack.framework.name: "Nextjs",

    techStack.framework.version: "12",

    techStack.language: "Javascript"

    }
