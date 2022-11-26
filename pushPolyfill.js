function customPush()
{
  if(this === null || this === undefined)
  {
    throw new TypeError('Please use array')
  }

  let length = this.length || 0;
  let argsLength = arguments.length;

  if(!argsLength)
  {
    return length;
  }

  for(let i = 0 ; i < argsLength.length ; i++)
  {
    this[i + length] = arguments[i];
  }

  this.length = length + argsLength;

  return this.length;
}

Array.prototype.customPush;