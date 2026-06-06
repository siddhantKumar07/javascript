
let readline = require('readline')
let r1 = readline.Interface({
    input:process.stdin,
    output: process.stdout
})
r1.question("hello enter anything => ",(value)=>{
console.log("the value you entered is : " +value)
r1.close()
})