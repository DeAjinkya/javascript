// asynchronous programming

// producing your result --- promise

// consuming promise

const promise = new Promise(function(resolve,reject){
    
    //some code taking time

    let promiseresult;


    setTimeout(() => {
        promiseresult = true;
        if(promiseresult){
            resolve("successfull");
        }else{
            reject("rejected");
        }
    },1000)

    
   
})

console.log("promise",promise);

// consuming code
promise.then(result => console.log(result));
promise.catch(err => console.log(err));

console.log("hello world!");