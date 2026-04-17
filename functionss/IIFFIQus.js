let retfun =(()=>{
console.log("This is an IIFE function using arrow function syntax");
let balance;
function addBalance(amount){
balance = amount;   
}
function getbalance(){
return balance;
}
fun

})();

console.log(balance); 