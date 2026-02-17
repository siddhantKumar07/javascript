//typeCoercion means converting one data type to another. In JavaScript, there are two types of type coercion: implicit and explicit.

// Implicit type coercion occurs when JavaScript automatically converts a value from one type to another. For example, when you use the + operator with a string and a number, JavaScript will convert the number to a string and concatenate them together.

let x = "5" + 10;
console.log(x); // Output: "510", because JavaScript converts the number 10 to a string and concatenates it with the string "5".

// Explicit type coercion occurs when you manually convert a value from one type to another using built-in functions or operators. For example, you can use the Number() function to convert a string to a number.
let y = Number("5");
console.log(y); // Output: 5, because the Number() function converts the string "5" to the number 5.

// You can also use the String() function to convert a number to a string.
let z = String(10);
console.log(z); // Output: "10", because the String() function converts the number 10 to the string "10".

// It is important to be aware of type coercion in JavaScript, as it can lead to unexpected results if you are not careful. Always make sure to use the appropriate operators and functions to ensure that your code behaves as expected.