// checking the number is exists in the array or not 

let arr=[1,2,3,4,5,6,7,8,9]
let ans =arr.includes(77)
console.log(ans)

// using different way to find 
let anss;
for(let i=0;i<arr.length;i++){
    if(arr[i]==700)
    {
        anss=true
    }
    else anss =false
}
console.log(anss)