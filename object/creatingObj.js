// an Object is a data structure used to store multiple values in the form of key–value pairs. It helps group related data and functions together.
let data={
    name:"siddhant kumar",
    id:1,
    age:22
}
console.log(data)
for (const element in data) {//accesing every element in obj with the help of forin
    console.log(`${element} =${data[element]}`)
}