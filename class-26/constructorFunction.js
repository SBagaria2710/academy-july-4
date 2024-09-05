function Pizza(toppings, size, crustType) {
  this.toppings = toppings;
  this.size = size;
  this.crustType = crustType;

  this.describe = function () {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} on a ${
        this.crustType
      } crust`
    );
  };
}

let customer1 = new Pizza(["corn", "cheese"], "medium", "thin");
let customer2 = new Pizza(
  ["jalapeno", "cheese", "tomato", "onion", "corn"],
  "regular",
  "cheese burst"
);

console.log(customer1.describe());
console.log(customer2.describe());
