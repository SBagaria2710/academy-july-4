function counter() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }
  return increment;
}

const count = counter();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count()); // 4
