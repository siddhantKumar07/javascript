let displayPass = document.querySelector(".display");
let passRange = document.querySelector("input[data-lengthSlider]");
let checkBoxes = document.querySelectorAll("input[type='checkbox']");
let checkedArray;
let generateBtn = document.querySelector("#passGen");
let length = document.querySelector("p[data-lengthnumber]");
let strength =document.querySelector("#strengthIndicator")
let upperCaseActive = false;
let lowerCaseActive = true;
let numberActive = true;
let symbolActive = false;
let copybtn = document.querySelector(".copy");

// for uppercase
let uppercaseArray = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// Lowercase letters
const lowercaseArray = [..."abcdefghijklmnopqrstuvwxyz"];

// Numbers 0-9
const numberArray = [..."0123456789"];

// Symbols
const symbolsArray = [..."!@#$%^&*()_+-={}[]|:;<>?,./"];

length.innerText = 6;
passRange.addEventListener("input", (e) => {
  passwordLength = Number(e.target.value);

  length.innerText = passwordLength;
});

function activeCheckboxes() {
  checkBoxes.forEach((check) => {
    check.addEventListener("change", (e) => {
      if (e.target.id == "uppercase") {
        upperCaseActive = e.target.checked;
      } else if (e.target.id == "lowercase") {
        lowerCaseActive = e.target.checked;
      } else if (e.target.id == "symbol") {
        symbolActive = e.target.checked;
      } else if (e.target.id == "number") {
        numberActive = e.target.checked;
      }
    });
  });
}
activeCheckboxes();

// random password generator
let generated = [];
let totalIndex;
function uppercases() {
  if (upperCaseActive) {
    for (let i = 0; i < totalIndex; i++) {
      generated.push(
        uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)],
      );
    }
  }
}
function lowercases() {
  if (lowerCaseActive) {
    for (let i = 0; i < totalIndex; i++) {
      generated.push(
        lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)],
      );
    }
  }
}
function numbers() {
  if (numberActive) {
    for (let i = 0; i < totalIndex; i++) {
      generated.push(
        numberArray[Math.floor(Math.random() * numberArray.length)],
      );
    }
  }
}
function symbols() {
  if (symbolActive) {
    for (let i = 0; i < totalIndex; i++) {
      generated.push(
        symbolsArray[Math.floor(Math.random() * symbolsArray.length)],
      );
    }
  }
}
function shufflePassword() {
  for (let i = generated.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = generated[i];

    generated[i] = generated[j];

    generated[j] = temp;
  }
}

generateBtn.addEventListener("click", () => {
  generated = [];
  checkedArray = [...checkBoxes].filter((box) => {
    return box.checked; // this will store only the true value
  }).length;

  if (checkedArray == 0) {
    alert("select at least one box");
    return;
  }

  totalIndex = Math.floor(passwordLength / checkedArray);
  uppercases();
  lowercases();
  numbers();
  symbols();
  shufflePassword();

  checkBoxes.forEach((box) => {
    box.checked = false;
  });

  upperCaseActive = false;
  lowerCaseActive = false;
  numberActive = false;
  symbolActive = false;
  passRange.value = 0;

   // strength logics 
  if(checkedArray==4&&length>7){
    strength.style.backgroundColor ="rgb(17, 255, 17);"
  }
  else if(checkedArray==3){
    strength.style.backgroundColor ="rgb(8, 112, 8)"
  }
  else if(checkedArray==2){
    strength.style.backgroundColor ="rgb(241, 52, 22)"
  }
  else if(checkedArray==1){
    strength.style.backgroundColor ="rgb(255, 50, 50)"
  }

  length.innerText = 0;

  passwordLength = 0;

  displayPass.value = generated.join("");

 
});
//for to copy 
copybtn.addEventListener("click",()=>{
  navigator.clipboard.writeText(generated.join(""));
})
window.addEventListener("load", () => {
  displayPass.value = "";
  strength.style.backgroundColor ="rgb(6, 6, 6)"
});
