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