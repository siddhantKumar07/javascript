// so basically closure is a function that has access to the parent scope, even after the parent function has closed. It is a powerful feature of JavaScript that allows us to create private variables and functions. A closure is created when a function is defined inside another function and the inner function has access to the outer function's variables and parameters.

 function counter(){
    let count=0;
     return function(){
     count++;
  return count
     }
 }
 //when counter() runs:

// It creates a variable count = 0

// Then it returns a new function

// That returned function can still remember the count variable

// That memory is called a closure.

 let counfun =counter();
 let counfun2 =counter();
console.log(counfun());
console.log(counfun());
console.log(counfun());
console.log(counfun());
console.log(counfun2());
//Every time you call counter(),
//  it creates a new separate count variable.

// So:

// counfun has its own count

// counfun2 has its own different count

// They do NOT share the same count.