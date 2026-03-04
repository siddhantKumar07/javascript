//clone the array properly(not by reference)
let arr=[1,2,4];

let newArray =[...arr]
arr.push(5)
console.log(`this is the new one ${newArray}`)
console.log(`this is the old one ${arr}`)