let displayPass = document.querySelector(".display")
let passRange = document.querySelector("input[data-lengthSlider]");
let checkBoxes = document.querySelectorAll("input[type='checkbox']");
let checkedArray;


console.log(checkedCount);
console.log(checkedCount);
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
checkedArray = [...checkBoxes].filter((box) => {
    return box.checked;// this will store only the true value
}).length;
})



// random password generator
let generated=[];
let totalIndex =Math.floor(lengthOfPass/checkedArray);
function randomPass(){
    
     
    if(upperCaseActive){
        
    }

}

function uppercases(){

    if(upperCaseActive){
let random;
    for(let i=0;i<totalIndex;i++){
      random=Math.random();
       generated.push(uppercaseArray[random])
    }
    }
}
function lowercases(){

    if(lowerCaseActive){
let random;
    for(let i=0;i<totalIndex;i++){
      random=Math.random();
       generated.push(lowercaseArray[random])
    }
    }
}
function numbers(){

    if(lowerCaseActive){
let random;
    for(let i=0;i<totalIndex;i++){
      random=Math.random();
       generated.push(numberArray[random])
    }
    }
}