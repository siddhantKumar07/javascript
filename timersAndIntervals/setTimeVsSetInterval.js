// difference between setTimeout and setInterval
// setTimeout is used to execute a function once after a specified number of milliseconds have passed
// setInterval is used to execute a function repeatedly at specified intervals (in milliseconds) until it is stopped
function sayHello() {
    console.log("Hello, World!");
}
// set timeout to execute the sayHello function after 2000 milliseconds (2 seconds)
setTimeout(sayHello, 2000);
// set interval to execute the sayHello function every 2000 milliseconds (2 seconds)
const intervalId = setInterval(sayHello, 2000);
// if you want to stop the interval, you can use clearInterval and pass the intervalId returned by setInterval(() => {

// }, interval);
// clearInterval(intervalId);


