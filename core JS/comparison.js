// comparison operators
// <,>,<=,>=
let age = 20;

const adult = age>=18;

console.log(adult); // true

let x = 10;
let y = 10;

const isXlessThanY = x<y;

console.log(isXlessThanY); // false

// == and ===
let num1 = 30;
let num2 = 40;
let num3 = "50";
let num4 = 50;

console.log(num1 == num2); // false  

console.log(num3 == num4); // true  (it only compares values)

console.log(num3 === num4); // false (it compares values and types of variables)

//!= and !==
let n1 = 56;
let n2 = 89;
let n3 = "30";
let n4 = 30;

console.log(n1 != n2); // true

console.log(n1 !== n2); // true

console.log(n3 != n4); // false

console.log(n3 !== n4); // true (it compares values or compares types)

