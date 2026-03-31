// this keyword is a special keyword in JavaScript that refers to the current object that is executing the code. It can be used in different contexts, such as in functions, objects, and classes. The value of this depends on how the function is called and the context in which it is used.

// In a global context, this refers to the global object (window in browsers)
console.log(this); // In a browser, this will log the window object
// In a function, this refers to the object that is calling the function
function myFunction() {
  console.log(this);
}
myFunction(); // In a browser, this will log the window object
// In an object method, this refers to the object that is calling the method
const myObject = {
  name: 'My Object',
    myMethod: function() {
    console.log(this.name);
    }
};
myObject.myMethod(); // This will log "My Object"
// In a class, this refers to the instance of the class
class MyClass {
  constructor(name) {
    this.name = name;
  }
    myMethod() {
    console.log(this.name);
    }
}
const myInstance = new MyClass('My Instance');
myInstance.myMethod(); // This will log "My 
// In arrow functions, this refers to the surrounding context
const myArrowFunction = () => { 
    console.log(this);
};
myArrowFunction(); // In a browser, this will log the window object

// In strict mode, this is undefined in functions that are not called as methods

'use strict';
function myStrictFunction() {
  console.log(this);
}
myStrictFunction(); // This will log undefined

