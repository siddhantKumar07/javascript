let displayPass = document.querySelector(".display")
let passRange = document.querySelector("input[data-lengthSlider]");
let checkBoxes = document.querySelectorAll("input[type='checkbox']");

let checkedArray = [...checkBoxes].filter((box) => {
    return box.checked;// this will store only the true value
}).length;

console.log(checkedCount);
console.log(checkedCount);
let upperCaseActive=false;
let lowerCaseActive=true;
let numberActive=true;
let symbolActive=false;
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
   if(e.target.id=="uppercase"){
  upperCaseActive==e.target.checked;
   }
   else if(e.target.id=="lowercase"){
  lowerCaseActive==e.target.checked;
   }
   else if(e.target.id=="symbol"){
   symbolActive ==e.target.checked;
   }
   else if(e.target.id=="number"){
    numberActive=e.target.checked;
   }
})
})



// random password generator

function randomPass(){

}