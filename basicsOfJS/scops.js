// Scope in JavaScript refers to the accessibility of variables and functions in different parts of the code. There are three types of scope in JavaScript: global scope, local scope, and block scope.

// Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

// Local Scope: Variables declared inside a function are in the local scope and can only be accessed within that function.

// Block Scope: Variables declared with let or const inside a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.\


let a =10;// global scope
function test(){
    let b =20;// local scope
    console.log(a);// Output: 10, because a is in the global scope and can be accessed inside the function
      console.log(b);
}

test();
// console.log(b); // This will throw an error because b is not defined in the global scope
