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