// for loop is used to repeat a block of code a certain number of times
for (let i = 0; i < 5; i++) {
    console.log(i);
}
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <=i; j++) {
        process.stdout.write('*');//this will print the stars in the same line
    }
    console.log(); // Move to the next line after each row
}