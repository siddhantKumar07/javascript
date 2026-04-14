let promisesss = new Promise((resolve, reject) => {
    setTimeout(() => {
    let success = false;
    if(success){
        resolve("promise resolved successfully");
    }else{
        reject("promise rejected");
    }
}, 5000);
})

promisesss
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error);
});