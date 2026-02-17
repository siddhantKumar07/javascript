//unary operators
// It is important to understand how these unary operators work in JavaScript, as they can be used in various ways to manipulate values and control the flow of your code. Always make sure to use the appropriate operator for the operation you want to perform, and be aware of the differences between the prefix and postfix forms of the increment and decrement operators when using them in expressions.

// Unary operators are operators that operate on a single operand. In JavaScript, there are several unary operators, including:
// 1. Unary plus (+): This operator is used to convert a value to a number. For example:
let a = "5";
let b = +a;
console.log(b); // Output: 5, because the unary plus operator converts the string "5" to the number 5.
// 2. Unary negation (-): This operator is used to negate a value. For example:
let c = 10;
let d = -c;
console.log(d); // Output: -10, because the unary negation operator negates the value of c, which is 10, resulting in -10.
// 3. Logical NOT (!): This operator is used to negate a boolean value. For example:
let e = true;
let f = !e;
console.log(f); // Output: false, because the logical NOT operator negates the value of e, which is true, resulting in false.
// 4. Increment (++): This operator is used to increment a value by 1. For example:
let g = 5;
g++;
console.log(g); // Output: 6, because the increment operator increments the value of g by 1, resulting in 6.
// 5. Decrement (--): This operator is used to decrement a value by 1. For example:
let h = 5;
h--;
console.log(h); // Output: 4, because the decrement operator decrements the value of h by 1, resulting in 4.


// Ternary operator (?:): This operator is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. For example:
let i = 10;
let j = (i > 5) ? "Greater than 5" : "Less than or equal to 5";
console.log(j); // Output: "Greater than 5", because the condition (i > 5) is true, so the value "Greater than 5" is returned. If the condition were false, the value "Less than or equal to 5" would be returned instead.
