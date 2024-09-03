// Rules:
// For Global Execution context this will be a window/globalObj object.
// For Execution context created with method call(calling with object), this will be that object.
// For Execution context created with a function call(calling without object), this will be that window/globalObj.

// 1st Scenario
// console.log(this); // {}

// 2nd Scenario - Inside a function
// function foo() {
//   console.log(this); // Global Object
// }
// foo();

// 3rd Scenario - "this" is inside the function inside an object.
// let obj = {
//   firstName: "Shashwat",
//   age: 27,
//   foo: function () {
//     console.log(this); // Obj
//   },
// };
// obj.foo();

// let obj2 = {
//   firstName: "Shashwat",
//   age: 27,
//   testFunction: function () {
//     console.log("Outside =>", this); // Obj2
//     function bar() {
//       console.log("Inside =>", this); // GlobalObj
//     }

//     bar();
//   },
// };

// obj2.testFunction();
