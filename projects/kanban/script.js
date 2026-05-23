let todo = document.querySelector("#todo");
let doing = document.querySelector("#progress");
let done = document.querySelector("#done");
let tasks = document.querySelectorAll(".task");
let container = document.querySelector(".container")
let dragElement =null;
let form=document.querySelector("form");
let submitbtn=document.querySelector("#submitbtn");
let taskname=document.querySelector("#taskname");
let description=document.querySelector("#description"); 
let addNewTaskbtn=document.querySelector("#addNewTaskbtn");
let main=document.querySelector("main");
let todoCount = document.querySelector("#todoCount");
let progressCount = document.querySelector("#progressCount");
let doneCount = document.querySelector("#doneCount");



addNewTaskbtn.addEventListener("click",()=>{
  form.style.display="block";
   main.style.filter = "blur(5px)";

})

submitbtn.addEventListener('click', (e) => {

  if(taskname.value=="" || description.value==""){
    alert("Please fill all the fields");
    return;
  }

  main.style.filter = "blur(0px)";

  e.preventDefault();

  let task = document.createElement("div");

  task.classList.add("task");

  task.setAttribute("draggable", "true");

  task.innerHTML = `
      <span class="tasktitle">${taskname.value}</span>
      <span class="taskdesc">${description.value}</span>
      <button class="deletebtn">DELETE</button>
  `;

  task.addEventListener("dragstart", () => {
      dragElement = task;
  });


  let deletebtn = task.querySelector(".deletebtn");

  deletebtn.addEventListener("click", () => {

    task.remove();

    todoCount.innerText = todo.childElementCount - 2;
    progressCount.innerText = doing.childElementCount - 1;
    doneCount.innerText = done.childElementCount - 1;

  });


  container.append(task);

  form.style.display = "none";

  form.reset();

});

tasks.forEach((task) => {

  task.addEventListener("drag", (e) => {

    dragElement=task;

  });

});

function dashedscale(child){

  child.addEventListener("dragover", (e) => {

      e.preventDefault();

      child.classList.add("dotted");

  });

  child.addEventListener("dragleave", () => {

      child.classList.remove("dotted");

  });

  child.addEventListener("drop", (e) => {

      child.classList.remove("dotted");

      child.append(dragElement);

      todoCount.innerText =todo.childElementCount-2;
      progressCount.innerText =doing.childElementCount-1;
      doneCount.innerText =done.childElementCount-1;

  });

}

dashedscale(todo);
dashedscale(doing);
dashedscale(done);