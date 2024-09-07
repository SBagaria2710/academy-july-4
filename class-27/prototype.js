// ProtoType is itself an "Object".

const person = {
  name: "Shashwat",
  meta: {
    age: 27,
  },
};

// console.log(person);

// // "hasOwnProperty" method in JavaScript is used to check whether an Object has a particular property as a direct property or not.
// console.log(person.hasOwnProperty("name")); // True
// console.log(person.hasOwnProperty("age")); // False

// --------------------------------------------------
// function Car(model, year) {
//   this.model = model;
//   this.year = year;

//   // // Methods to be defined inside the constructor
//   // this.displayInfo = function () {
//   //   return `This is a ${this.year} ${this.model}`;
//   // };
// }

// Car.prototype.displayInfo = function () {
//   return `1. This is a ${this.year} ${this.model}`;
// };

// Car.prototype.__proto__.displayInfo = function () {
//   return `2. This is a ${this.year} ${this.model}`;
// };

// let car1 = new Car("Toyota Camry", 2023);
// let car2 = new Car("Ford Mustang", 2024);

// console.log(car1);
// console.log(car1.displayInfo());

// DRY = DONT REPEAT YOURSELF

// ------------------ Object.create() ------------------------
// Syntax: Object.create(proto); // "Proto" here is the object that should be the prototype of the newly-created object.

let carPrototype = {
  displayInfo: function () {
    return `3. This is a ${this.year} ${this.model}`;
  },
};

let car1 = Object.create(carPrototype);
car1.year = 2023;
car1.model = "Toyota Camry";

let car2 = Object.create(carPrototype);
car2.year = 2024;
car2.model = "Ford Mustang";

console.log(car1, car2);
