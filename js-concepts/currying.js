//What is currying
//It is basically a concept in which 
//-> we return a function for each function invoked
//-> returned functions accepts the next argument 

//With the help of this approach we can transform a function with multiple argumanets into a sequence of function
//eg -> add(1,2,3)
//currying -> add(1)(2)(3)

//PROBLEM STATEMENT
//1) Implement a currying function for 4 arguments. When we have
//reached the limit, return the value.


function sum(...values) {
  let storage = [...values]; //copying all the arguments in a array

  if (storage.length === 4) {
    return storage.reduce((acc, curr) => acc + curr, 0)
  }
  else
  {
    return function temp (...args) {//returning the function that accepts some values
        storage.push(...args); //adding new arguments to the array to maintain the length and to calculate the final sum

      if (storage.length === 4) {
        return storage.reduce((acc, curr) => acc + curr, 0)
      }
      else
      {
        return temp;
      }
    }
  }
}



let val = sum(1, 2)(3, 4)
console.log(val);