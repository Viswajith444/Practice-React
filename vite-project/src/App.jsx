import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Navbar from "./components/navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Effect from "./components/Effect.jsx";

// import "./App.css";

function App() {
  //should write Navbar info here

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
          <h1 className="text-4xl font-bold">Welcome</h1>
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Home />
          <About />
        </>
      ),
    },
    {
      path: "/Effect",
      element:(
        <>
          <Home />
          <br />
          <Effect />
        </>
      )
    }
  ]);

  return (
    <main>
      {/* <Navbar items={nav_items} last_nth={1} /> */}
      <RouterProvider router={routes} />

      <p className="h-30 w-1/2 bg-green-400 font-bold text-red-700">
        Hello world
      </p>
    </main>
  );
}

export default App;
