let add = document.querySelector("#add");// this is for to select the add button
let close = document.querySelector(".close");//this is used for to select the close button 
let formContainer = document.querySelector(".form-container");// this is for to show the form when the add button is clicked and hide it when the close button is clicked
const radios = document.querySelectorAll('input[name="category"]');//  this is for to check which radio button is selected and log it to the console
add.addEventListener("click", function () {
  formContainer.style.display = "block";
});
close.addEventListener("click", function () {
  formContainer.style.display = "none";
});

radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    console.log("Selected:", this.value);
  });
});
