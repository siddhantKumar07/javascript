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

addNewTaskbtn.addEventListener("click",()=>{
  form.style.display="block";
})
submitbtn.addEventListener('click', (e) => {

    e.preventDefault();

    let task = document.createElement("div");

    task.classList.add("task");

    task.setAttribute("draggable", "true");

    task.innerHTML = `
        <span class="tasktitle">${taskname.value}</span>
        <span class="taskdesc">${description.value}</span>
        <button>DELETE</button>
    `;

    task.addEventListener("dragstart", () => {
        dragElement = task;
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
       
  console.log(e);
  });
}
dashedscale(todo);
dashedscale(doing);
dashedscale(done);
