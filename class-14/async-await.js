const p = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise Resolved");
  }, 10000);
});

async function handlePromise() {
  // JS engine waits for the promise to get resovlved and then moves forward.

  console.log("Scaler"); // this line will be executed immediately.

  const response = await p;
  console.log(response); // Promise Resolved - After 10 seconds from start
  console.log("Create Impact 1"); // Create Impact 1

  const response1 = await p;
  console.log(response1); // Promise Resolved - After 10 seconds from start
  console.log("Create Impact 2"); // Create Impact 2
}

// handlePromise();
// -------------------------------------------------

const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise 1 Resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise 2 Resolved");
  }, 10000);
});

async function handlePromises() {
  console.log("Scaler"); // this line will be executed immediately.

  const response1 = await p1; // We waited for ~5 seconds
  console.log(response1);
  console.log("Create Impact 1");

  const response2 = await p2;
  console.log(response2, new Date().getTime());
  console.log("Create Impact 2");
}

handlePromises();
