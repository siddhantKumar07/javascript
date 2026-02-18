// for loop is used when we know how many times we want to loop through a block of code
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop is used when we want to loop through a block of code as long as a specified condition is true
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do...while loop is used when we want to loop through a block of code at least once, and then repeat the loop as long as a specified condition is true
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// for...in loop is used to loop through the properties of an object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (let key in person) {
    console.log(key + ': ' + person[key]);
}

// for...of loop is used to loop through the values of an iterable object (like an array)
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}

// nested loops are used when we want to loop through a block of code inside another loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log('i: ' + i + ', j: ' + j);
    }
}

//forEach loop is used to execute a provided function once for each array element
const fruits = ['apple', 'banana', 'cherry'];       
fruits.forEach(function(fruit) {
    console.log(fruit);
});
 