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

// oops also allows us to create classes, which are blueprints for creating objects. We can define properties and methods in a class, and then create instances of that class.

// Example of a class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
    makeSound() {
    console.log(`${this.name} makes a sound.`);
    }
}

const dog = new Animal('Buddy', 'Dog');
const cat = new Animal('Whiskers', 'Cat');

dog.makeSound(); // Output: Buddy makes a sound.
cat.makeSound(); // Output: Whiskers makes a sound.

// In summary, OOP is a powerful programming paradigm that allows us to create reusable and maintainable code by organizing it into objects and classes. It helps us to model real-world entities and their behavior in our programs.

//oops supports encapsulation, inheritance, and polymorphism, which are the three main principles of OOP. Encapsulation allows us to hide the internal details of an object and only expose what is necessary. Inheritance allows us to create new classes based on existing ones, and polymorphism allows us to use objects of different classes interchangeably.

// Example of encapsulation
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; // Encapsulated property
  }

    get balance() {
    return this._balance;
  }
    deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
    }   
    withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    }
    }
}

const account = new BankAccount('Alice', 1000);
console.log(account.balance); // Output: 1000
account.deposit(500);
console.log(account.balance); // Output: 1500
account.withdraw(200);
console.log(account.balance); // Output: 1300

// Example of inheritance
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
    start() {
    console.log(`${this.make} ${this.model} is starting.`);
    }
}

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model); // Call the parent class constructor
    this.doors = doors;
  }
    honk() {
    console.log(`${this.make} ${this.model} is honking.`);
    }
}

const myCar = new Car('Toyota', 'Corolla', 4);
myCar.start();
myCar.honk();

// Example of polymorphism
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
    area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
    area() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => {
  console.log(`Area: ${shape.area()}`);
});

// In conclusion, OOP is a powerful programming paradigm that allows us to create reusable and maintainable code by organizing it into objects and classes. It supports encapsulation, inheritance, and polymorphism, which are essential principles for building complex applications. By using OOP, we can model real-world entities and their behavior in our programs, making it easier to understand and maintain our code.

// abstract classes and interfaces are also important concepts in OOP. An abstract class is a class that cannot be instantiated and is meant to be subclassed. It can contain abstract methods, which are methods that must be implemented by any subclass. An interface is a contract that defines a set of methods that a class must implement, but it does not provide any implementation itself.

//js does not have built-in support for abstract classes and interfaces like some other programming languages, but we can simulate them using classes and methods that throw errors if they are not implemented.
// Example of an abstract class
class Animal {
  constructor(name) {
    this.name = name;
  }
    makeSound() {   
    throw new Error('Method "makeSound()" must be implemented.');   
    }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog('Buddy');
myDog.makeSound(); // Output: Buddy barks.
// Example of an interface
class Shape {
  area() {
    throw new Error('Method "area()" must be implemented.');
  }
}
