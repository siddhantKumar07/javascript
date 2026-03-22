// Write a program that counts down from 10 to 0, printing each number to the console every second. When the count reaches 0, it should print "Liftoff!" and stop the timer.

let count =10;
let co=setInterval(()=>{
      console.log(count);
    count--;
  if(count<0){
    clearInterval(co);
  }
},1000);

