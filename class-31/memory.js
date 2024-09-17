// Primitive Data Type
let numOne = 50;
let numTwo = numOne;

numOne = 100;

// console.log(numOne); // 100
// console.log(numTwo); // 50

// Non-Primitive/Reference Data Type
let obj1 = {
  name: "Scaler Academy",
  age: 18,
};

let obj2 = obj1;

obj1.age = 5;

console.log(obj2.age); // 5
