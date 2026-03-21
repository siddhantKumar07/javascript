// set timeout is used to execute a function after a specified number of milliseconds have passed
// it takes two arguments: the function to execute and the number of milliseconds to wait before executing the function
function sayHello() {
    console.log("Hello, World!");
}
// set timeout to execute the sayHello function after 2000 milliseconds (2 seconds)
const timeoutId = setTimeout(sayHello, 2000);
// if you want to cancel the timeout before it executes, you can use clearTimeout and pass the timeoutId returned by setTimeout(() => {
    
// }, timeout);
// clearTimeout(timeoutId);