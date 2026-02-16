// 


// hoisting means that you can use a variable or function before it is declared in the code.

// In JavaScript, variable and function declarations are hoisted to the top of their containing scope. This means that you can use a variable or function before it is declared in the code.
// However, only the declarations are hoisted, not the initializations. This means that if you try to use a variable before it is initialized, it will be undefined.

//What Happens Internally?

// When JavaScript runs your code, it does 2 steps:

// Step 1: Memory Setup (Creation Phase)

// Before running your code, JavaScript:

// Looks at all variables

// Looks at all functions

// Saves them in memory

// But:

// var → stored as undefined

// let and const → stored but not usable yet

// function → stored completely

//  No code runs yet.
// Just memory preparation.

// Step 2: Code Execution Phase

// Now JavaScript runs code line by line.

// console.log(a);  // prints undefined
// a = 10;


// So it prints undefined because value is not assigned yet.


console.log(x); // Output: undefined, because x is hoisted to the top of the scope, but it is not initialized yet.
// internally the var x =undefined; is hoisted to the top of the scope, but the initialization of x is not hoisted, so it is undefined at this point.

var x = 5;  
// In the above code, the declaration of x is hoisted to the top of the scope, but the initialization of x is not hoisted. Therefore, when we try to log x before it is initialized, it outputs undefined.

// Function declarations are also hoisted, which means you can call a function before it is declared in the code.
greet(); // Output: Hello, because the function declaration is hoisted to the top of the scope.
function greet() {
    console.log("Hello : i am fully hoisted");
}
// However, function expressions are not hoisted, which means you cannot call a function expression before it is declared in the code.
greet2(); // This will throw a TypeError because greet2 is not hoisted and is not defined at the time of the call.
var greet2 = function() {
    console.log("Hi");
};



 // with let and const, the variables are hoisted but they are not initialized, so they are in the temporal dead zone until they are declared and initialized. This means that if you try to access a variable declared with let or const before it is declared, it will throw a ReferenceError.
   console.log(name); // This will throw a ReferenceError because name is in the temporal dead zone
let name = "John";
console.log(name); // Output: John, because name is now declared and can be accessed


console.log(age); // This will throw a ReferenceError because age is in the temporal dead zone, and it is not accessible until it is declared and initialized.

const age = 30;
