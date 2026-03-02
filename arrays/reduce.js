//reduce() is an array method that reduces an array to a single value by running a function on each element.
//It’s used for things like:

// Adding numbers

// Creating objects from arrays

// Counting items

// Flattening arrays

// Complex data transformations
// In reduce(), the values 0, 1, {}, [] are the initial value of the accumulator.

// 0 → Used when adding numbers (starting value for sum).

// 1 → Used when multiplying numbers (starting value for product).

// {} → Used when building an object as the result.

// [] → Used when building a new array as the result.

// They define what type of final result you want from reduce().

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10