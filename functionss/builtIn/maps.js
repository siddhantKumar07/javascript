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


// closers 

console.log("counting starts ")
function outer(){
    let count =0;
    return function(){
        return count++;
    }   
}

const count = outer();
count()
console.log(count())




// aysnc await


console.log("learning aync and await ")
async function someHandling(){
    try{
const response = await fetch('https://dummyjson.com/products?limit=10&skip=5&select=id,title,price')


const data = await response.json()

console.log(data)
    }catch(error){
        console.log(error?.message);
    }
}
someHandling()





// filter 
let arrrrr = [1,2,3,4,6,6,7,9,4,1,5,7,6,3,6,7]
let filtered = arrrrr.filter((elem)=> elem>5)
console.log(filtered)