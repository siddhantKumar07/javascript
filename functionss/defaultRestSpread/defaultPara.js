//default paparameters and rest and spread operators

// default parameters are used to set default values for function parameters when no value is provided or when undefined is passed as an argument. 
function greet(name = "stranger"){
    console.log("Hello, " + name + "!");
}
greet(); // Output: Hello, stranger!
greet("John"); // Output: Hello, John!