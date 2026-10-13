// let arr=[0,5,7,0,9,5];


// let filtered=arr.filter((elem)=>elem>0)
// console.log(filtered);

let non=function(arr,fn){
let filtered=[];
for(let i=0;i<arr.length;i++){
    if(fn(arr[i])){
        filtered.push(arr[i]);
    }
}
return filtered;
}

let fn =(n)=>{
return n>0;
}
let arr = [1,0,2,5,4,8,96,2,4,0,0,0,4,0,4,0,5,6]
console.log(non(arr,fn))