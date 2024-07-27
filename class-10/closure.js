// function parent() {
//   let a = 10;

//   return function () {
//     console.log(a); // 10
//   };
// }

// let functionReceived = parent();
// functionReceived();

// --------------------

function parent() {
  let a = 10;

  function child() {
    let b = 20;
    console.log(a);

    function child2() {
      console.log(a + b);
    }

    return child2;
  }

  return child;
}

let functionReceived = parent();
console.log(functionReceived); // function definition for child
const functionReceived2 = functionReceived();
console.log(functionReceived2); // function definition for child 2

functionReceived2();
