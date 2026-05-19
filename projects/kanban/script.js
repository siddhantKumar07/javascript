let todo = document.querySelector("#todo");
let doing = document.querySelector("#progress");
let done = document.querySelector("#done");
let tasks = document.querySelectorAll(".task");
tasks.forEach((task) => {
task.addEventListener("drag", (e) => {
   console.log(e)
    });
});

doing.addEventListener("dragenter",(e)=>{
    doing.classList.add("dotted");
})
done.addEventListener("dragenter",(e)=>{
    done.classList.add("dotted");

})
