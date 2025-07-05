// // arrow, higherorder function, callback function
// // higher order function array -> map, filter, forEach, reduce

// function operation(fun, a, b) {
//   fun(a, b); // callback funcion
// }

// function sum(a, b) {
//   console.log(a + b);
// }

// function product(a, b) {
//   console.log(a * b);
// }

// sum(4, 5);
// product(6, 7);

// operation(product, 4, 5);

const nums = [1, 2, 3, 4, 5, 6];

// nums.forEach((element) => {
//   console.log(element);
// });

// let modifiedArr = nums.map((element) => {
//   return element * 2;
// });

// const even = nums.filter((element) => {
//   return element % 2 == 0;
// });

const find2 = nums.find((element) => {
  return element > 3;
});

const is5 = nums.includes(9);

console.log(is5);
