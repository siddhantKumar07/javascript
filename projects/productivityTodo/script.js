let elems = document.querySelectorAll(".elem");
let fullelem = document.querySelectorAll(".fullelem");
let backbtn = document.querySelectorAll(".back");
let taskName = document.querySelector("#taskName");
let taskArea = document.querySelector("#taskArea");
let taskSubmitBtn = document.querySelector("#taskSubmitBtn");
let alltaskCont = document.querySelector(".allTask");
let check = document.querySelector("#check");


function openFeature() {
  elems.forEach((element) => {
    element.addEventListener("click", (e) => {
      fullelem[element.id].style.display = "block";
    });
  });
  backbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      fullelem[btn.id].style.display = "none";
    });
  });
}
openFeature();
function renderTask() {
  let sum = "";

  const tasks = JSON.parse(localStorage.getItem("currentTask")) || [];

  tasks.forEach((task,index) => {
    sum += `
      <div class="tasks">
        <h2>
          ${task.name}
         <span class=${task.imp}>imp</span>
        </h2>
        <p>${task.desc}</p>
        <button id=${index}>Mark As Completed</button>
      </div>
    `;});
  alltaskCont.innerHTML = sum;

 document.querySelectorAll(".tasks button").forEach((btn) => {
  btn.addEventListener("click", () => {
    tasks.splice(btn.id, 1);

    localStorage.setItem("currentTask", JSON.stringify(tasks));

    renderTask();
});
  });

}

let taskArr = JSON.parse(localStorage.getItem("currentTask")) || [];



renderTask();

taskSubmitBtn.addEventListener("click", (e) => {
e.preventDefault();
  if (!taskName.value.trim() || !taskArea.value.trim()) {
    alert("Please fill all fields");
    return;
  }

  taskArr.push({
    name: taskName.value,
    desc: taskArea.value,
    imp: check.checked,
  });

  localStorage.setItem("currentTask", JSON.stringify(taskArr));

  renderTask();

  taskName.value = "";
  taskArea.value = "";
  check.checked = false;
});




// for daily planner 

// this is for generating time slots from 6 AM to 11 PM in the format "6 AM - 7 AM", "7 AM - 8 AM", ..., "10 PM - 11 PM"

// let hours= Array.from({length:18},(elem ,idx)=>{
//    return `${idx+6} ${idx+6<12 ? "AM" : "PM"} - ${idx+7} ${idx+7>=12 ? "PM" : "AM"}`;
// })

function DailyPlanner(){
let hours = Array.from({ length: 18 }, (_, idx) => {
    let start = idx + 6;
    let end = start + 1;

    const formatTime = (hour) => {
        const period = hour >= 12 ? "PM" : "AM";
        const hour12 = ((hour - 1) % 12) + 1;
        return `${hour12} ${period}`;
    };

    return `${formatTime(start)} - ${formatTime(end)}`;
});

let timecontainer =document.querySelector(".time-container")
hours.forEach((hour)=>{
    let div = document.createElement("div")
    div.classList.add("planner-time")
    div.innerHTML = `
      <p>${hour}</p>
      <input type="text" placeholder="Enter task">
    `
    timecontainer.append(div)
})
 let plannerInputs = document.querySelectorAll(".planner-time input");
plannerInputs.forEach((input, index) => {
    input.value = localStorage.getItem(`plannerTask${index}`) || "";
    input.addEventListener("change", () => {
        localStorage.setItem(`plannerTask${index}`, input.value);
    });
});
}
DailyPlanner();



// https://zenquotes.io/api/random


// for motivation page
async function fetchQuote(){
    try {
        let res = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
        let data = await res.json();
        console.log(data);
             document.querySelector(".quotes span").textContent = data.quote;
        document.querySelector(".author span").textContent = `- ${data.author}`;
       
    }
    catch(err){
        console.log("Error fetching quote:", err);
    }
}
fetchQuote();


