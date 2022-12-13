//LEAST RESENTLY USED CACHE

//1) Keep on adding key value pairs to a map to a particular number
//2) once that number is hit then we will remove the key which is least and new key is added
//3) How recently used is defined - it is defined by , if we are getting//pring the key then it is recently used

// let cache = new Map();
// let max = 5;

// function addingItem(key , value)
// {
//   cache.set(key , value)
// }


// class LRUcache {
//   constructor(max)
//   {
//     this.max = max;
//     this.cache = new Map();
//   }

//   first ()
//   {
//     return this.cache.keys().next().value
//   }

//   addingItem(key, value)
//   {
//     if (this.cache.has(key)) this.cache.delete(key);

//     else if(this.max === this.cache.size)
//     {
//       this.cache.delete(this.first());
//     }
    
//     this.cache.set(key , value);
//   }

//   gettingItem(key)
//   {
//       const item = this.cache.get(key);

//       if(item)
//       {
//         this.cache.delete(key);
//         this.cache.set(key , item);
//       }
//       return item;
//   }
// }

// const newCache = new LRUcache(4);

// newCache.addingItem('name' , 'Prajwal')
// newCache.addingItem('age', '24')
// newCache.gettingItem('name')

// newCache.addingItem('job', 'working')
// newCache.addingItem('sex', 'male')



// console.log(newCache)