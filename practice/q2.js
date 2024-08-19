/**
 *  Excerise 2:
 *  
 *  write a javascript program to get the extension of a filename.
 */


function getFileExtension(str){
    str = str.slice(str.lastIndexOf('.'));
    console.log(str);
};

str = "index.html";
getFileExtension(str);


/** 
 * or
 * const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
 *  console.log(getFileExtension('index.html'));
 * 
 */