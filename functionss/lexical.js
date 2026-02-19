//Lexical scoping ka matlab hai: jo function jahan likha gaya hai, wo apne outer (parent) scope ke variables ko access kar sakta hai.
//lexical scopeing means that the inner function has access to the variables of the outer function. The inner function can access the variables of the outer function, but the outer function cannot access the variables of the inner function.
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}
outer(); // Output: 10
// In this example, the inner function has access to the variable 'a' defined in the outer function. When we call the outer function, it executes the inner function, which logs the value of 'a' to the console.

//Function apni position ke hisaab se variables access karta hai.
