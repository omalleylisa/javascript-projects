const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
const defaultAnswer = str.slice(3) + str.slice(0,3);
let answer = defaultAnswer
// nchCode + Lau
console.log(answer);

// results in answer
//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`Part 1: Response ${defaultAnswer}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let quantity =  input.question('Input the number of letter to move');
answer = str.slice(quantity).concat(str.slice(0, quantity));
console.log(`Part 2: ${answer}`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

console.log(`Response ${defaultAnswer}`);
if (quantity < 0 ) {
    console.log(
        `Part 3: Error - Due to the input being less than the string length, you get the default of ${defaultAnswer}`
        );
} else if (quantity > str.length) {
    console.log(
        `Part 3: Error - Due to the input being larger than the string length, you get the default of ${defaultAnswer}`
        );
}   else {
    console.log(`Part 3: Here is your answer: ${answer}`);
}

// console.log(`Response ${defaultAnswer}`);
// if input is less than zero, then need to print