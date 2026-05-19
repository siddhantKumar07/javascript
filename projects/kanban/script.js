let todo = document.querySelector("#todo");
let doing = document.querySelector("#progress");
let done = document.querySelector("#done");
let tasks = document.querySelectorAll(".task");
tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    console.log(e);
  });
});
todo.addEventListener("dragenter", (e) => {
  todo.classList.add("dotted");
});
todo.addEventListener("dragleave", (e) => {
  todo.classList.remove("dotted");
});

doing.addEventListener("dragenter", (e) => {
  doing.classList.add("dotted");
});
doing.addEventListener("dragleave", (e) => {
  doing.classList.remove("dotted");
});
done.addEventListener("dragenter", (e) => {
  done.classList.add("dotted");
});
done.addEventListener("dragleave", (e) => {
  done.classList.remove("dotted");
});
