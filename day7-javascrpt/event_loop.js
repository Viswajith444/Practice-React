console.log("Synchronous 1");

let timeid = setTimeout( _ => {
    console.log("Set Timeout 2");
}, 0);

new Promise(_ => console.log("inside Promise 3"));

Promise.resolve().then(_ => console.log("Promise 4"));

console.log("Synchronous 5");

// Output:

// Synchronous 1
// Synchronous 4
// Promise 3
// Set Timeout 2