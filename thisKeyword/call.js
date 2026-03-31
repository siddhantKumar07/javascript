// call is a method that allows us to call a function with a specific this value and arguments provided individually. It is similar to apply, but instead of passing an array of arguments, we pass them individually.

const myObject = {
  name: 'My Object',
    myMethod: function(greeting) {
    console.log(greeting + ' ' + this.name);
    }   
};

myObject.myMethod('Hello'); // This will log "Hello My Object"

let obj ={
    name:"siddhant kumar"
}
let fun = function(){
    console.log(this)
}
fun(); // This will log the global object (window in browsers)

// second method to attached the function to the object
fun.call(obj); // This will log the obj object because this is set to obj in the call method

// In summary, call is a method that allows us to call a function with a specific this value and arguments provided individually. It is useful for invoking functions with a specific context and passing arguments directly.