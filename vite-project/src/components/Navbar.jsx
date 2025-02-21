import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/navbar.css";

function DropdownMenu() {
  return (
    <ul className="dropdown-menu">
      <li>
        <a href="#">Hello</a>
      </li>
      <li>
        <a href="#">World</a>
      </li>
    </ul>
  );
}

function Navbar({ items, last_nth, thickness }) {
  let n = items.length;
  // const [hoveredIndex, setHoveredIndex] = useState(null); // Track which item is hovered

  let nav_items = items.map((ele, i) => (
    <li
      key={i}
      // onMouseEnter={() => setHoveredIndex(i)}
      // onMouseLeave={() => setHoveredIndex(null)}
    >
      <a href={ele.ref}> {ele.text} </a>

      {/* {hoveredIndex === i && <DropdownMenu />} Only render dropdown on hover */}
      <DropdownMenu />
    </li>
  ));

  if (last_nth !== 0 && last_nth !== undefined && last_nth < n) {
    let obj = items[n - last_nth];
    nav_items[n - last_nth] = (
      <li key={n - last_nth} style={{ marginLeft: "auto" }}>
        <a href={obj.ref}>{obj.text}</a>
      </li>
    );
  }

  return (
    <nav
      className="navbar"
      style={thickness ? { height: `${thickness}rem` } : {}}
    >
      <ul>{nav_items}</ul>
    </nav>
  );
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,

  last_nth: PropTypes.number,
  thickness: PropTypes.number,
};

export default Navbar;
