// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";

function App() {
  // const [num, numfn] = useState(0);
  return (
    <main>
      <Navbar />
      <About />
    </main>
  );
}

export default App;
