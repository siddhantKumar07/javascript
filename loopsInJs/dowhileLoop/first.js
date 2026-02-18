//do while is used to repeat a block of code at least once, and then continue to repeat it as long as a specified condition is true

let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// do while loop to check if a number is even or odd
let number = 10;
do {
    if (number % 2 === 0) {
        console.log(number + ' is an even number.');
    } else {
        console.log(number + ' is an odd number.');
    }
    number++;
} while (number < 15);