// for Pomodoro timer
let pomodorofullpage = document.querySelector(".pomodoro-fullpage");
let contentSec = document.querySelector(".pomo-timer");
let timer = document.querySelector(".timer #time")
let startBtn = document.querySelector(".controls #start");
let resetBtn = document.querySelector(".controls #reset");
let pause = document.querySelector(".controls #pause")
let shortBreakBtn = document.querySelector(".optionsBtn #shortBreak");
let longBreakBtn = document.querySelector(".optionsBtn #longBreak");
let pomodoroBtn = document.querySelector(".optionsBtn #pomodoro");
let isRunning = false;
let timeLeft = 25 * 60;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; //padstart is used to add leading zeros if minutes or seconds are only one digit. For example, it will display "05:00" instead of "5:00". This ensures that the timer always shows two digits for minutes and seconds, making it easier to read.
}
let timerInterval;

startBtn.addEventListener("click", () => {
    if (!isRunning) {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
            } else {
                clearInterval(timerInterval);
                alert("Time's up!");
            }
        }, 1000);
        isRunning = true;
    }
});

pause.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timeLeft = 25 * 60;
    updateTimer();
    isRunning = false;
});

window.addEventListener("DOMContentLoaded", () => {
    pomodoroBtn.click();
});
pomodoroBtn.addEventListener("click", () => {
  pomodorofullpage.style.backgroundColor = "#AF4949";
contentSec.style.backgroundColor = "#B75C5C";
pomodoroBtn.style.backgroundColor = "#9C4E4E";
shortBreakBtn.style.backgroundColor="white"
  longBreakBtn.style.backgroundColor="white"
timeLeft = 25 * 60;
updateTimer();
timer.textContent = "25:00";
});

shortBreakBtn.addEventListener("click", () => {
  pomodorofullpage.style.backgroundColor = "#297479";
  contentSec.style.backgroundColor="#3F8287"
  shortBreakBtn.style.backgroundColor="#366F73"
  pomodoroBtn.style.backgroundColor="white"
    timeLeft = 5 * 60;
timer.textContent = "05:00";
updateTimer();

})

longBreakBtn.addEventListener("click", () => {
 pomodorofullpage.style.backgroundColor = "#2F6A95";
  contentSec.style.backgroundColor="#4479A0"
  longBreakBtn.style.backgroundColor="#3A6788"
    pomodoroBtn.style.backgroundColor="white"
   shortBreakBtn.style.backgroundColor="white"

timeLeft = 15 * 60;
timer.textContent = "15:00";
updateTimer();
})


// daily Goals 

let inputGoal = document.querySelector(".inputsec input")
let inputBtn = document.querySelector(".inputsec button")
let taskContainer = document.querySelector(".taskCont")
// for local storage logics 


let goals = JSON.parse(localStorage.getItem("currentGoal")) || [];

function renderGoals() {
    taskContainer.innerHTML = "";

    goals.forEach((goal,idx) => {
        taskContainer.innerHTML += `
            <div class="task">
                <input type="checkbox" id="checks${idx}" class="checking">
                <label for="checks${idx}">${goal.value}</label>
            </div>
        `;
    });
}

// Render immediately when page loads
renderGoals();

inputBtn.addEventListener("click", () => {
    goals.push({ value: inputGoal.value });

    localStorage.setItem("currentGoal", JSON.stringify(goals));

    renderGoals();
     inputGoal.value = "";
});
taskContainer.addEventListener("change", (e) => {
    if (!e.target.classList.contains("checking")) return;

    const checkbox = e.target;
    const label = checkbox.nextElementSibling;

    if (checkbox.checked) {
        label.style.textDecoration = "line-through";
        label.style.color = "black";

        const idx = Number(
            checkbox.id.replace("checks", "")
        );

        setTimeout(() => {
            goals.splice(idx, 1);

            localStorage.setItem(
                "currentGoal",
                JSON.stringify(goals)
            );

            renderGoals();
        }, 1000);
    }
});
let timeGoal = document.querySelector(".outputSec .top p");
let dateGoal = new Date()
const formatted =
  `${dateGoal.getDate()}/${dateGoal.getMonth() + 1}/${dateGoal.getFullYear()}`;
  timeGoal.textContent=formatted



let headerBg = document.querySelector(".header img")
  // Replace with your actual Access Key
const accessKey = "_dwx7wiYZes4Z9ygb4talQbMG8wUtXVX6pKxL_chKvI";

async function getRandomImage() {
  try {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?orientation=landscape",
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );

    console.log(response.status);

    const data = await response.json();
    console.log(data);

    headerBg.src = data.urls.regular;
  } catch (err) {
    console.error(err);
  }
}
// Call the function
getRandomImage();



