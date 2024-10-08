class Pizza {
  static totalPizzaMade = 0;

  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    Pizza.totalPizzaMade++;
  }

  static calculateTotalPizzaMade() {
    console.log(`Total Pizza made so far = ${Pizza.totalPizzaMade}`);
  }

  describe() {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} on a ${
        this.crustType
      } crust`
    );
  }
}

const p = new Pizza(
  ["jalapeno", "cheese", "tomato", "onion", "corn"],
  "regular",
  "thick"
);

const p1 = new Pizza(
  ["jalapeno", "cheese", "tomato", "onion", "corn"],
  "regular",
  "thick"
);

const p3 = new Pizza(
  ["jalapeno", "cheese", "tomato", "onion", "corn"],
  "regular",
  "thick"
);

Pizza.calculateTotalPizzaMade();

class StuffedCrustPizza extends Pizza {
  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType);
    this.stuffingType = stuffingType;
  }

  logProperties() {
    console.log(this);
  }

  describeSuffing() {
    console.log(`This pizza has ${this.stuffingType}`);
  }
}

const instance = new StuffedCrustPizza(
  ["jalapeno", "cheese", "tomato", "onion", "corn"],
  "regular",
  "thick",
  "cheese and garlic"
);

// instance.describe();
// instance.describeSuffing();
// instance.logProperties();
