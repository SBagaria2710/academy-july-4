// Pure Function
function sum(a, b) {
  const result = a + b;
  return result;
}

// sum(1, 2); // 3
// sum(1, 2); // 3

// Impure Function
let c = 0;
function sum(a, b) {
  const result = a + b + c++;
  return result;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2)); // 4
console.log(sum(1, 2)); // 5
console.log(sum(1, 2)); // 6
console.log(sum(1, 2)); // 7
