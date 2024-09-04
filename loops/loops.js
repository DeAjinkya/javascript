// for loop
// for in
// for of
// while
// do while


// for loop
for(let i=1; i<=100; i++){
    console.log(i); // 1 to 100
}


// for in loop

const user = {Harry:56, Aash:67, Swaraj:78};

for(key in user){
    console.log(user[key]); // user[Harry] = 56
}

// for of loop

const fruits = ['guava','apple','mango'];

for(let fruit of fruits){
    console.log(fruit); // guava
}

// while loop
/**
 *  syntax:-
 *  while(condition){
 *      // execute body    
 *  }
 */

// print values from 1 to 10
let value = 1;
while(value <= 10){
    console.log(value);
    value++;
}


// do while loop
/**
 *  do{
 *      // execute your code
 *  }while(condition)
 */

let num = 1;
do{
    console.log(num);
    num++;
}while(num <= 5);
