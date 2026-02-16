var num = 1;// global variable
 {
    var num = 2; // global variable because var is function scoped and not block scoped
 }
 console.log(num); // Output: 2 because the other num is in block not function so it is global variable and it overrride the first one.


 let num1 =99;
 {
    let num1 =5280;
    console.log(` i am in block scope and num1 =${num1}`)
 }
 console.log(num1);//the output is 99 ; because the let is respect the block and it is in the block scope 

 // another examples

 if(true){
    var a = 10;
    let b = 20;
    console.log(`inside block a = ${a} and b = ${b}`); // Output: inside block a = 10 and b = 20
 }
    console.log(`outside block a = ${a}`); // Output: outside block a = 10 because var is function scoped and not block scoped
    console.log(`outside block b = ${b}`); // This will throw a ReferenceError because b is not defined outside the block scope.