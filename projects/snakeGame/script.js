let currenttime = document.getElementById("currentTime");
let currentScore = document.getElementById("currentScore");
let currenntHighScore = document.getElementById("currentHighScore");
let gameBooard= document.querySelector(".game-board");
//for to retrieve the current date and time
let currentTime = new Date().toLocaleTimeString();
currenttime.innerHTML = currentTime;


// for to create the cells 

let rows = 45;
let columns = 21.5;
for(let i=0; i<rows*columns; i++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    gameBooard.appendChild(cell);
}
