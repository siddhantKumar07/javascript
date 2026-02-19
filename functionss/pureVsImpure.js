// pure functions are functions that always return the same result for the same input and have no side effects (they do not modify any external state). Impure functions, on the other hand, may return different results for the same input or have side effects (they may modify external state).

// example of pure function
function pureFunction(x, y) {
    return x + y;
}
console.log(pureFunction(2, 3)); // Output: 5
console.log(pureFunction(2, 3)); // Output: 5

// example of impure function
let count = 0;
function impureFunction() {
    count++;
    return count;
}
console.log(impureFunction()); // Output: 1
console.log(impureFunction()); // Output: 2