//higher order functions are functions that take other functions as arguments or return functions as their result. They are a powerful tool in functional programming and allow for more flexible and reusable code. In JavaScript, higher-order functions are commonly used for tasks such as array manipulation, event handling, and asynchronous programming.

// example of higher-order functions in JavaScript

function higherOrderFunction(callback) {
    const data = [1, 2, 3, 4, 5];
    return callback(data);
}
let fun = function(arr) {
    console.log(arr);
}
higherOrderFunction(fun); // Output: [1, 2, 3, 4, 5]