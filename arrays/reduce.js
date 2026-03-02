//reduce() is an array method that reduces an array to a single value by running a function on each element.
//It’s used for things like:

// Adding numbers

// Creating objects from arrays

// Counting items

// Flattening arrays

// Complex data transformations
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10