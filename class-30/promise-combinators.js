function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ userId: 1, userName: "Shashwat" }), 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 3000);
  });
}

// Promise.all
// Promise.all is a powerful utility in JS for managing multiple promises simultaneously. It takes
// an array of promises as input and returns a single Promise that resolves when all the input promises
// have resolved, and rejects only if any of the passed Promise rejects.

Promise.all([fetchData(), fetchPosts()])
  .then((results) => {
    console.log("User Data: ", results[0]);
    console.log("User Posts: ", results[1]);
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });

// Promise.allSettled
/**
 * Promise.allSettled is another useful function in JS for handling multiple promises. Unlike, Promise.all, which
 * immediately rejects upon any of the input promises rejecting, Promise.allSettled wait for all promises to either
 * resolve or reject and then resolves with an array of object representing the outcome of each promises.
 */

Promise.allSettled([fetchData(), fetchPosts()]).then((results) =>
  console.log(results)
);

// Promise.race
/**
 * It is another method in JS to handle multiple promises. It allows you to race multiple promises against each other
 * and returns a promise that settles as soon as the first of the input promises settles, whether it resolves or rejects.
 * This method is especially useful for timing operations or handling situations where the first response is
 * prioritised over others.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

/**
 * Promise.any
 * It is a recent addition to the JS Promise API, introduces to handle multiple promises by accepting the first promise
 * that resolves successfully, ignoring any promises that reject, unless all promises reject. It offers a solution when you have
 * several async operations and care only about the first successful completion.
 */

function resolveQuickly() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Resolved Quickly"), 500);
  });
}

function resolveSlowly() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Resolved Slowly"), 2000);
  });
}

function rejectFast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected Fast");
    }, 1000);
  });
}

function rejectSlowly() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Reject slowly"), 1500);
  });
}

Promise.any([rejectFast(), rejectSlowly()])
  .then((response) => console.log(response))
  .catch((err) => err.errors.forEach((error) => console.log(error)));
