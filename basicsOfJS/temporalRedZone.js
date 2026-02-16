// temporal dead zone

// temporal dead zone is the time between the start of the block and the point where the variable is declared. During this time, the variable is not accessible and will throw a ReferenceError if you try to access it.
// console.log(name); // This will throw a ReferenceError   because name is in the temporal dead zone
let name = "John";
console.log(name); // Output: John, because name is now declared and can be accessed 

//in short tdz means it will not throw error even if the variable is not declare and initialiize , it throw the reference error which is like you cannot access name before initialization.

console.log(age); // this will not throw any error because age is declared using var and it is hoisted to the top of the scope, but it will output undefined because it is not initialized yet.
var age = 30;
   