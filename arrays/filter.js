//the filter() function is an array method used to select elements based on a condition and return a new array containing only the elements that pass that condition.
// It does not modify the original array.

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let even =numbers.filter((val)=>{
    return val%2==0;
})
console.log(even)