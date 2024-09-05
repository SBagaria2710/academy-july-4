class MyClass {
  constructor() {
    // Initialisation of properties
  }

  // Methods
  myMethod() {
    // Method Implementation
  }

  myMethod1() {
    // Method Implementation
  }
}

const instance = new MyClass();

// ------------------------
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.firstName + " " + this.lastName;
  }

  greet() {
    console.log(`Hey there! I am ${this.fullName}.`);
  }
}

const p1 = new Person("Shashwat", "Bagaria");
const p2 = new Person("Ayush", "Tripathi");
// p2.greet();

// --------------------
class Pizza {
  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
  }

  describe() {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} on a ${
        this.crustType
      } crust`
    );
  }
}

let customer1 = new Pizza(["corn", "cheese"], "medium", "thin");
let customer2 = new Pizza(
  ["jalapeno", "cheese", "tomato", "onion", "corn"],
  "regular",
  "cheese burst"
);

console.log(customer1);
console.log(customer2);
