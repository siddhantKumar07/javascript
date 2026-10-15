const obj ={
    name:"siddhant",
    age:22,
    address:"India"
}

console.log({ ...obj,number:"555555" });
console.log({...obj})

console.log("hello"&&"world")
console.log("hello"||"world")
console.log(!{})
console.log(undefined??"kumar")


// fetch('https://dummyjson.com/carts?limit=10&skip=10')
// .then(res => res.json())
// .then(console.log);

const arr = [1,2,3,4,5,6,7,8,9]

const finded =arr.find((item)=>{
    return item>5
})
console.log(finded)

const filtered = arr.filter((item)=>{
    return item>5
})
console.log(filtered)