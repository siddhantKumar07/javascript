// this is a way to create objects using function constructor in JavaScript. It is a common way to create objects before the introduction of classes in ES6.
function Constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }   
}

const person1 = new Constructor("Alice", 30);
const person2 = new Constructor("Bob", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.