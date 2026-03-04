// use .some() to check if any score less than 40
//The .some() method in JavaScript is used with arrays to check if at least one element in the array satisfies a given condition.
// It returns true or false.
let nums=[20,45,77,85,65,25]
let gretnum=nums.some((val)=>{
    return val>55;//
})
console.log(gretnum)