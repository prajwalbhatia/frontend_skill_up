function sameValueZero(x, y) {
  console.log(x, y)
  return (
    x === y ||
    (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))
  );
}

function customInclude(searchElement)
{
  if(this === undefined || this === null)
  {
    throw new TypeError('Please provide array')
  }
  
  let list = Object(this);
  let length = list.length || 0;

  if(!length) return false;

  let fromIndex = parseInt(arguments[1]) || 0

  if(fromIndex > length) return false;

  let computedFromIndex = Math.max( fromIndex >=0 ? fromIndex : length - Math.abs(fromIndex) , 0);

  let found = false;

  for (let i = computedFromIndex; i < length; i++) {
    if (sameValueZero(list[i], searchElement)) {
      found = true;
      break;
    }
  }

  return found;

}

Array.prototype.customInclude = customInclude;