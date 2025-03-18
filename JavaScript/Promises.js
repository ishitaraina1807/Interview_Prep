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


//*****************Promise Pollyfill!!!!!!finalllyyyy */
function Mypromise (executor) {
  let onResolve;
  let onReject;
  let isFullfilled = false;
  let isRejected = false;
  let isCalled = false;
  let value;

  //resolve(4)

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if(typeof onResolve === "function"){
        onResolve(val);
        isCalled=true;
    }
  }
  function reject(val){
    isRejected = true;
    value = val;
    if(typeof onReject === "function"){
        onReject(val);
        isCalled=true;
    }
  }

  this.then = function (callback) {
   onResolve = callback;
   if(isFullfilled && !isCalled){
    isCalled = true;
    onResolve(value);
   }
   return this;
  }
  this.catch = function (callback){
    onReject = callback;
    if(isRejected && !isCalled){
        isCalled = true;
        onReject(value);
    }
    return this;
  }
  
  try{
    executor(resolve, reject);
   } catch (err) {
    reject(err);
   }
}

const p1 = new Mypromise ((resolve,reject) => {
 setTimeout(() => {
    resolve(4)
 }, 3000)
})

p1.then((val) => {
    console.log(val);
    return 5;
}).then((val2) => {
    console.log("chained value", val2)
})
.catch((err) => {
    console.error(err)
})
