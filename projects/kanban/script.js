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
submitbtn.addEventListener('click', (e)=>{
e.preventDefault();
container.innerHTML+=`<div draggable="true" class="task">
                <span class="tasktitle">${taskname.value}</span>
                <span class="taskdesc">${description.value}</span>
                <button>DELETE</button>
            </div>`
})



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
console.lo("iikhj")
