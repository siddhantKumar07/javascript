// find highest comapare to other elements in array

let arr=[1,5,4,7,5,2,11,42,5,227,8,5,null,6,1]
const highest=arr.reduce((acc,curr)=>{
    return acc>curr ?acc:curr;
},0)
console.log(highest);
