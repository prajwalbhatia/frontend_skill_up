const getName = (object) => object.name;
const makeUpperCase = (string) => string.toUpperCase();
const slice = (string) => string.slice(0, 3);

const pipe = (...funs) => {

	return (arg) => {
  	const funcArr = [...funs];
    let returnVal = arg;
    funcArr.forEach(fun => {
    	 returnVal = fun(returnVal);
    })
    
    return returnVal;
  }
}

const method = pipe(getName , makeUpperCase , slice);

console.log(method({name : 'prajwal'}))
