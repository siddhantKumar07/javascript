// apply is used to call a function with a specific this value and arguments provided as an array (or an array-like object). It is similar to call, but instead of passing arguments individually, we pass them as an array. 
const myObject = {
    name: 'My Object',
    myMethod: function(greeting) {

        console.log(greeting + ' ' + this.name);
    }
};
myObject.myMethod('Hello'); // This will log "Hello My Object"

let obj = {