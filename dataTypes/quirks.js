// quirks means unexpected behavior of JavaScript that can lead to bugs and errors in your code. These quirks can arise from the way JavaScript handles certain operations, such as type coercion, variable hoisting, and the use of global variables. It is important to be aware of these quirks and to write code that avoids them in order to create reliable and maintainable applications.

// Some common quirks in JavaScript include:    
// 1. Type coercion: JavaScript can automatically convert values from one type to another, which can lead to unexpected results. For example, when you compare a string and a number using the == operator, JavaScript will convert the string to a number before making the comparison, which can lead to unexpected results.
console.log("5" == 5); // Output: true, because JavaScript converts the string "5" to the number 5 before making the comparison.
console.log("5" === 5); // Output: false, because the === operator does not perform type coercion, so it compares the string "5" and the number 5 directly, which are not equal.

// 2. Variable hoisting: In JavaScript, variable declarations are hoisted to the top of their containing scope, which can lead to unexpected results if you try to use a variable before it is declared.
console.log(x); // Output: undefined, because the declaration of x is hoisted to the top of the scope, but it is not initialized yet.
var x = 5;

// 3. Global variables: If you declare a variable without using the var, let, or const keywords, it will become a global variable, which can lead to unexpected results if you accidentally overwrite an existing global variable.
function myFunction() {
    myVariable = "Hello"; // This will create a global variable because it is not declared with var, let, or const
}
myFunction();
console.log(myVariable); // Output: Hello, because myVariable is now a global variable that can be accessed outside the function.

let a =1+"1";
console.log(a); // Output: 11, because JavaScript converts the number 1 to a string and concatenates it with the string "1", resulting in the string "11".

let b = 1 - "1";
console.log(b); // Output: 0, because JavaScript converts the string "1" to a number and performs the subtraction, resulting in the number 0.