/**
 * higher order function ---> a function which takes another function as
 * a parameter
 */

function x(){
    console.log("this is function x");
}

// higher order function
function y(x){
    x();
}

y(x);
