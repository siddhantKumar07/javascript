// fetch('https://dummyjson.com/products?limit=10&skip=5&select=id,title,price')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })

fetch('https://dummyjson.com/products?limit=10&skip=5&select=id,title,price')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch failed:', error);
  });

// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));


const promise = new Promise((resolve,reject)=>{
    const data =fetch('https://dummyjson.com/products?limit=10&skip=5&select=id,title,price')
    .then((response) => {
        if(!response.ok){
            reject("unsuccessfull")
        }
       return response.json()

    })
    .then((data)=>{
        resolve(data)
       
    })
    .catch((error)=>{
        reject(error)
    })
})

promise
.then((data)=>{
console.log(data)
}).catch((error)=>{
    console.log(error)
})


let  promise2 = new Promise((resolve,reject)=>{
         let success="true";
         if(success){
            resolve("successfully resolved")
         }
         else{
            reject("rejected")
         }

}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error)
})