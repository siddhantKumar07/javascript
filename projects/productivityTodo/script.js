let elems = document.querySelectorAll(".elem");
let fullelem =document.querySelectorAll(".fullelem")
let backbtn = document.querySelectorAll(".back");
let taskName =document.querySelector("#taskName");
let taskArea =document.querySelector("#taskArea")
let taskSubmitBtn =document.querySelector("#taskSubmitBtn");
let alltaskCont= document.querySelector(".allTask");
function openFeature(){
    elems.forEach((element)=>{
    element.addEventListener("click",(e)=>{
       fullelem[element.id].style.display ="block"


    })
})
backbtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        fullelem[btn.id].style.display ="none";
    })
})
}
openFeature();


let taskArr=[];
taskSubmitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(taskName.value)
    console.log(taskArea.value)
   if (!taskName.value.trim() || !taskArea.value.trim()) {
        alert("Please fill all fields");
        return;
    }
    let div = document.createElement("div");
    div.classList.add("tasks");
    div.innerHTML+=`
                <h2>${taskName.value}</h2>
                <p>${taskArea.value}</p>
                <button>Delete</button>`;
    alltaskCont.append(div);
    taskArr.push(div);
    taskName.value="";
    taskArea.value="";
        
})