// concatenation -- join two array
//concat

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const newArray = arr1.concat(arr2);

console.log(arr1);
console.log(newArray);

const arr3 = [11,12,13,14,15];

const res = arr1.concat(arr2,arr3);
console.log(res);

//flat

const a = [[1,2],[3,4],[5,6]];

const flattenedArray = a.flat();

console.log(a);
console.log(flattenedArray);

//indexof

const colors = ["red","blue","red","green","pink"];

const index = colors.indexOf("blue");
const q = colors.indexOf("wer"); // returns -1 if not present


console.log(index);
console.log(q);

//lastindexof

console.log(colors.lastIndexOf("red"));

//includes

console.log(colors.includes("pink")); //true

console.log(colors.includes("purple")); //false

//sort

console.log(colors);
console.log(colors.sort());

