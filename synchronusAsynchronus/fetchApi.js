// fetch is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a Promise that resolves to the Response object representing the response to the request. You can use fetch to get data from APIs, load files, or send data to a server. Here's an example of how to use fetch:
let pic = document.querySelector("img");
let name = document.querySelector("h1");
let card = document.querySelector(".cardContainer");
fetch('https://dummyjson.com/users')
.then((response)=>{
    // console.log(response);
    return response.json(); // This will parse the response body as JSON and return a promise that resolves to the parsed data
})
.then((data)=>{
 //basically we are using the data to create a card for each user and append it to the card container
 // the data is taken from the API and then we are using the forEach loop to iterate through the users and create a card for each user and append it to the card container
    data.users.forEach((user)=>{
        card.innerHTML += `
        <div class="card">
        <img src="${user.image}" >
        <h1>${user.firstName}</h1>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        <p>${user.age}</p>
        <p>${user.gender}</p>
        </div>            
    `;
        document.body.append(card);
    });

})
.catch((data)=>{
    console.log(data);
})
