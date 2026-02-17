// why nan is a type of number
// In JavaScript, NaN stands for "Not a Number". It is a special value that represents the result of an invalid mathematical operation, such as dividing zero by zero or taking the square root of a negative number. Despite its name, NaN is actually a type of number in JavaScript. This is because NaN is a value that can be assigned to a variable and can be used in mathematical operations, just like any other number. However, NaN is unique in that it is not equal to any other value, including itself. This means that if you compare NaN to any other value, including NaN itself, the result will always be false.

console.log(typeof NaN); // Output: "number", because NaN is a type of number in JavaScript.

console.log("siddhant"-6); // Output: NaN, because subtracting a number from a string that cannot be converted to a number results in NaN.

console.log(0/0); // Output: NaN, because dividing zero by zero is an invalid mathematical operation that results in NaN.
console.log(NaN === NaN); // Output: false, because NaN is not equal to itself.


// why null and undefined are different
// In JavaScript, null and undefined are two distinct values that represent the absence of a value or the lack of a value.

// null is an intentional assignment of a value that represents the absence of any object value. It is often used to indicate that a variable should have no value or that an object property should be empty. For example:
let a = null;
console.log(a); // Output: null, because a is intentionally assigned the value of null.

// undefined, on the other hand, represents the absence of a value or the lack of a value. It is the default value of uninitialized variables and function parameters that have not been assigned a value. For example:

let b;
console.log(b); // Output: undefined, because b is declared but not initialized, so it has the default value of undefined.
function myFunction(x) {
    console.log(x); // Output: undefined, because the parameter x is not assigned a value when the function is called.
}
myFunction(); // Calling the function without an argument results in x being undefined.

// In summary, null is an intentional assignment of a value that represents the absence of any object value, while undefined represents the absence of a value or the lack of a value. It is important to understand the difference between null and undefined in JavaScript, as they can have different implications for your code and can lead to unexpected results if you are not careful. Always make sure to use the appropriate value (null or undefined) based on the context of your code to ensure that it behaves as expected.