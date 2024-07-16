// are let and const variables hoisted? yes

// console.log(a) or (c) stay in a temporal dead zone until the value is initialised 
console.log(b)
let a = 100;
var b = 50;
const c = 75;
console.log(c)
console.log(a)
console.log(b)