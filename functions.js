var z =10;
x();
y();
console.log(z)

function x(){
    var z = 20;
    console.log(z);

}

function y(){
    var z = 30;
    console.log(z);
}

function sum(num1,num2){ // num1 and num2 are parameters
    return num1 + num2;
}

const result = sum(1,2); // values are arguments
console.log(result)