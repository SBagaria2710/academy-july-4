// const p = new Promise((resolve, reject) => {
//   resolve("Promise Resolved");
// });

// async function handlePromise() {
//   const response = await p;
//   console.log(response);
// }

// function fetchData() {
//   p.then((response) => console.log(response));
// }

// fetchData(); // Promise Resolved
// handlePromise(); // Promise Resolved

// ------------------------------------------
const p = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise Resolved");
  }, 5000);
});

async function handlePromise() {
  console.log("Scaler"); // this line will be executed immediately.

  const response = await p; // JS engine waits for the promise to get resovlved and then moves forward.

  console.log(response);
  console.log("Create Impact");
}

handlePromise(); // Promise Resolved

function fetchData() {
  // JS engine will not wait for the promise to resolve
  p.then((response) => console.log(response));
  console.log("Create Impact");
}

// fetchData();
