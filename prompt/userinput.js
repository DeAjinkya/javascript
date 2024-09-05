// need to download this first npm i prompt-sync

const prompt = require('prompt-sync');
const age = prompt("please enter your age: ");
if(age < 18){
    console.log("your not able to vote");
}else{
    console.log("your able to vote");
}
