// this is the way to create a element with the help of js 
let h1 = document.createElement("h1")
h1.textContent="helloooooo"
document.body.append(h1)//append() adds content at the end of a parent element.

// prepend() adds content at the beginning of a parent element.
let h2 =document.createElement("h2")
h2.innerHTML="hello i am h2"
document.body.prepend(h2)
/*
example of how booth works 

    <h2>hello i am h2</h2>
    <script src="script.js"></script>
    <h1>helloooooo</h1>

*/