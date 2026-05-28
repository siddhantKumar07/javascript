let displayPass = document.querySelector(".display");
let passRange = document.querySelector("input[data-lengthSlider]");
let checkBoxes = document.querySelectorAll("input[type='checkbox']");
let checkedArray;
let generateBtn = document.querySelector("#passGen");
let length = document.querySelector("p[data-lengthnumber]");

let upperCaseActive = false;
let lowerCaseActive = true;
let numberActive = true;
let symbolActive = false;
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
  length.innerText = e.target.value;
});

// checkBoxes.addEventListener('input', (e)=>{ // this will work only on single element
//     console.log(e)
// })

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
function uppercases() {
let totalIndex = Math.floor(length / checkedArray);

  if (upperCaseActive) {
    for (let i = 0; i < totalIndex; i++) {
      generated.push(
        uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)],
        console.log(Math.floor(Math.random() * uppercaseArray.length))
      );
    }
  }
}
function lowercases() {
  if (lowerCaseActive) {
    for (let i = 0; i < totalIndex; i++) {
      generated.push(
        lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)],
        console.log(Math.floor(Math.random() * lowercaseArray.length))
      );
    }
  }
}
function numbers() {
  if (numberActive) {
    for (let i = 0; i < totalIndex; i++) {
      generated.push(
        numberArray[Math.floor(Math.random() * numberArray.length)],
        console.log(Math.floor(Math.random() * numberArray.length))
      );
    }
  }
}
function symbols() {
  if (symbolActive) {
    for (let i = 0; i < totalIndex; i++) {
      generated.push(
        symbolsArray[Math.floor(Math.random() * symbolsArray.length)],
        console.log(Math.floor(Math.random() * symbolsArray.length))
      );
    }
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

  
  uppercases();
  lowercases();
  numbers();
  symbols();
  console.log(generated);
  console.log(upperCaseActive);
  console.log(lowerCaseActive);
  console.log(numberActive);
  console.log(symbolActive);

  checkBoxes.forEach((box) => {
    box.checked = false;
  });

  upperCaseActive = false;
  lowerCaseActive = false;
  numberActive = false;
  symbolActive = false;
});
