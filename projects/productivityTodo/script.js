let elems = document.querySelectorAll(".elem");
let backbtn = document.querySelectorAll(".back");

let active;
elems.forEach((element)=>{
    element.addEventListener("click",(e)=>{
       console.log(e) 
       console.log(element)
       active= document.querySelectorAll(".fullelem")[element.id];
       active.style.display ="block"
console.log("active"+active)

    })
})
backbtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        document.querySelectorAll(".fullelem")[active].style.display ="none";
    })
})