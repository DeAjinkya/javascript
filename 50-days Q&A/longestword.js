const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }
    
    strArr = str.split(" ");
    // //console.log(strArr);
    // strArr = strArr.sort((a,b) => a.length - b.length);
    // console.log(strArr);
    // return strArr.at(-1);

    return strArr.reduce((acc,cur) => (cur.length > acc.length ? cur : acc),"");

};



console.log(
    findLongestWord("watch ajinkya hiisohowwasthe javascript course on youtube")
); 