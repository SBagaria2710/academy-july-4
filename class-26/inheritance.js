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

instance.describe();
instance.describeSuffing();
instance.logProperties();
