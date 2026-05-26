let currenttime = document.getElementById("currentTime");
let currentScore = document.getElementById("currentScore");
let currenntHighScore = document.getElementById("currentHighScore");
let gameBooard= document.querySelector(".game-board");
let cells = document.querySelectorAll(".cell");
let columns;
 let rows;
//for to retrieve the current date and time
let currentTime = new Date().toLocaleTimeString();
currenttime.innerHTML = currentTime;

// blocks to store the each cell as an arrar
const blocks =[];
let direction ="ArrowRight";


// this is for to take the direction from the input;
window.addEventListener("keydown",(e)=>{
  if(e.key=="ArrowUp"||e.key=="ArrowDown"||e.key=="ArrowLeft"||e.key=="ArrowRight"){
     direction=e.key;
  }
  console.log(direction)
})
// for to create the cells
function setupGrid(){

columns = Math.floor(window.innerWidth / 72);

 rows =Math.floor(window.innerHeight / 58);
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

        cell.innerText= `${i} - ${j}`

        blocks[`${i}-${j}`]=cell;
        }
    }

    //
}

setupGrid();

window.addEventListener("resize", setupGrid);

//snakes logics 

let snake =[
  {x:1,y:2}
]

function render(){
  snake.forEach((segmament)=>{
    blocks[`${segmament.x}-${segmament.y}`].classList.add("fill");
  })
}

// gameover logics;


//calling the render function every 300 ms;

setInterval(()=>{
 let head = null;
 if(direction=="ArrowLeft"){
 head ={
  x:snake[0].x,
  y:snake[0].y-1
}
 }
 else if(direction=="ArrowRight"){
head={
  x:snake[0].x,
  y:snake[0].y+1
}
 }
 else if(direction=="ArrowDown"){
  head={
    x:snake[0].x+1,
    y:snake[0].y
  }
 } 
 else if(direction=="ArrowUp"){
head={
  x:snake[0].x-1,
  y:snake[0].y
}
 } 
 snake.forEach((segment)=>{
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
 })

 snake.unshift(head)
 snake.pop()
render()
},700)