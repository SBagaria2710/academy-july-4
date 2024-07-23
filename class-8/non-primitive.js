// These are basically reference types in JavaScript

// Functions

// What are functions?
// Answer: Functions are a block of code that can be called by name. They can accept parameters and return values.

// Function Declaration
function greet(greeting) {
  console.log(`Good, ${greeting}!`);
}

// Function Invocation/Execution
// greet("Evening");

// -----------------------------------

// Arrays
// It is a data structure to store multiple values in a single variable. The elements are stored in the form of an index.
let arr = [1, "Scaler", true, undefined, null, [1, 2, 3]];

arr.push("Academy");
arr.pop(); // "Academy" will be popped

arr.shift(); // 1 will be removed
arr.unshift("Hello"); // "Hello" will be added at the beginning

arr[3] = "World";

// console.log(arr);

// -----------------------------------
const foo = [1, 2, 3, 4, 5];

// Add 6 at the end
// foo = [1, 2, 3, 4, 5, 6]; // Does not work
foo.push(6); // Works

// console.log(foo);

// -----------------------------------
// OBJECTS

// What are objects?
// Answer: Objects are a collection of "key-value pairs". {} is used to create an object.

const obj = {
  name: "John",
  age: 30,
  isMarried: false,
  address: {
    city: "New York",
    country: "USA",
  },
  greet: function (greeting) {
    console.log(`Hello, ${greeting}`);
  },
  foo: [1, 2, 3],
};

obj.address.city = "California";
// obj.greet("Morning");

console.log(obj.foo[2]);
