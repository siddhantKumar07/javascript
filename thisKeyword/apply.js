// apply is used to call a function with a specific this value and arguments provided as an array (or an array-like object). It is similar to call, but instead of passing arguments individually, we pass them as an array. 
const myObject = {
    name: 'My Object',
    myMethod: function(greeting) {

        console.log(greeting + ' ' + this.name);
    }
};
myObject.myMethod('Hello'); // This will log "Hello My Object"

let obj = {
    name: "siddhant kumar"
}
let fun = function() {
    console.log(this)
}
fun(); // This will log the global object (window in browsers)

// second method to attached the function to the object
fun.apply(obj); // This will log the obj object because this is set to obj in the apply method

// In summary, apply is a method that allows us to call a function with a specific this value and arguments provided as an array. It is useful for invoking functions with a specific context and passing arguments as an array.