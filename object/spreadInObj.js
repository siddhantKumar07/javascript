//The spread operator (...) is used to copy or expand the properties of an object into another object.

// It allows you to merge objects, clone objects, or update properties easily.

//1. Spread Operator Creates a Shallow Copy

// When you copy an object using the spread operator (...), it creates a new object in memory, but only for the first level properties.

// So:

// The top-level object → new memory

// Nested objects → same reference (same memory)

const obj1 = {
  name: "Rahul",
  age: 22
};

const obj2 = { ...obj1 };

obj2.name = "Amit";

console.log(obj1.name); // Rahul
console.log(obj2.name); // Amit

// this is the exmaple of the nested object
const obj3 = {
  name: "Rahul",
  address: {
    city: "Lucknow"
  }
};

const obj4 = { ...obj3 };

obj4.address.city = "Delhi";// it changes the value of obj3 also because nested obj is refering to the same memory space in the memory;
obj4.name="kaho";// it does not affect the name of obj3
console.log(obj3.name)
console.log(obj3.address.city); // Delhi