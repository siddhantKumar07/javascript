

// find the sum of all the elements in the array 
let collection1 =[11,22,44,55,11,0,47,86,2,-4,12,-1,-8,-5]
 let sum =collection1.reduce((acc,cur)=>{
    return acc+cur
 })
 console.log(sum)


 // let take sum with the help of forin
 let sums=0;
    
 for(let value of collection1){
    sums+=value
 }
 console.log(sums)
 