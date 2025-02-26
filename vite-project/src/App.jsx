import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Navbar from "./components/navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Effect from "./components/Effect.jsx";

// import "./App.css";

function App() {
  //should write Navbar info here

  // child routing
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/Effect",
          element: <Effect />,
        },
      ],
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
      element: (
        <>
          <Home />
          <br />
          <Effect />
        </>
      ),
    },
  ]);

  return (
    <main className="mt-[var(--navbar-height)]">
      {/* <Navbar items={nav_items} last_nth={1} /> */}
      <RouterProvider router={routes} />
    </main>
  );
}

export default App;
