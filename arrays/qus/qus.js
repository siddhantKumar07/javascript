// find the largest element in the array 
let array =[1,2,44,5,7,8,6,2,55,4,5,7,8,5,6]
let largest=0
for(let i=0;i<array.length;i++){
if(array[i]>largest){
largest =array[i]
}
}
console.log(largest)