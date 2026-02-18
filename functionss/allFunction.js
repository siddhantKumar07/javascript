// there are several types to create functions in js. we can create a function using function declaration, function expression, arrow function, generator function, etc. here we will see all the types of functions in js with examples.

// 1. function declaration is the most common way to create a function in js. it is defined using the function keyword followed by the name of the function and parentheses. the code block of the function is enclosed in curly braces.
function greet(name) {
    return 'Hello, ' + name + '!';
}
console.log(greet('John')); // Output: Hello, John!

// 2. function expression is another way to create a function in js. it is defined by assigning a function to a variable. the function can be anonymous or named.
const greet1 = function(name) {
    return 'Hello, ' + name + '!';
}
console.log(greet1('Jane')); // Output: Hello, Jane!

// 3. arrow function is a shorter syntax for writing function expressions. it is defined using the arrow (=>) syntax. arrow functions do not have their own this value and are not suitable for methods.
const greet2 = (name) => {
    return 'Hello, ' + name + '!';
}
console.log(greet2('Doe')); // Output: Hello, Doe!

// 4. generator function is a special type of function that can be paused and resumed. it is defined using the function* syntax. generator functions return an iterator object that can be used to iterate over the values produced by the generator.
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// methods are functions that are defined as properties of an object. they can be created using function declaration, function expression, or arrow function syntax.
const person = {
    name: 'John',
    greet3: function() {
        return 'Hello, ' + this.name + '!';
    }
};
console.log(person.greet3()); // Output: Hello, John!
