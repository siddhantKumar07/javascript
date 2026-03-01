// filter the array and only which age is greater than 18
let projectMember =[
    {name:"Sid",age:20},
    {name:"sanju",age:35},
    {name:"sanket",age:44},
    {name:"harr",age:22},
    {name:"hakk",age:14},
    {name:"jack",age:15},
    
]

let newProjectMember =projectMember.filter((member)=>{
return member.age>=18;
})
console.log(newProjectMember)