let todo = document.querySelector("#todo");
let doing = document.querySelector("#progress");
let done = document.querySelector("#done");
let tasks = document.querySelectorAll(".task");
tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    // console.log(e);
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
  console.log(e);
  });
}
dashedscale(todo);
dashedscale(doing);
dashedscale(done);
