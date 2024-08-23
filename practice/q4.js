/**
 *  Exercise 4
 *  write a javascript program to get the current date.
 *  
 *  expected output:- 
 *  mm-dd-yyyy, mm/dd/yyyy, or dd-mm-yyyy, dd/mm/yyyy.
 * 
 */
const date = new Date();

let days = date.getDate();
let months = date.getMonth() + 1;
let years = date.getFullYear();

console.log(days,"/",months,"/",years);