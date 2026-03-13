let div = document.querySelector("div")
let para = document.createElement("p")
para.innerHTML = "heloo i am a paragraph"
div.append(para);
para.style.color="blue"
para.style.fontSize="40px"
para.style.fontWeight="bold"
para.style.textTransform="capitalize"
div.style.height="300px"
div.style.width="300px"
div.style.border="2px solid black"
div.style.backgroundColor="lightblue"
console.dir(para)
console.dir(div)