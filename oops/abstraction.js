// abstraction is the process of hiding the implementation details and showing only functionality to the user.

// example of abstraction in JavaScript
// it does not have abstraction in the same way as other languages, but we can achieve it using classes and methods.

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class CarFactory {
    createCar(brand, model) {
        return new Car(brand, model);
    }
}

const carFactory = new CarFactory();
const myCar = carFactory.createCar('Toyota', 'Corolla');

console.log(myCar); // Car { brand: 'Toyota', model: 'Corolla' }

abstra