// to find the sum of the array

let array =[1,2,3,4,5,6,7,8,9,10]
let sum=array.reduce((acc,curr)=>{//it takes two value 1st is previous and secnd is the next value
    return acc+curr
},0)
console.log(`sum of all the array is ${sum}`);