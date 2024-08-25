/**
 *  Exercise 5:
 *  write a javascript program to create a new string adding "New!" in 
 *  front of a given string. 
 *  if the given string begins with "New!" already then return the 
 *  original string.
 * 
 */

const addNew = (str) => 
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('hiii there'));
console.log(addNew('New! hello sir'));