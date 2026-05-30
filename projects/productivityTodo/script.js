let elems = document.querySelectorAll(".elem");

elems.forEach((element)=>{
    element.addEventListener("click",(e)=>{
       console.log(e) 
       console.log(element)
        document.querySelectorAll(".fullelem")[element.id].style.display ="block";
    })
})