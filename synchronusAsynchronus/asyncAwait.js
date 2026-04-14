// async await is a syntactic sugar built on top of promises. It allows you to write asynchronous code in a more synchronous and readable manner. The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause the execution of the function until a promise is resolved or rejected.
let promises = new Promise((resolve, reject) => {
   setTimeout(()=>{
    if((Math.random()*10)<5){
        resolve("resoved the request");
    }
    else{
        reject("rejected the request");
    }
   },3000)
})

async function runner() {
try{
    let mess = await promises;
   console.log(mess)
}
catch(err){
    console.log(err)
}
}

runner()