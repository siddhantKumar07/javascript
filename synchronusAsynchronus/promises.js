// promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never. A promise can be in one of three states: pending, fulfilled, or rejected.

//A Promise in JavaScript is an object that represents the result of an asynchronous operation (something that takes time, like API calls, file reading, etc.).

// example of promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" };
            if(Math.random()*10>5){ 
                resolve(data);
             }else{
                reject("Error fetching data");
             } // This will be called when the data is successfully fetched 
            // reject("Error fetching data"); // This will be called if there is an error fetching data 
        }, 2000);
    });

}
fetchData()

    .then(data => {
        console.log("Data fetched:");
        console.log(`ID: ${data.id}, Name: ${data.name}`);
    }   )
    .catch(error => {
        console.error("Error:", error);
    }
    );
