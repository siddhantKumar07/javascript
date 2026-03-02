// In JavaScript, find() is an array method used to return the first element in an array that satisfies a given condition.
// If no element matches the condition, it returns undefined.
  let arr =[
    {name:"siddhant",age:22},
    {name:"sk",age:22},
    {name:"jk",age:22},
    {name:"kk",age:22},
    {name:"uu",age:22},
    {name:"ihd",age:22},
    {name:"siddhant",age:22},
    {name:"siddhant",age:22},
    {name:"siddhant",age:22}
  ]
  console.log(arr.find((val)=>{
    return val.name==="kk"
  }))