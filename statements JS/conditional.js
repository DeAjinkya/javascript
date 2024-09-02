// conditional statements

// use if to execute a block of code if condition is true.

// use else to execute a block of code if condition is false.

// use elseif to basically check any new condition.

// Q.whether a number is positive or not.

let num = -12;

if(num>=0){
    console.log(`${num} number is positive.`);
}else{
    console.log(`${num} number is negative.`);
}

// grades of students 

let marks = 24;
let grade;

if (marks > 90) {
    grade = 'A';
} else if (marks > 80 && marks <= 90) {
    grade = 'B';
} else if (marks > 70 && marks <= 80) {
    grade = 'C';
} else {
    grade = "FAIL";
}


console.log("grade of stydent is", grade);
