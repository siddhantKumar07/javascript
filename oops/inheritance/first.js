// Inheritance in JavaScript allows one class to inherit properties and methods from another class. This promotes code reusability and establishes a natural hierarchical relationship between classes. In JavaScript, we can achieve inheritance using the `extends` keyword in ES6 classes.

// In the example below, we have a base class `animal` with properties and methods. The `dog` class extends the `animal` class, inheriting its properties and methods. We can create an instance of the `dog` class and call the inherited methods.
class animal{
    constructor(name, age ,breed){
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
    voice(){
        console.log(`${this.name} is making a sound.`);
    }
}
class dog extends animal{
    constructor(name, age, breed){
        super(name, age, breed);
    }
}
const dog1 = new dog("Buddy", 3, "Golden Retriever");   
dog1.eat();
dog1.voice();