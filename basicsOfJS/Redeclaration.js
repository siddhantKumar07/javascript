// redeclaration of variables
// var allows redeclaration and updating of variables, while let and const do not allow redeclaration. 
// let allows updating of variables, while const does not allow updating.
var name = "John";
console.log(name); // Output: John

var name = "Jane"; // Re-declaring variable
console.log(name); // Output: Jane

let age = 30;
console.log(age); // Output: 30
// let age = 31; // This will throw an error because let does not allow redeclaration

age = 31; // Updating variable
console.log(age); // Output: 31
const country = "USA";
console.log(country); // Output: USA
// const country = "Canada"; // This will throw an error because const does not allow redeclaration
// country = "Canada"; // This will throw an error because const does not allow updating
