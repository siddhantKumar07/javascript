//function scope means that variables declared inside a function are only accessible within that function.
function testFunctionScope() {
    function innerFunction() {
        let functionVariable = "I am inside the function";
        console.log(functionVariable); // This will work
    }
    innerFunction();
    // console.log(functionVariable); // This will throw an error because functionVariable is not accessible outside the function
}