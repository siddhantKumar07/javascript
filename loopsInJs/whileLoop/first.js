// while loops are used to repeat a block of code as long as a specified condition is true.
let i = 0;  
while (i < 5) {
    process.stdout.write(i + ' '); // This will print the numbers in the same line
    i++;
}

// palindrome check using while loop

let temp;
let num = 12321;
let reverse=0;
temp=num;
while(temp>0){
    let remainder = temp % 10;
    reverse =reverse *10 + remainder;
    temp =Math.floor(temp/10);
}
if(num == reverse){
    console.log(num + " is a palindrome number.");
}
else{
    console.log(num + " is not a palindrome number.");
}
