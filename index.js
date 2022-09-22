//Compare date object
// let d1 = new Date()
// let d2 = new Date(d1)

// // console.log(d1.getTime() === d2.getTime())
// console.log(d1 === d2)



// console.log("helloWorld".startsWith("Hello"))



// function sum(a ,b ,c , d)
// {
//   console.log("hello")
// }

// console.log(sum.length)


// var img = new Image(); //it creates new image tag just like document.createElement('img')
// img.onload = function () {
//   console.log(this.width + "x" + this.height);
// };
// img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";

// let obj = {
//   name : 'Prajwal bhatia'
// }

// Object.seal(obj);

// obj.name = 'Prajwal'
// obj.age = 24
// delete obj.name

// console.log(obj);

// const target = 5;
// const source = { b: 3, c: 4 };


// let returnedObj = Object.assign({a:target , ...source});

// console.log(returnedObj);


// const object = {
//   a: "Good morning",
//   b: 100,
// };

// console.log(Object.entries(object));

// for(let val of Object.entries(object))
// {
//   console.log(key, value)
// }

// for (let val of Object.values(object)) {
//   console.log(val)
// }




// let weak = new WeakSet();
// let strong = new Set();

// strong.
// weak.


// weak.add({a : 45})

// weak.add({ a: 45 })

// console.log(weak);




// let sampleObj = {a : 1}

// let newObj = Object.create(sampleObj)

// console.log(Object.getPrototypeOf(newObj) === sampleObj)


// let a = {p : '23'}

// let b = {t : '78'}

// let p = Object.assign(b , a)

// console.log(b)



// let sampleObj = {}

// let newObj = {}

// Object.setPrototypeOf(newObj , null)

// console.log(Object.getPrototypeOf(newObj))


const teams = [
  { name: 'Team 1', members: ['Paul', 'Lisa'] },
  { name: 'Team 2', members: ['Laura', 'Tim'] },
];

function* getMembers(members) {
  for (let i = 0; i < members.length; i++) {
    yield members[i];
  }
}

function* getTeams(teams) {
  for (let i = 0; i < teams.length; i++) {
    // ✨ SOMETHING IS MISSING HERE ✨
  }
}

const obj = getTeams(teams);
obj.next(); // { value: "Paul", done: false }
obj.next(); // { value: "Lisa", done: false }