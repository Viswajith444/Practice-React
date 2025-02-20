// let p =  new Promise( resolve => setTimeout(_ =>{
//   console.log("inside Promise");
//   resolve();
// }, 1000));

let p = new Promise( resolve => {
  resolve(1);
})

function pauseAsync(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

function pause(delay){
  let start = Date.now();
  while(Date.now() - start < delay) {}

}

async function fn1(res) {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      await pauseAsync(3000);
      // pause(3000);
    }
    console.log("fn1: " + i);
  }
  res();
}

async function fn2(res) {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      await pauseAsync(2000);
      // pause(10000);
    }
    console.log("fn2= " + i);
  }
  // setTimeout(() => res(), 2000);
  res();
}

async function holy() {
  let t1 = new Promise(fn1);
  let t2 = new Promise(fn2);
  return await Promise.all([t1, t2]);
}

holy();



// console.log(t1);

// async function holy(){
//   let t1 = new Promise(fn1);

//   let t2 = new Promise(fn2);
//   return await Promise.all([t1,t2]);
// }

console.log(p);
console.log("here");
// console.log(p.then( res => res()));
// console.log(p.resolve());
// console.log(p.then( res => console.log("hello there")));
// console.log(holy().then(res => console.log(res)));
// console.log(holy());



// console.log(Promise.resolve());

// async function fn(){
  //   return Promise.all();
  // }

  // console.log(fn());

//  let a = p
  // .then(_ => console.log("Hello There"));
  // .catch(_ => console.log("Nope"));

// console.log(a);