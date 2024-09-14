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
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let total = 0;
    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          result[idx] = res;
          total++;
          if (total === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

Promise.myAll([fetchData(), fetchPosts()])
  .then((results) => {
    console.log("User Data: ", results[0]);
    console.log("User Posts: ", results[1]);
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });

// ----------------------------------------------------
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

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0)
      reject(new AggregateError("No promises were provided"));

    let rejections = [];
    let rejectedCount = 0;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          rejections[idx] = err;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(
              new AggregateError(rejections, "All promises were rejected")
            );
          }
        });
    });
  });
};

Promise.myAny([resolveQuickly(), resolveSlowly(), rejectFast(), rejectSlowly()])
  .then((response) => console.log(response))
  .catch((err) => err.errors.forEach((error) => console.log(error)));

// ----------------------------------------------------------------------------

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0)
      throw new TypeError("Cannot perform Promise.race on an empty array");

    promises.forEach((promise) =>
      Promise.resolve(promise).then(resolve).catch(reject)
    );
  });
};

Promise.myRace([promise1, promise2])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
