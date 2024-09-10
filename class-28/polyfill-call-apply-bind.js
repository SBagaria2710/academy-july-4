let car = {
  name: "Mercedes",
  color: "White",
};

function buyCar(price) {
  console.log(`I bought a ${this.color} ${this.name} of ${price}`);
}

// ------------- CALL -------------
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not a executable");
  }

  // Get your function
  const functionToBeInvoked = this; // buyCar

  // Assign the function to the context object
  context.tempFunction = functionToBeInvoked;

  // Invoke the function
  let result = context.tempFunction(...args);

  // Delete the temp function from the object
  delete context.tempFunction;

  return result;
};

// buyCar.myCall(car, "$100,000");

// ------------- APPLY -------------
Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not a executable");
  }

  if (!Array.isArray(args)) {
    throw new Error(args + "needs to be an array");
  }

  // Get your function
  const functionToBeInvoked = this; // buyCar

  // Assign the function to the context object
  context.tempFunction = functionToBeInvoked;

  // Invoke the function
  let result = context.tempFunction(...args);

  // Delete the temp function from the object
  delete context.tempFunction;

  return result;
};

// buyCar.myApply(car, ["$100,000"]);

// ------------- BIND -------------

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not a executable");
  }

  const functionToBeInvoked = this; // buyCar

  return function (...secondaryArgs) {
    functionToBeInvoked.myApply(context, [...args, ...secondaryArgs]);
  };
};

buyCar.myBind(car, "$100,000")();
