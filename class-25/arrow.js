// // Traditional way to write a function in JS
// function sum(a, b) {
//   return a + b;
// }

// // Arrow Function
// const sum = (a, b) => {
//   return a + b;
// };

// // Arrow Function - Even more smaller code
// const sum = (a, b) => a + b;

// --------------------------------------------
let user = {
  firstName: "Shashwat",
  sayHi: () => {
    let arrow = () => {
      let innerArrow = () => console.log(this);
      innerArrow();
    };
    arrow();
  },
};

user.sayHi();

// user => sayHi(Method) => arrow => innerArrow
