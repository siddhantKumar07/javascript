let retfun =(()=>{
console.log("This is an IIFE function using arrow function syntax");
let balance;

function addBalance(amount){
balance = amount;   
}

function getbalance(){
return balance;
}

function withdraw(amount){
if(amount > balance){
console.log("Insufficient balance");    
}else{
balance -= amount;
console.log(`Withdrawn amount: ${amount}, Remaining balance: ${balance}`);
}
}
})();

