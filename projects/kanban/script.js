let todo = document.querySelector("#todo");
let doing = document.querySelector("#progress");
let done = document.querySelector("#done");
let tasks = document.querySelectorAll(".task");
let dragElement =null;
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
