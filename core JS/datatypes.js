let a = 10; // number
console.log(typeof(a));
// 8 types of datatypes 

// 2.String

let x = "ajinkya";
console.log(typeof(x));

// 3.Boolean
let y = true; // false
console.log(typeof(y));

// 4. Null
let z = null;
console.log(typeof(z));

// 5. undefined
let age;
console.log(typeof(age));
/**
 * or
 * let age = undefined;
 */

// 6. Bigint
let salary = BigInt(1234567898765434567);
console.log(typeof(salary));

// 7. Symbol

let value = Symbol("1213");
console.log(typeof(value));

//non-primitive 8.Object
// key-value pair
const user ={
    name:"ajinkya",
    age:23
};
console.log(typeof(user));

//array
const fruits = ["mango","apple","guava"];

// typeof

console.log(typeof(fruits));
