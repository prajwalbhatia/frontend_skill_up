const memoization20Add = () => {
  let cache = {}

  return (val) => {
    if(val in cache)
    {
      console.log('returning from cache')
      return cache[val];
    }
    else
    {
      let result = val + 20;
      console.log('restuning normal')
      cache[val] = result;
      return result;
    }
  }
}

const add = memoization20Add();
add(20)