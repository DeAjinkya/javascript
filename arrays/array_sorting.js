// sort --- sort an array alphabetically

const fruits = ["apple","mango","banana"];

//fruits.sort();
console.log(fruits);

//toSorted --- new array gets created and original array is not effected

const sortedarray = fruits.toSorted();
console.log(sortedarray);

//reverse

//fruits.reverse();
console.log(fruits);

//toRevered --- new array

const reversedarray = fruits.toReversed();
console.log(reversedarray)

const cars =["maruti","xuv","vitara"];

cars.sort();

cars.reverse();

console.log(cars);

//in case of numerical sorting, output is not correct

const arr = [34,112,45];
arr.sort();
console.log(arr);

//compare function
arr.sort(function(a,b) {return a-b});

// 34-112 = negative , keep a bbefore b
// positive, keep b before a

console.log(arr);

//math.min 

console.log(Math.min(1,2,3,4,5,6));

//math.max

console.log(Math.max(5,6,7,8,9));

