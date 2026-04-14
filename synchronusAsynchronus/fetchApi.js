// fetch is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a Promise that resolves to the Response object representing the response to the request. You can use fetch to get data from APIs, load files, or send data to a server. Here's an example of how to use fetch:
let pic = document.querySelector("img");
let name = document.querySelector("h1");
fetch('https://dummyjson.com/users')
.then((response)=>{
    // console.log(response);
    return response.json(); // This will parse the response body as JSON and return a promise that resolves to the parsed data
})
.then((data)=>{
    console.log(data.users); // This will log the first name of the first user in the results array
    pic.src = data.users[5].image; 
    name.textContent = data.users[5].firstName; 
})
.catch((data)=>{
    console.log(data);
})


// pic.src=