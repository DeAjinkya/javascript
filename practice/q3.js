/**
 *  Exercise 3:
 *  write a javascript program to replace every character in a given
 *  string with the character following it in the alphabet.
 *  str = abcd
 *  output = bcde
 * 
 */

const moveChar = (str) => str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0)+1))
    .join('');

console.log(moveChar('abcd'));
