// IIFI is an Immediately Invoked Function Expression, which is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts:
// 1. The first part is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

(function() {
    console.log("This is an IIFE function");
})(); // Output: "This is an IIFE function"

// IIFEs are commonly used to create a new scope and avoid polluting the global namespace. They can also be used to execute code immediately without having to call the function separately.

let result = (function(a, b) {
    return a + b;
})(5, 10); // Output: 15
