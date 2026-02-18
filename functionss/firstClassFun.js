//first class functions are those functions which can be treated as values. They can be stored in variables, passed as arguments to other functions, and returned from other functions. In JavaScript, functions are first-class citizens, which means they have all the capabilities of other data types.
// example of first class functions in JavaScript

// storing a function in a variable
const greet = function(name) {
    return 'Hello, ' + name + '!';
}
console.log(greet('John')); // Output: Hello, John!

// passing a function as an argument to another function
function sayHello(callback) {
    const name = 'Jane';
    console.log(callback(name));
}
sayHello(greet); // Output: Hello, Jane!

// returning a function from another function
function createGreeter(greeting) {
    return function(name) {
        return greeting + ', ' + name + '!';
    }
}
const greetHello = createGreeter('Hello');
console.log(greetHello('Doe')); // Output: Hello, Doe!


let takes=function (arg){
    name ='siddhant';
    arg(name);
}
let someFun =function(name){
    console.log(name);
}
takes(someFun);