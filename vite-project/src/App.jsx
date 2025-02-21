import Navbar from "./components/navbar.jsx";
import About from "./components/About.jsx";
import Effect from "./components/Effect.jsx";

function App() {
  // const [num, numfn] = useState(0);
  let nav_items = [
    { ref: "#", text: "Home" },
    { ref: "#", text: "About" },
    { ref: "#", text: "About" },
    { ref: "#", text: "About" },
  ];

  return (
    <main>
      <Navbar items={nav_items} last_nth={1}/>
      <About />
      <Effect />
    </main>
  );
}

export default App;
