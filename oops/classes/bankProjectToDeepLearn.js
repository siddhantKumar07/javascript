class Bank{
    
    constructor(name,branch,balance){
  this.name =name
  this.branch=branch;
  this.balance =balance;

    }
    deposit(balance){
        this.balance +=balance
    }
}