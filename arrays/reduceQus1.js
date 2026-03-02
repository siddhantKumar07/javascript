// add all the element of the array [2,5,4,8,6,3] 

let arr =[2,5,4,8,6,3];
let sum =arr.reduce((ac,cur)=>{
    return ac+cur;
})
console.log(sum);