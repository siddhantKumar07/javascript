// for each is a method that is used to iterate over the elements of an array. It takes a callback function as an argument and executes that function for each element in the array.

const fruits =["apple","banana","papaya","something"]


fruits.forEach(function(values){
console.log(values);
if(values=="something"){
    console.log(values,": its not a fruits")
}
else{
    console.log("its a fruit")
}
});