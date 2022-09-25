//LOCALSTORAGE
//1)ADD ITEM
//2) REMOVE ITEM
//3) UPDATE ITEM
//4) CLEAR



// class LocalStorage {
//   constructor() {
//     this.localStorage = new Map();
//   }

//   setItem(key, value) {
//     if (this.localStorage.has(key)) this.localStorage.delete(key);
//     this.localStorage.set(key, value);
//     return this.localStorage;
//   }

//   getItem(key) {
//     this.localStorage.get(key);
//     return this.localStorage;
//   }

//   removeItem(key) {
//     if (this.localStorage.has(key))
//       this.localStorage.delete(key);
//     return this.localStorage;
//   }

//   clear() {
//     this.localStorage.clear();
//     return this.localStorage;
//   }
// }



// class LocalStorage {
//   constructor() {
//     this.localStorage = {};
//     this.length = 0;
//   }

//   setItem(key, value) {

//     if(!key || !value) throw 'TypeError' 

//     if (this.localStorage[key]) delete this.localStorage[key];
//     this.localStorage[key] = value;
//     this.length += 1;
//     return this.localStorage;
//   }

//   getItem(key) {
//     return this.localStorage[key];
//   }

//   removeItem(key) {
//     if (this.localStorage[key])
//     {
//       delete this.localStorage[key];
//       this.length -= 1;
//     }
//     return this.localStorage;
//   }

//   clear() {
//     this.localStorage = {};
//     this.length = 0;
//     return this.localStorage;
//   }
// }



// let localStorage = new LocalStorage();

// console.log(localStorage.setItem('key' , "item"));
// // console.log(localStorage.getItem('key'));
// // console.log(localStorage.clear('key'));
// console.log(localStorage.length);






