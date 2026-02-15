// variable is created by using var, let or const keyword
// var is function scoped and can be re-declared and updated
// let is block scoped and can be updated but not re-declared
// const is block scoped and cannot be updated or re-declared
var name = "John";
console.log(name); // Output: John

let age = 30;
console.log(age); // Output: 30

const country = "USA";
console.log(country); // Output: USA
// Re-declaring and updating variables
var name = "Jane"; // Re-declaring variable
console.log(name); // Output: Jane
age = 31; // Updating variable
console.log(age); // Output: 31
// country = "Canada"; // This will throw an error because const cannot be updated
