//spread parameters are used to expand an iterable (like an array) into individual elements. It is denoted by three dots (...).
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3,4];
console.log(sum(...numbers)); // Output: 6
//spread operator can also be used to combine arrays or objects.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]