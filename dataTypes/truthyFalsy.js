// truthy values are values that evaluate to true in a boolean context. Falsy values are values that evaluate to false in a boolean context. 

//In JavaScript, the following values are considered falsy:

// 1. false
// 2. 0 (zero)
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)

// All other values are considered truthy. For example, the following values are truthy:

// 1. true
// 2. 1 (any non-zero number)
// 3. "0" (any non-empty string)
// 4. [] (empty array)
// 5. {} (empty object)
// It is important to understand the concept of truthy and falsy values in JavaScript, as it can affect the behavior of your code when using conditional statements and logical operators. For example, if you have a variable that is assigned a falsy value, it will be treated as false in a boolean context, which can lead to unexpected results if you are not careful. Always make sure to check for truthy and falsy values when writing your code to ensure that it behaves as expected.

let a = 0;
if (a) {
    console.log("This will not be printed because 0 is a falsy value.");
}
let b = "Hello";
if (b) {
    console.log("This will be printed because 'Hello' is a truthy value.");
}
 
