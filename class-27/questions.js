let obj = { name: "Shashwat" };
console.log(obj.hasOwnProperty("name"));

obj.__proto__ = null;

try {
  console.log(obj.hasOwnProperty("name"));
} catch (err) {
  console.log("Error:", err);
}

// ----------
Object.prototype.method = function () {
  console.log("Method on every Object!!!");
};

let obj1 = {};
obj1.method(); // Method on every Object!!!

let arr = [];
arr.method(); // Method on every Object!!!

// ----------
function Cat(name) {
  this.name = name;
}

const fluffy = new Cat("Fluffy");
fluffy.__proto__ = { age: 5 };

console.log(fluffy.age); // 5
console.log(fluffy.hasOwnProperty("age")); // false
console.log(fluffy.__proto__ === Cat.prototype); // false

console.log(fluffy.__proto__, Cat.prototype);
