// with fs
let fs = require('fs')
let input = fs.readFileSync(0,'utf-8').trim()

console.log(input)

//with readline
let readline = require('readline')
let r1 = readline.Interface({
    input:process.stdin,
    output:process.stdout
})
r1.question("enter the value :",(output)=>{
    console.log(output)
    r1.close()
})