// count the occurance of the number ibto array

let arr=[1,2,4,5,5,6,2,1,4,7,8,9];
const count = arr.reduce((acc, curr) => {

  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }

  return acc;
}, {});
console.log(count)