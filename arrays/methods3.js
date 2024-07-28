// delete

const arr = ["Ajinkya","Anshika","Naina"];

delete arr[1];

console.log(arr);


// splice 
// modifies the original array

const a = [1,2,3,4,5];

a.splice(0,2); // startiing from 0 index to 1 index removes element

console.log(a); // [3,4,5]

a.splice(2,0);

console.log(a);

a.splice(2,1,4,6,7,8); // from 2 index at 1 insert elements
console.log(a)

a.splice(2,0,5,9); // from 2 index at o insert elements
console.log(a);

//slice
const b = [3,4,5,6,7];

const newArray = b.slice(1,4); // (start,end)

console.log(b);
console.log(newArray);

//toSpliced 
// does not modifies the original array

const newarr = b.toSpliced(2,0,4,6);
console.log(b);
console.log(newarr);

