let data={
    name:"siddhant kumar",
    id:1,
    age:22
}
console.log(data)
for (const element in data) {//accesing every element in obj with the help of forin
    console.log(`${element} =${data[element]}`)
}