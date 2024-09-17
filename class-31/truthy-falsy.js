const falsyValues = [false, 0, -0, "", null, undefined, NaN];
falsyValues.forEach((value) => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});

console.log("----------------------------");

const truthyValues = [true, 1, -1, "hello", {}, [], () => {}];
truthyValues.forEach((value) => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});

// Applications
let message = "";
if (!message) {
  message = "Shashwat";
}
console.log(message);
