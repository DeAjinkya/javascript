// switch statement

let dayNumber = new Date().getDate();
//let dayNumber = 0;
console.log("day number", dayNumber);

// based on day number, give the day

let msg;
let day;
switch(dayNumber){
    case 1:
        day = "sunday";
        break;
    case 2:
        day = "monday";
        break;
    case 3:
        day = "tuseday";
        break;
    case 4:
        day = "wednesday";
        break;
    case 5:
        day = "thursday";
        break;
    case 6:
        day = "friday";
        break;
    case 7:
        day = "saturday";
        break;
    default:
        msg = "please provide correct day number";
}


//console.log("day of the week is", day);

if(msg){
    console.log("message", msg);
} else {
    console.log("day of the week is", day);
}