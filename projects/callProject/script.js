let add = document.querySelector("#add");// this is for to select the add button
let close = document.querySelector(".close");//this is used for to select the close button 
let formContainer = document.querySelector(".form-container");// this is for to show the form when the add button is clicked and hide it when the close button is clicked
let imgUrlInput = document.querySelector("#img-url");// this is for to select the image url input field
let fullNameInput = document.querySelector("#full-name");// this is for to select the full name input field
let homeTownInput = document.querySelector("#home-town");// this is for to select the home town input field
let purposeInput = document.querySelector("#purpose");// this is for to select the purpose input field
const radios = document.querySelectorAll('input[name="category"]');//  this is for to check which radio button is selected and log it to the console
let createBtn = document.querySelector(".create");// this is for to select the create button

//when click on add button the form will be shown
add.addEventListener("click", function () {
  formContainer.style.display = "block";
});

//when click on close button the form will be hidden
close.addEventListener("click", function () {
  formContainer.style.display = "none";
});

// this is for to check which radio button is selected and log it to the console
radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    console.log("Selected:", this.value);
  });
});
 
// this listener is to select the image url

imgUrlInput.addEventListener("input", function () {
  console.log("Image URL:", this.value);
});

// this listener is to select the full name
fullNameInput.addEventListener("input", function () {
  console.log("Full Name:", this.value);
});

// this listener is to select the home town
homeTownInput.addEventListener("input", function () {
  console.log("Home Town:", this.value);
});

// this listener is to select the purpose
purposeInput.addEventListener("input", function () {
  console.log("Purpose:", this.value);
});


