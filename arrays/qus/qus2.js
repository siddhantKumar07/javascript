// finding tthe smallest element from the array 

let collection =[11,22,44,55,11,0,47,86,2,-4,12,-1,-8,-5]

// finding smallest with the help of math.min()
let minimum=Math.min(...collection)
console.log(minimum)


// find using the reduce()
let mini =collection.reduce((acc,cur)=>{
    return acc>cur?cur:acc;
})
console.log(mini)

// finding with the heplp of for loopp
let smallest =collection[0];
for(let i=1;i<collection.length-1;i++){
if(collection[i]<smallest){
    smallest =collection[i]
}
}
console.log(smallest)