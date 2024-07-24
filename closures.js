//a functon along with its lexical envinoment is called as closure

function x(){
    var a = 10;

    function y(){
        console.log(a); //10

    }

    return y;
    //y(); //output 10
}
//x();

const z = x();
console.log(z); // output [function:y]
z();
