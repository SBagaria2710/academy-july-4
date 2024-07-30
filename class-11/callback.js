// Functions are called first class citizens in JS
// 1. Functions can be assigned to variables
// 2. Functions can be passed as arguments to other functions
// 3. Functions can be returned from other functions

function printFullName(callback) {
  console.log("Scaler");
  callback();
}

function printLastName() {
  console.log("Academy");
}

printFullName(printLastName);

// -------------

function printDetails(scaler, academy) {
  scaler(academy);
}

function printName(cb) {
  console.log("Scaler Academy");
  cb();
}

function printBatchName() {
  console.log("July Morning FullStack Batch");
}

printDetails(printName, printBatchName);
