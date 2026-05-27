let displayPass = document.querySelector(".display")
let passRange = document.querySelector("input[data-lengthSlider]");

// for uppercase
let uppercase =[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
// Lowercase letters
const lowercase = [..."abcdefghijklmnopqrstuvwxyz"];

console.log(lowercase);

// Numbers 0-9
const numbers = [..."0123456789"];

console.log(numbers);

// Symbols
const symbols = [..."!@#$%^&*()_+-={}[]|:;<>?,./"];

console.log(symbols);

let lengthOfPass =7;
passRange.addEventListener("input", (e) => {
   lengthOfPass=e.target.value;
});
console.log(lengthOfPass)