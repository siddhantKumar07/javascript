const promise = new Promise((resolve,reject)=>{
    const data =fetch('https://dummyjson.com/products?limit=10&skip=5&select=id,title,price')
    .then(response => response.json())
    .then((data)=>{
        if(data) resolve("data get : ",data)
        else reject("unsuccessfull")
    })
}).then((data)=>{
console.log(data)
}).catch((error)=>{
    console.log(error)
})
