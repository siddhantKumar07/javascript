// fetch is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a Promise that resolves to the Response object representing the response to the request. You can use fetch to get data from APIs, load files, or send data to a server. Here's an example of how to use fetch:

fetch('https://dummyjson.com/users')
.then((response)=>{
    console.log(response);
    return response.json(); // This will parse the response body as JSON and return a promise that resolves to the parsed data
})
.catch((data)=>{
    console.log(data);
})