//reference data type
// In JavaScript, there are 3 reference data types:
//1. Object
//2. Array
//3. Function

// if you copy the variable with reference data type, it will create a new reference to the same object in memory, and they will be linked to each other. So if you change the value of one variable, it will affect the other variable because they are referencing the same object in memory.

//object    
let person = {
    name: "John",
    age: 30
};
let person2 = person; // person2 is a reference to the same object in memory as person
person2.name = "Jane";
console.log(person.name); // Output: Jane, because person and person2 are referencing the same object in memory, so when we change the name property of person2, it also changes the name property of person.

//array
let numbers = [1, 2, 3];
let numbers2 = numbers; // numbers2 is a reference to the same array in memory as numbers
numbers2.push(4);
console.log(numbers); // Output: [1, 2, 3, 4], because numbers and numbers2 are referencing the same array in memory, so when we push a new element to numbers2, it also changes the numbers array.

//function
function greet() {
    console.log("Hello");
}
let greet2 = greet; // greet2 is a reference to the same function in memory as greet
greet2(); // Output: Hello, because greet and greet2 are referencing the same function in memory, so when we call greet2, it also calls the greet function.
