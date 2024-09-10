// ------------------------------ CALL
// const printNameAndAge = function () {
//   console.log(`My name is ${this.name} and I am ${this.age} years old`);
// };

const person1 = {
  name: "Shashwat",
  age: 27,
  printNameAndAge: function (arg1, arg2) {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  },
};

const person2 = {
  name: "Tony Stark",
  age: 44,
  foo: "foo",
  bar: "bar",
};

// person1.printNameAndAge("foo", "bar"); // My name is Shashwat and I am 27 years old
// person1.printNameAndAge.call(person2, "foo", "bar", 100, {}, []); // My name is Tony Start and I am 44 years old

// ------------------------------ APPLY
// person1.printNameAndAge.apply(person2, ["foo", "bar", 100, {}, []]);

const numbers = [5, 6, 7, 8, 2, 3];
const results = Math.max.apply(null, numbers); // Math.max(5, 6, 7, 8, 2, 3);
// console.log(results);

// ------------------------------ BIND
const printNameAndAge = person1.printNameAndAge.bind(person2, "foo", "bar");
printNameAndAge();
