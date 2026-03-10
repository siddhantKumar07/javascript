// selecting the element with the help of GetElementById
let paragraph=document.getElementById("para")
paragraph.textContent='hello i am js '
paragraph.style.color="grey"
paragraph.style.fontSize="50px"

// using getElementByClassName
let head=document.getElementsByClassName("iclass")[0]// have to use indexin it
//getElementsByClassName() returns a collection (list of elements), not a single element. So you cannot directly use textContent on it. 
head.textContent="its updated by js dom and it is h2"