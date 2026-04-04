// oops is a programming paradigm that uses objects and classes to organize code. It allows us to create reusable code and model real-world entities in our programs. In JavaScript, we can create objects using object literals, constructor functions, or ES6 classes. OOP helps us to write cleaner and more maintainable code by encapsulating data and behavior into objects.

// Example of an object literal
const person = {
  name: 'John',
    age: 30,
    greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Output: Hello, my name is John and I am 30 years old.