let obj = {firstName : "Prajwal" , lastName : "Bhatia"}

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
}

function myBind(...args)
{
  let obj = this;
  let params= args.slice(1)
  return function (...args2){
    obj.apply(args[0] , [...params , ...args2])
  }
}

Function.prototype.myBind = myBind;