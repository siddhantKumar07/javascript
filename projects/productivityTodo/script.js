let elems = document.querySelectorAll(".elem");
let fullelem =document.querySelectorAll(".fullelem")
let backbtn = document.querySelectorAll(".back");
let taskName =document.querySelector("#taskName");
let taskArea =document.querySelector("#taskArea")
let taskSubmitBtn =document.querySelector("#taskSubmitBtn");
let alltaskCont= document.querySelector(".allTask");
let check = document.querySelector("#check");
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


let taskArr=[
    {
        name:"hello",
        desc:"ye kaaam kr lo ",
        imp:true
    },
    {
        name:"heyyy",
        desc:"ye kaaam nhi kro  ",
        imp:false
    }
];


function renderTask(){
    let sum ='';

    taskArr.forEach((task)=>{
        sum+=`<div class ="tasks">
                <h2>${task.name}<span class=${task.imp}>imp</span></h2>
                <p>${task.desc}</p>
                <button>Mark As Completed</button>
                </div>`;
    })
    
    alltaskCont.innerHTML=sum;
}
renderTask();

taskSubmitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
   if (!taskName.value.trim() || !taskArea.value.trim()) {
        alert("Please fill all fields");
        return;
    }
  taskArr.push({name:taskName.value,desc:taskArea.value,imp:check.checked})

      taskName.value="";
    taskArea.value="";
    })

        