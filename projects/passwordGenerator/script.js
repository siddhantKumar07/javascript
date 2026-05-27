let displayPass = document.querySelector(".display")
let passRange = document.querySelector("input[data-lengthSlider]");
let checkBoxes = document.querySelectorAll("input[type='checkbox']");

let upperCaseActive;
let lowerCaseActive;
let numberActive;
let symbolActive;
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

// checkBoxes.addEventListener('input', (e)=>{ // this will work only on single element 
//     console.log(e)
// })

checkBoxes.forEach((check)=>{
check.addEventListener("input",(e)=>{
    console.log(e)
})
})