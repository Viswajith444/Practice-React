import { useState } from "react";

function Effect() {
  //   const typingArea = {
  //     padding: "20vh 10%",
  //     marginLeft: "20px",
  //   };

  const [typeBody, setText] = useState("");

  console.log("render outside effect");

  function dp(obj) {
    let res = [];

    for (let key in obj) {
      res.push(
        <span key={key} style={{ paddingRight: "15px" }}>
          {key !== " " ? key : "💨"}:{obj[key]}{" "}
        </span>,
      );
    }

    return res;
  }

  var alphaCount = (str) => {
    let count = {};

    for (let char of str) {
      let letter = char;
      count[letter] = (count[letter] || 0) + 1;
    }
    return dp(count);
  };

  return (
    <>
      <h2>Type here</h2>
      <div className="bg-linear-135 max-w-1/2 from-cyan-400 from-10% to-blue-500 to-80% w-max">
        <textarea
          rows="4"
          cols="50"
          value={typeBody} // Controlled by React state
          onChange={(e) => setText(() => e.target.value)} // Updates state on input change
          // onKeyDown={(e) => {
          //   console.log(e.key);
          //   console.log(e);
          // }}
          placeholder="Type your message..."

          // className="w-max"
        />
        {/* <h1>{alphaCount(typeBody)}</h1> */}
        <h1>{alphaCount(typeBody)}</h1>
      </div>
    </>
  );
}

export default Effect;
