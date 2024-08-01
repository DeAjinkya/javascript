alert("hello world!!");
alert("enter your name!!");

const fullName = prompt("enter your name","john");
console.log(fullName);

const isConsole = confirm("do you want to write your name on console?");

if(isConsole){
    console.log(fullName);
}else{
    console.log("permission denied");
}