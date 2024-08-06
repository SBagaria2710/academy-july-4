function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for coffee placed");
    } else {
      reject("Order for coffee not placed");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise(function (resolve) {
    resolve(`${orderPlaced} and served`);
  });
}

function generateBill(processOrder) {
  return new Promise(function (resolve) {
    resolve(`${processOrder} and bill generated`);
  });
}

// Async/Await

async function serveCoffee(beverage) {
  try {
    let orderStatus = await placeOrder(beverage);
    let orderIsProcessed = await processOrder(orderStatus);
    let bill = await generateBill(orderIsProcessed);
    console.log(bill);
  } catch (err) {
    console.log(err);
  }
}

const beverages = ["coffee", "lemonade", "tea"];
const chosenBeverage = beverages[Math.floor(Math.random() * beverages.length)];
serveCoffee(chosenBeverage);

// Promises

// placeOrder("lemonade")
//   .then(function (orderStatus) {
//     return orderStatus;
//   })
//   .then(function (orderStatus) {
//     let orderIsProsessed = processOrder(orderStatus);
//     return orderIsProsessed;
//   })
//   .then(function (processedOrder) {
//     let bill = generateBill(processedOrder);
//     return bill;
//   })
//   .then(function (sentence) {
//     console.log(sentence);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
