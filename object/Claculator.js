let calculator = {
  add: function (...value) {
    let sum = 0;
    value.forEach((element) => {
      sum += element;
    });
    return sum;
  },
  substract: function (...value) {
    let substract = 0;
    value.forEach((element) => {
      substract -= element;
    });
    return substract;
  },
  multiply: function (...value) {
    let mul = 1;
    value.forEach((element) => {
      mul *= element;
    });
    return mul;
  },
};

console.log(calculator.add(4,45,5,5,8,5,2,2,2,5,57,6,86,86,66,8,68,68))
console.log(calculator.substract(800,56,41,1,45,5,6,3,5,88,77,88,6,6,6,52,2,2,33,3,33,3,33,33,3,3,3,5,3,3,6,5,52,2,2,2,))
console.log(calculator.multiply(1,2,3,4,5))