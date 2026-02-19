// // qus 1 guees output
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }

// let c = counter();

// console.log(c());
// console.log(c());

// // qus2
// function test(){
//     let x = 10;
//     return function(){
//         return x;
//     }
// }

// let t = test();
// console.log(t());
// // qus 3
// function counter(){
//     let count = 5;
//     return function(){
//         count--;
//         return count;
//     }
// }

// let c1 = counter();

// console.log(c1());
// console.log(c1());

// // qus3
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }

// let a = counter();
// let b = counter();

// console.log(a());
// console.log(a());
// console.log(b());
// console.log(a());


// //qus4
console.log("qus 4");
function counter(){
    let count = 0;

    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        }
    }
}

let another = counter();

console.log(another.increment());
console.log(another.increment());
console.log(another.decrement());
