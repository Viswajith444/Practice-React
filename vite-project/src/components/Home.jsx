import Navbar from "./navbar";
// import About from ".components/About";

function Home() {
  let nav_items = [
    { ref: "/", text: "Home" },
    { ref: "/About", text: "About" },
    { ref: "/Effect", text: "Effect" },
    { ref: "/About", text: "About" },
  ];

  return (
    <>
      <Navbar items={nav_items} last_nth={1} />
      {/* <About /> */}
    </>
  );
}

export default Home;
