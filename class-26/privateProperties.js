class Pizza {
  static totalPizzaMade = 0;
  #toppings; // Private Property
  #size; // Private Property
  #crustType; // Private Property
  #consumerName; // Private Property

  constructor(toppings, size, crustType, consumerName) {
    this.#toppings = toppings;
    this.#size = size;
    this.#crustType = crustType;
    this.#consumerName = consumerName;
    Pizza.totalPizzaMade++;
  }

  logConsumerName() {
    console.log("Consumer Name =", this.#consumerName);
  }

  static calculateTotalPizzaMade() {
    console.log(`Total Pizza made so far = ${Pizza.totalPizzaMade}`);
  }

  describe() {
    console.log(
      `A ${this.#size} pizza with ${this.#toppings.join(", ")} on a ${
        this.#crustType
      } crust`
    );
  }
}

const p = new Pizza(
  ["jalapeno", "cheese", "tomato", "onion", "corn"],
  "regular",
  "thick",
  "Shashwat"
);

p.consumerName = "Prakhar";
p.logConsumerName();

class StuffedCrustPizza extends Pizza {
  #stuffingType;
  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType);
    this.#stuffingType = stuffingType;
  }

  logProperties() {
    console.log(this);
  }

  describeSuffing() {
    console.log(`This pizza has ${this.#stuffingType}`);
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
