let currenttime = document.getElementById("currentTime");
let currentScore = document.getElementById("currentScore");
let currenntHighScore = document.getElementById("currentHighScore");
let gameBooard= document.querySelector(".game-board");
let cells = document.querySelectorAll(".cell");
//for to retrieve the current date and time
let currentTime = new Date().toLocaleTimeString();
currenttime.innerHTML = currentTime;
// for to create the cells
function setupGrid(){

    let columns = Math.floor(window.innerWidth / 50);

    let rows =Math.floor(window.innerHeight / 45);
      console.log(columns,rows)

    gameBooard.style.gridTemplateColumns =
      `repeat(${columns}, 32px)`;

    gameBooard.style.gridTemplateRows =
      `repeat(${rows}, 32px)`;

    gameBooard.innerHTML = "";

    for(let i = 0; i < rows * columns; i++){

        let cell = document.createElement("div");

        cell.classList.add("cell");

        gameBooard.appendChild(cell);
    }
}

setupGrid();

window.addEventListener("resize", setupGrid);