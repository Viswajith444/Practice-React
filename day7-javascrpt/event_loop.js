console.log("Synchronous 1");

setTimeout( _ => console.log("Set Timeout 2"), 0);

Promise.resolve().then(_ => console.log("Promise 3"));

console.log("Synchronous 4");

// Output:

// Synchronous 1
// Synchronous 4
// Promise 3
// Set Timeout 2