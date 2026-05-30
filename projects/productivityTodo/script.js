let elems = document.querySelectorAll(".elem");
let fullelem =document.querySelectorAll(".fullelem")
let backbtn = document.querySelectorAll(".back");

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