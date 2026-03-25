let arr = [
  [1, 2, 3],
  [4, 5, 6],
];

let arr2 = [
  [1, 2, 3],
  [4, 5, 6],
];

let arr3 = [];

for (let i = 0; i < arr.length; i++) {
  arr3[i] = []; // ✅ create row first
  for (let j = 0; j < arr[i].length; j++) {
    arr3[i][j] = arr[i][j] * arr2[i][j];// multiply corresponding elements and store in arr3
  }
}

console.log(arr3);