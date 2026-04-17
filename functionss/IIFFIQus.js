let retfun =(()=>{
console.log("This is an IIFE function using arrow function syntax");
let balance;
function setbalance(amount){
balance = amount;   
}
function getbalance(){
return balance;
}

})();

console.log(balance); 