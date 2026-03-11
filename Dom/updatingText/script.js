//In JavaScript, textContent, innerHTML, and innerText are properties used to get or set the content of HTML elements, but they behave differently.1. textContent
 

/*
1. textContent

Returns or sets all the text inside an element, including hidden text.

It ignores HTML tags and treats everything as plain text.

Faster because it does not process styles.

Example

element.textContent = "Hello World";


/*
2. innerHTML

Returns or sets the HTML content inside an element.

It interprets HTML tags.

Example

element.innerHTML = "<b>Hello</b> World";

Output

Hello World

(Hello appears bold because HTML is parsed)

*/

/*
3. innerText

Returns or sets only the visible text of an element.

Hidden text (like display:none) is not included.

It considers CSS styling and layout.

Example

element.innerText = "Hello";
 */

let h1 = document.querySelector("h1")
// h1.textContent="kaisan bada ho "

h1.innerHTML="<i>kaisan bada ho<i>"
console.dir(h1)