//map is used
let arr =[25,8,87,8,7418,71,87,94,1]
// the map() function is an array method used to transform each element of an array and return a new array with the transformed values.
// It does not modify the original array.

let doubled = arr.map((val)=>{
  return val*2;
})
console.log(doubled);

let product =[
    {name:"pranjal", mobile:"10k"},
    {name:"siddhant", mobile:"25k"}
]

let price = product.map((price)=>{
    return price.mobile;
})
console.log(price)
for (const element of product) { // this is used for array 
    for (const key in element) {  // this is used for object 
       console.log(`${key} :=> ${element[key]}`)
        
        
    }
}