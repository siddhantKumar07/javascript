let count =10;
let co=setInterval(()=>{
      console.log(count);
    count--;
  if(count<0){
    clearInterval(co);
  }
},1000);

