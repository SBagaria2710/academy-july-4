// TEMPORAL DEAD ZONE - START
console.log(a); // undefined
printName("John"); // My name is John

let a = 4;
// TEMPORAL DEAD ZONE - END

var printName = function (name) {
  console.log(`My name is ${name}`);
};

console.log("------------");
console.log(a); // 4
printName("John"); // My name is John
