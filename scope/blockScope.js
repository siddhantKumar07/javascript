// block scope means that variables declared inside a block (e.g., inside a loop or an if statement) are only accessible within that block.

function testBlockScope() {
    if (true) {
        let blockVariable = "I am inside the block";
        console.log(blockVariable); // This will work
    }   
    // console.log(blockVariable); // This will throw an error because blockVariable is not accessible outside the block
}

testBlockScope();

if (true) {
    var variable = "hello i am inside the if block";
    console.log(variable); // This will work
}
console.log(variable); // This will work because var is function-scoped, not block-scoped
















