// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim();
// console.log("output :-"+input);

// let arr=[]
// const fs = require('fs');
// const input = fs.readFileSync(0,'utf-8')
// for(let i=0;i<5;i++){
//     arr[i]=input
// }
// console.log(arr)

// const fs = require('fs');
// const arr = fs.readFileSync(0, 'utf8')
//                 .trim()
//                 .split(/\r?\n/);

// console.log(arr);

// let mapped = arr.map((elem)=>{
//     return "hello "+elem;
// })
// console.log(mapped)

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter a number: ', (input) => {
//     console.log('You entered:', input);
//     rl.close();
// });

// let fs = require('fs')
// let input = fs.readFileSync(0,'utf-8').trim()
// console.log(input)

// some qus 
let fs = require('fs')
let input = fs.readFileSync(0,'utf-8').trim();
if(input==7){
    console.log("thala for a reason")
}
else if(input=="mahi"){
    console.log("dhoni  for a reason")
}

// second method is use to take one input at a time 

let readline = require('readline')
const r1 = readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }

)
r1.question("enter the value :",(ans)=>{
console.log(ans);
r1.close()
})

