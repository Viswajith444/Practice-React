import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>

        <li>
          <a href="#">Donate</a>
        </li>
      </ul>
    </nav>
  );
}
