let currenttime = document.getElementById("currentTime");
let currentScore = document.getElementById("currentScore");
let currenntHighScore = document.getElementById("currentHighScore");
let gameBooard= document.querySelector(".game-board");
let cells = document.querySelectorAll(".cell");
//for to retrieve the current date and time
let currentTime = new Date().toLocaleTimeString();
currenttime.innerHTML = currentTime;


// for to create the cells 


// window.addEventListener("resize",()=>{
// const width = window.innerWidth;
// const height = window.innerHeight;

// console.log(width, height);

// if(height>1000 && width>1000){
// gameBooard.style.width = "75vw";
// gameBooard.style.height = "40vh";

// gameBooard.style.display = "grid";
// gameBooard.style.gridTemplateColumns = "repeat(35, 1fr)";
// gameBooard.style.gridTemplateRows = "repeat(20, 1fr)";
// gameBooard.style.gap = "1px";
// gameBooard.style.backgroundColor = "#222";


// // for to create the cells
// let columns = 35;
// let rows = 20;
// for(let i=0; i<rows*columns; i++){
//     let cell = document.createElement("div");
//     cell.classList.add("cell");
//     gameBooard.appendChild(cell);
// }
// }
// });

