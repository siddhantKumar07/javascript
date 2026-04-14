let prom = new Promise((resolve, reject)=>{
setTimeout(()=>{
    let a = 10;
    let b = 20;
    let sum = a + b;
    if(sum === 30){
        resolve("The sum is correct");
    }   
    else{
        reject("The sum is incorrect");
    }
}, 2000);
})
prom
.then((messge)=>{
    console.log(messge);
})
.catch((error)=>{
    console.error(error);
});

let promise2 = new Promise((res,rej)=>{
     if(1<4){
        res("yes 1 is less than 4")
     }
     else rej("no no ")
})

pro
