/**
 *  Exercise 1:
 *  
 *  write a javascript program to check two numbers and return true if one of the
 *  number is 100  or if the sum of the two number is 100.
 * 
 */

function checkNum(n1,n2){
    if (n1 == 100 || n2 == 100 || n1 + n2 == 100){
        return true;
    }else{
        return false;
    }
}

console.log(checkNum(10,90)); // true
console.log(checkNum(20,50)); // false
console.log(checkNum(100,0)); // true
