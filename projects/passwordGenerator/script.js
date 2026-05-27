let displayPass = document.querySelector(".display")
let passRange = document.querySelector("input[data-lengthSlider]");
let checkBoxes = document.querySelectorAll("input[type='checkbox']");

// for uppercase
let uppercase =[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
// Lowercase letters
const lowercase = [..."abcdefghijklmnopqrstuvwxyz"];

// Numbers 0-9
const numbers = [..."0123456789"];


// Symbols
const symbols = [..."!@#$%^&*()_+-={}[]|:;<>?,./"];


let lengthOfPass =7;
passRange.addEventListener("input", (e) => {
   lengthOfPass=e.target.value;
});
console.log(lengthOfPass)

