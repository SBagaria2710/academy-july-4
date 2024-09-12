const arr = [1, 2, 3, 4, 5];

// MAP
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    if (typeof cb !== "function") {
      throw new TypeError(cb + "is not a function");
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
      result[i] = cb(this[i], i, this);
    }
    return result;
  };
}

// FILTER
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    if (typeof cb !== "function") {
      throw new TypeError(cb + "is not a function");
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

// Reduce
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initialValue) {
    if (typeof cb !== "function") {
      throw new TypeError(cb + "is not a function");
    }

    // Handle empty array with no initial value case
    if (this.length === 0 && arguments.length === 1) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    // Set the initial index and accumulator
    let acc = arguments.length >= 2 ? initialValue : this[0];
    let startIndex = arguments.length >= 2 ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        acc = cb(acc, this[i], i, this);
      }
    }

    return acc;
  };
}

const sum = arr.myReduce(function (acc, item) {
  acc = acc + item;
  return acc;
}, 0);

console.log(sum);
