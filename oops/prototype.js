//Prototype in JavaScript is used to share properties and methods between objects, so you don’t have to copy the same code again and again.

// It saves memory and enables inheritance.

// prototype is a property of a function object that is used to implement inheritance in JavaScript. It is an object that is associated with every function and is used to store properties and methods that can be inherited by instances created from that function.

// When a function is created, it automatically gets a prototype property that points to an object. This object can be used to add properties and methods that will be shared by all instances created from that function.

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sum = function(a, b) {//this is a method added to the prototype of the Person function, which means that all instances of Person will have access to this method.all instance refers to the same method in memory, so it is more efficient than defining the method inside the constructor function.
    return a + b;
}
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
console.log(person1.sum(2, 3)); // Output: 5
console.log(person2.sum(4, 5)); // Output: 9