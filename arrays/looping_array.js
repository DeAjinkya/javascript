const fruits = ["mango","apple","guava"];

console.log(fruits);
/*
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/

// for of

for(let fruit of fruits){
    console.log(fruit);
}


//for in
// x is index value

for (let x in fruits){
    console.log(x);
    console.log(fruits[x]);
}