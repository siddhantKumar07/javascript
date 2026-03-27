// global means that variables declared outside of any function or block are accessible throughout the entire code.
let globalVariable = "I am a global variable";

function testGlobalScope() {
    console.log(globalVariable); // This will work because globalVariable is accessible within the function 
}

testGlobalScope()

if (true) {
    console.log(globalVariable)
}