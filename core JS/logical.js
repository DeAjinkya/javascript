// logical operators

let x = 78;
let y = 89;

// && operator
console.log(x>50 && y<100); // true (it checks the both conditions)
console.log(x>50 && y>100); // false (Even if one condition is false it returns false)


let n1 = 25;
let n2 = 75;

// || operator 
console.log(n1>10 || n2>100); // if one condition is true it returns true

console.log((n1 === 25)); //true
console.log(!(x === 78)); //false (it checks the number is x = 78 if yes it returns false else true)
console.log(!(x === 90)); //true

// or

console.log((x!=78)); // false  (it checks the number is x = 78 if yes it returns false else true)
console.log(!(x!=78)); // true