let promisesss = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("promise resolved successfully");
    }else{
        reject("promise rejected");
    }
});

promisesss
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error);
});