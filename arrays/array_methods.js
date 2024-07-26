const arr = [24];
console.log(arr);

const numbers = new Array(24); // creates an array of length 24
console.log(numbers);

const colors = ["red","yellow","green","orange"];

//length method
console.log(colors.length); //4

//access last element of an array
console.log(colors[colors.length-1]);

//toString method
//console.log(colors.toString());

const result = colors.toString();
console.log(result);
console.log(typeof(result)); //string

//join --- convertes to string using operators

console.log(colors.join(" * "));
