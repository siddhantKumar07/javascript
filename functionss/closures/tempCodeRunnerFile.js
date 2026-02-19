// Define the closure function
function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let a = counter();
console.log(a()); // This will output: 1
