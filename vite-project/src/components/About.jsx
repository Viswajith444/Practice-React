import { useState } from "react";

function About() {
  var [num, setnum] = useState(0);
  return (
    <div style={{ margin: "0 0 0 15px" }}>
      <h1>About</h1>
      <h2>state inital value is {0}</h2>
      <button
        onClick={() => setnum(num -1 )}
      >
        -
      </button>
      <h3>updating state: {num}</h3>
      <button onClick={() => {
          if (num === 5) {
            setnum(100);
          } else {
            setnum(num + 1);
          }
        }}>+</button>
      <br />
      <button onClick={() => setnum(0)}>reset</button>
    </div>
  );
}
export default About;
