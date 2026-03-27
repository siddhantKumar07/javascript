function outer() {
    var a = 1;
    function inner() {
        console.log(a);
        a++;
    }   
    return inner;
}

// so basically , closures are the functions which declared inside the outer function and have the acess of the variable of outer funtion and has the power of remembering the variable of the outer function even after the execution of the outer function is completed.
var fn = outer();
fn();
fn();
fn();