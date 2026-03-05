// multiply all the element into the array 
// In reduce(), the values 0, 1, {}, [] are the initial value of the accumulator.

// 0 → Used when adding numbers (starting value for sum).

// 1 → Used when multiplying numbers (starting value for product).

// {} → Used when building an object as the result.

// [] → Used when building a new array as the result.

// They define what type of final result you want from reduce().

let array =[1,4,5,6,3]
let multiplied = array.reduce((acc,curr)=>{
    return acc*curr})
console.log(multiplied);