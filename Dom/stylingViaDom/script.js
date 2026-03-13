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


// how to add a class to a particular tag 

let h1 = document.querySelector("h1")
h1.classList.add("hey")// this is used to add a class 
h1.classList.remove("hey")// this  is used to remove the class
/*
classList.toggle() is used to add or remove a CSS class from an HTML element.

If the class already exists, it removes it.

If the class does not exist, it adds it.
*/
h1.classList.toggle("hey")

console.dir(h1)