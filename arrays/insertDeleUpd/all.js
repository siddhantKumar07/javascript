let arr =[2,6,5,4,2];
arr.push(52)// this is used to add element at last index
console.log(arr)

arr.splice(2,0,500);//first value represent the index where you want to insert or delete and second value shows the how many value you want to delete and third one is shows which value you want to insert
console.log(arr)

//In JavaScript, slice() is used to extract a portion of an array or string and return it as a new array or string — without changing the original.
newArr=arr.slice(1,4)
 console.log(newArr);