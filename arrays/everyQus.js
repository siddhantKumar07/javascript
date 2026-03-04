//The .every() method in JavaScript is used with arrays to check if all elements satisfy a given condition.
// It returns true or false.

// If every element passes the test → true
// If any element fails → false
let array=[1,2,3,4,5,6,7,8,9,10]
 let even =array.every((val)=>{
    return val%2==0
 })

 console.log(even)// it return false because some element in array is odd , for true there should all the elements even