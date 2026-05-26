let currenttime = document.getElementById("currentTime");
let currentScore = document.getElementById("currentScore");
let currenntHighScore = document.getElementById("currentHighScore");
let gameBooard= document.querySelector(".game-board");
let cells = document.querySelectorAll(".cell");
//for to retrieve the current date and time
let currentTime = new Date().toLocaleTimeString();
currenttime.innerHTML = currentTime;

// blocks to store the each cell as an arrar
const blocks =[];
// for to create the cells
function setupGrid(){

    let columns = Math.floor(window.innerWidth / 72);

    let rows =Math.floor(window.innerHeight / 58);
      console.log(columns,rows)

    gameBooard.style.gridTemplateColumns =
      `repeat(${columns}, 50px)`;

    gameBooard.style.gridTemplateRows =
      `repeat(${rows}, 50px)`;

    gameBooard.innerHTML = "";

    for(let i = 0; i < rows; i++){
        for(let j =0;j<columns ;j++){

        let cell = document.createElement("div");

        cell.classList.add("cell");

        gameBooard.appendChild(cell);

        // cell.innerText= `${i} - ${j}`

        blocks[`${i}-${j}`]=cell;
        }
    }
}

setupGrid();

window.addEventListener("resize", setupGrid);

//snakes logics 

let snake =[
  {x:1,y:2},
  {x:1,y:3},
  {x:1,y:4}
]

function render(){
  snake.forEach((segmament)=>{
    blocks[`${segmament.x}-${segmament.y}`].classList.add("fill");
  })
}