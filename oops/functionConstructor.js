function Dog(name, breed, color) {  
    this.name = name;
    this.breed = breed;
    this.color = color; 
    this.bark = function() {
        console.log(`${this.name} is barking.`);
    }}
const dog1 = new Dog("Buddy", "Golden Retriever", "Golden");
const dog2 = new Dog("Max", "Labrador Retriever", "Black");
dog1.bark(); // Output: Buddy is barking.
dog2.bark(); // Output: Max is barking.
