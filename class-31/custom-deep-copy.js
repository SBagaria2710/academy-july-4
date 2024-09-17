function deepCopy(obj) {
  // Base Case - to handle primitive data types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Array
  if (Array.isArray(obj)) {
    let copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]);
    }
    return copy;
  }

  // Handle Functions
  if (obj instanceof Function) {
    return obj.bind({});
  }

  // Handle Objects
  if (obj instanceof Object) {
    let copy = {};
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = deepCopy(obj[attr]);
      }
    }
    return copy;
  }

  throw new Error("Unable to copy object! Type is not supported");
}

const originalObj = {
  name: "Shashwat",
  details: {
    age: 27,
    hobbies: ["Reading", "Trekking", "Binge-Watching Movies"],
  },
  greet() {
    console.log(`Hello, My name is ${this.name}!`);
  },
};

const clonedObj = deepCopy(originalObj);

// Test the method;
clonedObj.greet(); // Hello, My name is Shashwat

// Modifications
clonedObj.name = "Anurag";
clonedObj.details.age = "24";

console.log(originalObj.name); // Shashwat (Note: Nothing Changed)
console.log(originalObj.details.age); // 27 (Note: Nothing Changed)

clonedObj.greet(); // Hello, My name is Anurag
