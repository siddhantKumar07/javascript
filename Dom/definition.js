// The Document Object Model (DOM) is a programming interface for web documents (HTML or XML). It represents the structure of a webpage as a tree of objects so that programming languages like JavaScript can access, modify, add, or delete elements dynamically.

// In simple words:
//  DOM allows JavaScript to interact with and manipulate the content, structure, and style of a webpage.

/*
1. How the DOM Works

=>When a web page loads in the browser:

=> The browser reads the HTML document.

=> It converts the HTML into a tree-like structure of objects.

=>Each HTML element becomes a node (object) in the DOM tree.

JavaScript can then use the DOM to:
Change text
Modify styles
Add or remove elements
Handle events (clicks, typing, etc.)
*/

/**
 * 2. DOM Tree Structure

  The DOM represents HTML as a hierarchical tree.

Example HTML:

<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello</h1>
  <p>This is a paragraph</p>
</body>
</html>
 
DOM Tree Representation:

Document
   |
   html
   |
  ------
  |    |
 head  body
  |     |
 title  ------
         |   |
        h1   p
 * 
Explanation:

Document → root of the DOM

html → root element

head and body → child nodes

h1 and p → element nodes inside body
 */
