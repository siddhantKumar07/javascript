// block scope means that variables declared inside a block (e.g., inside a loop or an if statement) are only accessible within that block.
//only var is not block scoped, let and const are block scoped.

 if (true) {
    let block = "I am inside the block";
    const name = "John";

    console.log(block); // This will work
    console.log(name); // This will work
}
// console.log(block); // This will throw an error because block is not accessible outside the block
// console.log(name); // This will throw an error because name is not accessible outside the block

