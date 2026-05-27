let displayPass = document.querySelector(".display")
let passRange = document.querySelector("input[data-lengthSlider]");
let checkBoxes = document.querySelectorAll("input[type='checkbox']");
let checkedArray;
let generateBtn = document.querySelector("#passGen");


let upperCaseActive=false;
let lowerCaseActive=true;
let numberActive=true;
let symbolActive=false;
// for uppercase
let uppercaseArray =[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
// Lowercase letters
const lowercaseArray = [..."abcdefghijklmnopqrstuvwxyz"];

// Numbers 0-9
const numberArray = [..."0123456789"];


// Symbols
const symbolsArray = [..."!@#$%^&*()_+-={}[]|:;<>?,./"];


let lengthOfPass =8;
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
  upperCaseActive=e.target.checked;
   }
   else if(e.target.id=="lowercase"){
  lowerCaseActive=e.target.checked;
   }
   else if(e.target.id=="symbol"){
   symbolActive =e.target.checked;
   }
   else if(e.target.id=="number"){
    numberActive=e.target.checked;
   }
})
checkedArray = [...checkBoxes].filter((box) => {
    return box.checked;// this will store only the true value
}).length;

})



// random password generator
let generated=[];
let totalIndex =Math.floor(lengthOfPass/checkedArray);

function uppercases(){

    if(upperCaseActive){
    for(let i=0;i<totalIndex;i++){
       generated.push(uppercaseArray[Math.random()*uppercaseArray.length])
    }
    }
}
function lowercases(){

    if(lowerCaseActive){

    for(let i=0;i<totalIndex;i++){

       generated.push(lowercaseArray[Math.random()*lowercaseArray.length])
    }
    }
}
function numbers(){

    if(numberActive){
    for(let i=0;i<totalIndex;i++){
       generated.push(numberArray[Math.random()*numberArray.length])
    }
    }
}
function symbols(){

    if(symbolActive){
    for(let i=0;i<totalIndex;i++){
       generated.push(symbolsArray[Math.random()*symbolsArray.length])
    }
    }
}


generateBtn.addEventListener("click",()=>{
     uppercases();
    lowercases();
    numbers();
    symbols()

})