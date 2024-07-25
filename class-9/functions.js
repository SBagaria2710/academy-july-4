// Function which accepts 2 parameters
// function serveBeverage(quantity, drink) {
//   console.log(`I want ${quantity} ${drink}`);
// }

// // Function execution
// serveBeverage(2, "coffee");

// --------
const serveBeverage = function (quantity, drink) {
  console.log(`I want ${quantity} ${drink}`);
};

// Function execution
serveBeverage(2, "coffee");

/**
 * Functions are first-class citizens in JavaScript
 * 1. Functions can be assigned to variables
 * 2. Functions can be passed as arguments to other functions
 * 3. Functions can be returned from other functions
 */

const foo = function () {
  console.log("Hello, I am foo");
};

function bar(func) {
  func(); // Hello, I am foo
  return function () {
    console.log("Just executed foo");
  };
}

const baz = bar(foo);
baz(); // Just executed foo
