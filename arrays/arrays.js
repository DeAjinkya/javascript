let fruit1 = "mango";
let fruit2 = "apple";
let fruit3 = "guava";

// array
const fruits = ["mango","apple","guava"];

//indexes --- access any element inside an array
//array follows zero based indexing 

console.log(fruits[0]); // mango
console.log(fruits[1]); // apple
console.log(fruits[2]); // guava

// change the value
fruits[0] = "grapes";

console.log(fruits[0]); // grapes

//to add 
fruits[3] = "orange";

console.log(fruits[3]); // orange

//print array
console.log("my array is ",fruits);

//array literal
const colors = [];
colors[0] = "red";
colors[1] = "yellow";

console.log("colors array ", colors);

//using new keyword
const numbers = new Array(1,2,3,4,5,6);
console.log("numbers ",numbers);

console.log("Type of number array ", typeof(numbers)); // output --> object
