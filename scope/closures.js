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

// how its work 

// It happens because when a function is created, JavaScript stores a reference to the lexical environment in which that function was defined, and as long as that function can still be accessed, the outer variables it references are kept alive in memory.