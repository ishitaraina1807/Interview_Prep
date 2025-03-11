// Promise.resolve(1)
// .then((val) => {
//   console.log(val)
//   return val + 1
// }).then((val) => {
//   console.log(val)
// }).then((val) => {
//   console.log(val)
//   return Promise.resolve(3)
//     .then((val) => {
//       console.log(val)
//     })
// }).then((val) => {
//   console.log(val)
//   return Promise.reject(4)
// }).catch((val) => {
//   console.log(val)
//   return 5
// }).finally((val) => {
//   console.log(val)
//   return 10
// }).then((val) => {
//   console.log(val)
//   return 99
// }) .then((val) => {
//     console.log(val)
// })

// const promise = new Promise((resolve, reject) => {
//     resolve("Success!");
// });

// promise
//     .finally(() => {
//         console.log("Cleaning up...");  // This runs regardless of resolve or reject
//         return "cleaning up"
//     })
//     .then(value => {
//         console.log("Then:", value);  // Output: Then: Success!
//     })
//     .catch(error => {
//         console.log("Catch:", error);
//     });


