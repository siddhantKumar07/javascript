// “Closure matlab aesa function jo apne outer function ke variable ko remember karke rakhta hai even jab function execute ho chuka ho.”
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
var closureFunction = outer();
closureFunction(); // Output: 10
// In this example, the inner function is a closure because it has access to the variable 'a' defined in the outer function even after the outer function has finished executing. When we call the closureFunction, it still remembers the value of 'a' and logs it to the console.