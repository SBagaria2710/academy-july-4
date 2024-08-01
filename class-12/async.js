// console.log("Start");

// function sayHello(arg1) {
//   console.log("Hello", arg1);
// }

// sayHello();

// console.log("End");

// --------------------------------------------

// Eg 1:
// console.log("Start");

// function sayHello(arg1) {
//   console.log("Hello", arg1);
// }

// setTimeout(sayHello, 2000, "World");

// console.log("End");

// Eg 2:
console.log("Start");

function sayHello(arg1) {
  console.log("Hello", arg1);
}

setTimeout(sayHello, 2000, 1);
setTimeout(sayHello, 0, 2);
setTimeout(sayHello, 100, 3);

console.log("End");
