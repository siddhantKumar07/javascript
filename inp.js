let readline = require('readline')
let values;
let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("enter the value -- ", (value) => {
    values = value
    console.log(values)
    r1.close()
})