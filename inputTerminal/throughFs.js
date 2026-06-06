let fs = require('fs')
let input = fs.readFileSync(0,'utf8').trim()
console.log(input.split("\r\n")) // this will print the array like structure