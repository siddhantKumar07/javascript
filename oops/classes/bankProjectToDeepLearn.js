class Bank{
    #balance;
    constructor(name,branch,balance){
  this.name =name
  this.branch=branch;
  this.#balance =balance;
    }

  allDetaails(){
    console.log(`name : ${this.name} , branch : ${this.branch} , balance : ${this.#balance}`)
  }
    deposit(balance){
       return this.#balance +=balance
    }
    withdraw(money){
       return this.#balance-=money;
    }
    checkBalance(){
        return this.#balance;
    }
}
 const sbi =new Bank("siddhant kumar","gkp",0);
console.log( sbi.checkBalance())
sbi.deposit(55000);
console.log( "balance after deposit :"+sbi.checkBalance())
sbi.withdraw(5000);
console.log("balance after withdraw :"+sbi.checkBalance())

const hdfc = new Bank("sk","up",0);
console.log( hdfc.checkBalance())
hdfc.deposit(100000);
console.log( "balance after deposit :"+hdfc.checkBalance())
hdfc.withdraw(20000);
console.log("balance after withdraw :"+hdfc.checkBalance())
hdfc.allDetaails()