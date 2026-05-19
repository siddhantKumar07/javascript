let todo = document.querySelector("#todo");
let doing = document.querySelector("#progress");
let done = document.querySelector("#done");
let tasks = document.querySelectorAll(".task");
tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    console.log(e);
  });
});

function dashedscale(child){
child.addEventListener("dragenter", (e) => {
    e.preventDefault();
  child.classList.add("dotted");
});
child.addEventListener("dragleave", (e) => {
    e.preventDefault();
  child.classList.remove("dotted");
});}
dashedscale(todo);
dashedscale(doing);
dashedscale(done);