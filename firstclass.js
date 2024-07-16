// first class function 

var a = function(){
    console.log("a is a function")
}

function x(){
    console.log("x is a function")
}

function y(x){
    x();
}

y(x);

//  or 

function b(x){
    return x;
}

const func = b(x);
func();