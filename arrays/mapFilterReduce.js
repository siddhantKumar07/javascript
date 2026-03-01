// Question: Given an array of numbers, perform the following operations:
// 1. Use map to double each number
// 2. Use filter to keep only numbers greater than 10
// 3. Use reduce to find the sum of the resulting array

let numbers = [1, 5, 8, 3, 12, 6, 7, 15];

// Your code here:
// Step 1: Map - Double each number
let doubled = numbers.map(function(value){
    return value * 2;
});
console.log("Doubled:", doubled);

// Step 2: Filter - Keep only numbers > 10
let filtered = doubled.filter(function(value){
    return value > 10;
});
console.log("Filtered (>10):", filtered);

// Step 3: Reduce - Find sum
let sum = filtered.reduce(function(acc, value){
    return acc + value;
}, 0);
console.log("Sum:", sum);
