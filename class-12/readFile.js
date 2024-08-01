const fs = require("fs"); // IGNORE FOR NOW

console.log("Before");

// Read File Synchronously (blocking)
// let data1 = fs.readFileSync("./files/f1.txt", "utf-8");
// console.log("Able to read the contents of the file synchronously");

// Read File Asynchronously (non-blocking)
// fs.readFile("./files/f1.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.error("Error =>", err);
//     return;
//   }
//   console.log("File 1:", data);
// });

// fs.readFile("./files/f2.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.error("Error =>", err);
//     return;
//   }
//   console.log("File 2:", data);
// });

// fs.readFile("./files/f3.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.error("Error =>", err);
//     return;
//   }
//   console.log("File 3:", data);
// });

console.log("After");

// Serial Async Operation (f1 -> f2 -> f3)
fs.readFile("./files/f1.txt", "utf-8", function (err, data) {
  if (err) {
    console.error("Error =>", err);
    return;
  }
  console.log("File 1:", data);

  fs.readFile("./files/f2.txt", "utf-8", function (err, data) {
    if (err) {
      console.error("Error =>", err);
      return;
    }
    console.log("File 2:", data);

    fs.readFile("./files/f3.txt", "utf-8", function (err, data) {
      if (err) {
        console.error("Error =>", err);
        return;
      }
      console.log("File 3:", data);
    });
  });
});
