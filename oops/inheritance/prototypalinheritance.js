// protoypal inheritance
// In prototypal inheritance, objects can inherit properties and methods from other objects. 
// This is achieved through the prototype chain, where an object can have a reference to another object as its prototype. 
// When a property or method is accessed on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).

let animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal // rabbit inherits from animal  , older version 

};

// console.log(rabbit.eats); // true (inherited from animal)
// rabbit.walk(); // "Animal walks" (inherited from animal)

let rabbit2 = Object.create(animal); // newer version
rabbit2.jumps = true;
console.log(rabbit2.eats); // true (inherited from animal)
rabbit2.walk(); // "Animal walks" (inherited from animal)