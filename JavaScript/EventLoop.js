console.log("Start");

// A setTimeout with 0ms delay (macro-task)
setTimeout(() => {
  console.log("This will never run!");
}, 0);

// Function to flood microtasks queue
function starveEventLoop() {
  Promise.resolve().then(() => {
    // starveEventLoop();  
  });
}

starveEventLoop();

console.log("End");

