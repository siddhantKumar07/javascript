//iife means immediately invoked function expression
//iife is a function that is executed immediately after it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping. It is also known as a self-invoking function or a self-executing anonymous function.
(function() {
    console.log('This is an IIFE');
})(); // Output: This is an IIFE

// its also called module pattern because it can be used to create a module that encapsulates private variables and functions, and exposes only the necessary parts to the outside world.
let counter = (function() {
    let count = 0; // private variable
    function increment() { // private function
        count++;
    }
    function getCount() { // public function    
        return count;
    }
    return {
        increment,
        getCount
    };
})();

counter.increment();
counter.increment();