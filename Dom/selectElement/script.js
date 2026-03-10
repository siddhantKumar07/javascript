// selecting the element with the help of GetElementById
let paragraph=document.getElementById("para")
paragraph.textContent='hello i am js '
paragraph.style.color="grey"
paragraph.style.fontSize="50px"

// using getElementByClassName
let head=document.getElementsByClassName("iclass")[0]// have to use indexin it
//getElementsByClassName() returns a collection (list of elements), not a single element. So you cannot directly use textContent on it. 
head.textContent="its updated by js dom and it is h2"

//using querySelector to select the tag 
// qurey selector is used to select first matched tag 
let h1 =document.querySelector('h1')
h1.innerText="this is slected by the query slector"

// there is another one which is used to select the tag which is querySlectorAll;
// it selects all the tags which matched to the id or class or tagName