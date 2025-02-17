
// Rewrite the above function using async/await. Create an async function that waits for the Promise to resolve and logs the message.
async function run() {
    // Your code here
    let p = await new Promise((resolve) =>{
      setTimeout(()=>{
        resolve("Promise resolved!");
      }, 2000)
    });

    return p;
  }

  run().then((message)=> {
    console.log(message);
  }); // Should log "Promise resolved!" after 2 seconds


  //Write an async function that fetches data from the following API and logs the result:
  //Use fetch and await to handle the asynchronous operation. Handle errors using try/catch.
  //https://jsonplaceholder.typicode.com/posts/1

  async function fetchPost() {
    // Your code here
   let p = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    try{
        if(!p.ok){
            throw new Error("Oops");
        }
        let user = await p.json();
        return user;
    }
    catch(error){
        console.log("lol");
    }

  }

  fetchPost(); // Should log the post data or an error message