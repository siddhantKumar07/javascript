let count =0;
let co=setInterval(()=>{
    count++;
    console.log(count);
},1000);
while(count>=0){
clearInterval(co);
}