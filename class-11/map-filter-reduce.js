// const arr = [1, 2, 3, 4, 5];
// console.log("START =>", arr);

// // Map
// function calculateSquare(num) {
//   return num * num;
// }
// const squareArr = arr.map(calculateSquare);
// console.log(squareArr);

// // Filter
// function isEven(num) {
//   return num % 2 === 0; // === is strict equality operator
// }
// const filteredArr = arr.filter(isEven);
// console.log(filteredArr);

// // Reduce
// function add(a, num) {
//   return a + num;
// }
// const sum = arr.reduce(add, 0);
// console.log(sum);

// console.log("END =>", arr);

// Map - Filter - Reduce Questions
const transactions = [1000, 2000, -500, 3000, -2000, 5000, -1000];
const inrToUsd = 75;

// 1. Convert all transactions to USD
const convertedToUsd = transactions.map(function (transaction) {
  return transaction / inrToUsd;
});

const creditedValues = transactions.filter(function (transaction) {
  return transaction > 0;
});

const finalBalance = transactions.reduce(function (balance, transaction) {
  return balance + transaction;
}, 0);

console.log(finalBalance + " USD");
