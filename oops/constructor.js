// Example of a constructor function
function Person(name, age) {
  this.name = name;
    this.age = age;
    this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 35);  

person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 35 years old.