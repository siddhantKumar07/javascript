class name{
name(){
    console.log("This is the use of this keyword in JavaScript");

}

}
let obj = new name();
obj.name(); // This will log "This is the use of this keyword in JavaScript"

// In the above code, we have a class named "name" with a method called "name". When we create an instance of the class and call the method, it logs a message to the console. The "this" keyword is used to refer to the current instance of the class, allowing us to access its properties and methods.