// synchronus is a process that happens one after another. It is a blocking process. It means that the next process will not start until the previous process is completed. For example, if we have a function that takes 5 seconds to execute, then the next function will not start until the first function is completed.

// Asynchronus is a process that happens simultaneously. It is a non-blocking process. It means that the next process can start before the previous process is completed. For example, if we have a function that takes 5 seconds to execute, then the next function can start immediately without waiting for the first function to complete.

// synchronus example
function syncFunction() {
    console.log("This is a synchronus function");
}
syncFunction();
console.log("This will be printed after the synchronus function is executed");

// asynchronus example
function asyncFunction() {
    setTimeout(() => {
        console.log("This is an asynchronus function");
    }, 2000);
}
asyncFunction();
console.log("This will be printed before the asynchronus function is executed");