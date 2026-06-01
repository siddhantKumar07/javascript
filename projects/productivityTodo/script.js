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
    `;


  });

  alltaskCont.innerHTML = sum;
}
let taskArr = JSON.parse(localStorage.getItem("currentTask")) || [];




renderTask();

taskSubmitBtn.addEventListener("click", (e) => {

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

let deleteBtns = document.querySelectorAll(".tasks button");

    deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
    let tasks = JSON.parse(localStorage.getItem("currentTask")) || [];
    tasks.splice(btn.id, 1);
    localStorage.setItem("currentTask", JSON.stringify(tasks));
    renderTask();
    location.reload();
    });
});
