let arr =[2,5,6,7,8,9];

arr.pop();
console.log(arr);

arr.unshift(1);
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(2,0,3);
console.log(arr);

arr.splice(3,0,4);
console.log(arr);

// for iterating array
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("using for each loop");
arr.forEach(element => {
    console.log(element);
});

//