// rest parameters allow a function to accept an indefinite number of arguments as an array.
function sum(...numbers) {
    console.log(numbers); 
let total = 0;
for (let number of numbers) {
total += number;
}
return total;
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9
console.log(sum(6,7,5,5,3,2,8,8,9,6,5,8,8,9,3,5,4,7,1,2,5,5,4,7,4,85,65,65,5)); 