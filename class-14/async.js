const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});

async function fetchData() {
  return p;
}

const dataPromise = fetchData();
console.log(dataPromise); // Promise { <pending> }

dataPromise.then((data) => console.log(data)); // Promise Resolved
