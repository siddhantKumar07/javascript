//An attribute is a property of an HTML element that provides additional information about the element. Attributes are written inside the opening tag of an HTML element

/*
<img src="image.jpg" alt="nature" width="200">

Here:
1. src
2. alt
3. width
are attributes.

They describe the element and control its behavior or appearance.
*/

/*
2. Attribute Manipulation in JavaScript DOM

Attribute manipulation means getting, setting, changing, or removing attributes of HTML elements using JavaScript.

JavaScript provides several DOM methods for this.
*/

/*
. getAttribute()

Used to get the value of an attribute.

let value = element.getAttribute("src");

Example:

let img = document.querySelector("img");
console.log(img.getAttribute("src"));

*/

let anchor =document.querySelector("a")
console.dir(anchor)
// anchor.href="https://www.google.com"
anchor.target ="_blank" // this is used to open the link into the new tab 

// second way to manipulate the attribute
anchor.setAttribute("href","https://www.google.com")