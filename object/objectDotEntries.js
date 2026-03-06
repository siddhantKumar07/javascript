//Object.entries() is a built-in JavaScript method that converts an object into an array of key–value pairs.

let object={
    name:"slld",
    age:555,
    gmail:"ssadhs@mail.com"
}
let arrayObj=Object.entries(object)//it create a form of array of the keys and values 
// console.log(arrayObj)
for (const element of arrayObj) {
    console.log(element)
}