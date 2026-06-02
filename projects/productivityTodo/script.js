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