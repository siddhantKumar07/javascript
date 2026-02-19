// to calculate the discount

function calcdisc(total,percentage){
    return total- discount(total,percentage);
}

function discount(total,percentage){
    return (total *percentage)/ 100;
}

let total = 900;
let percentage = 20;
console.log(calcdisc(total,percentage));


function discoun(perc){
   return function(amount){
     return amount - (amount *perc)/100;
   }
}
let discounter =discoun(20);
console.log(`the price after discount is ${discounter(1000)}`)