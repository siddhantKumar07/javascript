// abstraction is the process of hiding the implementation details and showing only functionality to the user.

// example of abstraction in JavaScript

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

