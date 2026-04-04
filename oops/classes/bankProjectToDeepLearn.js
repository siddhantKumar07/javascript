class Bank{
    
    constructor(name,branch,balance){
  this.name =name
  this.branch=branch;
  this.balance =balance;

    }
    deposit(balance){
       return this.balance +=balance
    }
    withdraw(money){
       return this.balance-=money;
    }
    checkBalance(){
        return this.balance;
    }
}
 const sbi =new Bank("siddhant kumar","gkp",0);
console.log( sbi.balance)
sbi.deposit(55000);
console.log( "balance after deposit :"+sbi.balance)