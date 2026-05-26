let currenttime = document.getElementById("currentTime");
let currentScore = document.getElementById("currentScore");
let currenntHighScore = document.getElementById("currentHighScore");
let gameBooard= document.querySelector(".game-board");
let cells = document.querySelectorAll(".cell");
let module = document.querySelector("#module")
let startbtn = document.querySelector("#startBtn");
let columns;
 let rows;
 let gameSpeed=700;

// for to remove the start button and welcome text 
startbtn.addEventListener('click', ()=>{
  module.style.display="none";
})

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
})
// for to create the cells
function setupGrid(){
// this will set the columns according to the width
columns = Math.floor(window.innerWidth / 72);

// this is used to set the rows according to the height
 rows =Math.floor(window.innerHeight / 58);
      console.log(columns,rows)

      // this is used to create  a dynamic columns at run time according to the windows size
    gameBooard.style.gridTemplateColumns =
      `repeat(${columns}, 50px)`;

    gameBooard.style.gridTemplateRows =
      `repeat(${rows}, 50px)`;

    gameBooard.innerHTML = "";


    // the loops generates the new cell according to the rows and columns
    for(let i = 0; i < rows; i++){
        for(let j =0;j<columns ;j++){

        let cell = document.createElement("div");

        cell.classList.add("cell");

        gameBooard.appendChild(cell);

        // this will gives cells to the current value 
        cell.innerText= `${i} - ${j}`
  // blocks is an array which stores all the cells according to the indexes 
        blocks[`${i}-${j}`]=cell;
        }
    }
}

setupGrid();

window.addEventListener("resize", setupGrid);

//snakes logics 
// this is an array which stores the coordinates 
let snake =[
  {x:1,y:2}
]

// for random food and for to add food blocks
let food;
function randomFood() {

  // remove old food
  if (food) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
  }
  // create new food
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * columns)
  };

  // add new food at the random block 
  blocks[`${food.x}-${food.y}`].classList.add("food");
}
randomFood();

// this function will add the class which is fill according to the coordinates which stored into the snake array
function render(){
  snake.forEach((segmament)=>{
    blocks[`${segmament.x}-${segmament.y}`].classList.add("fill");
  })

   let head = null; // this is the new coordinates which stores later  the new object into the snake array

 if(direction=="ArrowLeft"){// if the user press left arrow then it generates the new object coordinates accoording to the older coordinates which is stored inside the snake array 
 head ={
  x:snake[0].x,// this X will store the new coordinates according to the main one which is inside the snake array if user press left then the row will be same 
  y:snake[0].y-1 // this y will stored the new column according to the main coordinates the y will changes and it will become the -1
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

// it is use to remove the old one class (fill)
 snake.forEach((segment)=>{
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
 })

 // gameover logics 
 if(head.x<0||head.x>=rows || head.y<0||head.y>=columns){
  alert("game over!!!!!");
  clearInterval(interval);
 }


 // consuming the food 
if (food.x == head.x && food.y == head.y) {
  snake.unshift(food);

  randomFood(); // generate new food
}


// adding the new coordinates as an object inside the snake which is an array
 snake.unshift(head)

 // removing the last element from the array
 snake.pop()

// current score 
currentScore.innerText= snake.length;


}


//calling the render function every 300 ms;

let interval =setInterval(()=>{



// calling the render function which adds the fill class to the new object which is storec into the snake arrays
render()

},gameSpeed)
