//Write a function fetchData that returns a promise. 
// The promise should resolve with the string "Data fetched successfully" 
// after 2 seconds if a random number is even, or reject with "Failed to fetch data" if odd.

// const data = false;

// const fetchData = function (data) {
//   const pr = new Promise(function(resolve, reject) {
//     if(data){
//      setTimeout(function() {
//       resolve("Data fetched successfully")
//      }, 2000)
//     }
//     else{
//      const err = new Error("data not valid");
//      reject(err)
//     }
//  })
//  return pr; 
// }

// fetchData(data)
// .then(function (message){
//   console.log(message);
// })
// .catch(function(error) {
//   console.log(error);
// })


// Write a function called checkStock that returns a promise.

// This function takes an item name as a parameter (like "laptop" or "phone").
// The promise should resolve with the message "Item <item> is in stock!" after 1 second if the item is found in a pre-defined array ["laptop", "phone", "tablet"].
// If the item is not found, the promise should reject with the message "Item <item> is out of stock!".


// const items = {
//   "phone" : 3,
//   "laptop" : 0
// }
// const userSelectedItem = "laptop"

// const checkStock = function (items, userSelectedItem) {
//   const pr = new Promise(function (resolve, reject) {
//     if(items[userSelectedItem] > 0){
//       setTimeout(function(){
//         resolve("item " + userSelectedItem + " is in the stock!");
//       }, 1000)
//     }
//     else{
//       reject(userSelectedItem + " is out of stock!")
//     }
//   })
//   return pr
// }

// checkStock(items, userSelectedItem)
// .then(function(message){
//   console.log(message);
// })
// .catch(function(error) {
//   console.log(error);
// })


// Task:
// Write a function processOrder that returns a promise to simulate an online shopping order process. The function should:

// Check if the item is in stock (takes 1 second).
// Process the payment if the item is in stock (takes 2 seconds).
// Ship the item if the payment is successful (takes 1.5 seconds).
// Use promise chaining to complete these tasks in order.
// Requirements:

// If the item is not in stock, reject with "Item out of stock!".
// If payment fails, reject with "Payment failed!".
// If everything is successful, resolve with "Order shipped!".

// const items = {
//   "phone": 3,
//   "laptop": 0
// }
// const userSelectedItem = "laptop"

// const processOrder = function (items, userSelectedItem) {
//   const pr = new Promise(function (resolve, reject) {
//     if (items[userSelectedItem] > 0) {
//       setTimeout(function () {
//         resolve("Item " + userSelectedItem + " is in stock!");
//       }, 1000)
//     } else {
//       reject("Item " + userSelectedItem + " is not in stock!");
//     }
//   });
//   return pr;
// }

// const processPayment = function() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("Payment is successful");
//     }, 2000);
//   });
// }

// const handleShipping = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Order shipped!");
//     }, 1500);
//   });
// }

// processOrder(items, userSelectedItem)
//   .then(function(message) {
//     console.log(message);
//     return processPayment();
//   })
//   .then(function(message) {
//     console.log(message);
//     return handleShipping();
//   })
//   .then(function(message) {  
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//----------Lets practice promise.all, promise.allSettled, promise.race and promise.any

//promise 1 
const p1 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    reject("Promise 1 resolved");
  }, 2000)
})

//promise 2
const p2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    reject("Promise 2 resolved");
  }, 3000)
})

//prmose 3 

const p3 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    reject("Promise 3 rejected!");
  }, 2000)
})

Promise.any([p1,p2,p3])
.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.log(error);
})
console.log("Promise.all is called"); //very interesting to the aggregated error for promise.any