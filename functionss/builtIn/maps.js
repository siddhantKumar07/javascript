const arr =[
    {id:1,name:"sachin",age:30},
    {id:2,name:"sachinsw",age:30},
    {id:3,name:"sachinww",age:30},
    {id:4,name:"sachinkkkkk",age:30},
    {id:5,name:"sachinsllsks",age:30},
]

const names = arr.map((elem)=> elem.name)

console.log(names)

const arr1=["hello","hey"];

const [first, second]=arr1;
console.log(first,second)



const obj={
    name:"Siddhant kumar",
    age:22,
    mobileNo: 1234567890
}


const {name,age,mobileNo}=obj


console.log(name,age,mobileNo)