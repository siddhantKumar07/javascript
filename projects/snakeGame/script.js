let currenttime = document.getElementById("currentTime");
let currentScore = document.getElementById("currentScore");
let currenntHighScore = document.getElementById("currentHighScore");

let gameBoard = document.querySelector(".game-board");

/* CURRENT TIME */

let currentTime = new Date().toLocaleTimeString();

currenttime.innerHTML = currentTime;


/* GRID SIZE */

let rows = 22;
let columns = 44;


/* MOBILE */

if(window.innerWidth <= 480){

    rows = 20;
    columns = 20;
}

/* TABLET */

else if(window.innerWidth <= 768){

    rows = 22;
    columns = 30;
}


/* CREATE GRID */

gameBoard.style.gridTemplateColumns =
`repeat(${columns}, 1fr)`;


gameBoard.style.gridTemplateRows =
`repeat(${rows}, 1fr)`;


/* CREATE CELLS */

for(let i = 0; i < rows * columns; i++){

    let cell = document.createElement("div");

    cell.classList.add("cell");

    gameBoard.appendChild(cell);
}