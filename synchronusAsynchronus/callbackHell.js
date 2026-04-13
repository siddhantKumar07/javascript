// call back function is a function which is passed as an argument to another function and is executed after some operation is completed. It is used to handle asynchronous operations in JavaScript.

// example of call back function


function getProfile(id, callback) {
    setTimeout(() => {
        console.log("Fetching profile...");
        const profile = { id: id, name: "John Doe" };
        callback(profile);
    }, 2000);
}
function displayProfile(profile) {
    console.log("Profile fetched:");
    console.log(`ID: ${profile.id}, Name: ${profile.name}`);
}
getProfile(1, displayProfile); // Fetching profile... will be printed after 2 seconds and then Profile fetched: ID: 1, Name: John Doe will be printed immediately after that

// call back hell is a situation where we have multiple nested callbacks, which makes the code difficult to read and maintain. It is also known as "Pyramid of Doom" because of the way the code is structured. It can be avoided by using Promises or async/await syntax.

// example of call back hell
