//at 

const numbers = [4,6,7,3,1];

console.log(numbers[1]);
console.log(numbers.at(1));

//pop ---> removes last element from an array 

const colors = ["red","blue","pink"];

colors.pop();

console.log(colors);

const removed = colors.pop();
console.log(removed); // retures the popped element

// push ---> addes element at the end of array

colors.push("green");
colors.push("pink");
console.log(colors);

const result = colors.push("blue");
console.log(result); // retures new length of array

console.log(colors);

//shift() ---> removes element from beginning of a array

const fruits = ["mango","apple","grapes"];

fruits.shift();

console.log(fruits);

const fruit = fruits.shift();
console.log(fruit); // return element which has been removed

//unshift() ---> adds element at the beginning of the array

fruits.unshift("pineapple");
fruits.unshift(1);

console.log(fruits);

const val = fruits.unshift(2);
console.log(val); //returns the length of the array
