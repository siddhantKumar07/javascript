// call back function is a function which is passed as an argument to another function and is executed after some operation is completed. It is used to handle asynchronous operations in JavaScript.

// example of call back function
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}
function processData() {
    console.log("Data processed");
}
fetchData(processData); // Data fetched will be printed after 2 seconds and then Data processed will be printed immediately after that