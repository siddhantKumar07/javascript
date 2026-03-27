// lexical scope means that variables are accessible based on their location in the source code. A variable defined in an outer scope is accessible in an inner scope, but not vice versa.

// in simple words - A variable is searched based on where it was written, not who called the function.

function outerFunction() {
    let outerVariable = "I am in the outer function"; 
    function innerFunction() {
        console.log(outerVariable); // This will work because innerFunction has access to variables in its outer scope
    }
    innerFunction();
    // console.log(innerVariable); // This will throw an error because innerVariable is not accessible in the outer scope
}
outerFunction();

// dynamic scope means that variables are accessible based on the call stack at runtime. A variable defined in a function is accessible to any function that is called after it, regardless of where it is defined in the source code.  

// in simple words -A variable is searched based on who called the function, not where it was written.


let variable = 10;
 function testDynamicScope() {
    console.log(variable); 
 }

 function callerFunction() {
    let variable =25;
    testDynamicScope();// if it is dynamic scope, it will print 25 because callerFunction is calling testDynamicScope and variable is defined in callerFunction. But if it is lexical scope, it will print 10 because variable is defined in the global scope and testDynamicScope has access to variables in its outer scope.
 }
callerFunction(); // This will print 10 because JavaScript uses lexical scoping, not dynamic scoping.

//🔴 Important Point

//👉 JavaScript does NOT use dynamic scoping ❌
//👉 JavaScript uses Lexical Scoping (Static Scoping) ✅

//Easy Trick to Remember
// Dynamic = “Who called me?”
// Lexical = “Where was I created?”