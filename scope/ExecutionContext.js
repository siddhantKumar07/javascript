// execution context means the environment in which the JavaScript code is executed. 
// It consists of the variable environment, the scope chain, and the this value. 
// The execution context is created when a function is called or when the global code is executed. 
// It determines how variables and functions are accessed and how the this keyword behaves.
//  Understanding execution context is crucial for understanding how JavaScript works and how to write efficient code.

/*

What Exactly is Execution Context?

👉 Think of it as a box/environment where JS code is executed.

Whenever JavaScript runs:

1.It creates an execution context
2.Executes code inside it
3.Then destroys it
*/

/*
2. Types of Execution Context (Detailed)

🌍 1. Global Execution Context (GEC)
Created once when program starts
Stored at the bottom of the call stack
Has:
Global variables
Functions
this → refers to window (in browser)
var a = 10;

function foo() {
    console.log("Hello");
}

👉 Memory is allocated for:

a
foo

*/
 

/*
2. Function Execution Context (FEC)

Every time a function is invoked:

A new execution context is created
function sum(x, y) {
    var result = x + y;
    return result;
}

sum(2, 3);

👉 New context includes:

Parameters: x, y
Local variables: result

*/