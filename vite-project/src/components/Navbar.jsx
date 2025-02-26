import PropTypes from "prop-types";
import {Link} from "react-router-dom"
// import { useState } from "react";
import "./styles/navbar.css";

function DropdownMenu({ items }) {
  let menu = [];
  for (let i in items) {
    let t = (
      <li key={i}>
        <a href={items[i].ref}>{items[i].text}</a>
      </li>
    );
    menu.push(t);
  }

  return <ul className="dropdown-menu">{menu}</ul>;
}

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

function Navbar({ items, last_nth, thickness }) {
  let n = items.length;
  // const [hoveredIndex, setHoveredIndex] = useState(null); // Track which item is hovered

  let nav_items = items.map((ele, i) => (
    <li key={i}>
      <Link to={ele.ref}> {ele.text} </Link>

      <DropdownMenu
        items={[
          { ref: "#", text: "Hello" },
          { ref: "#", text: "World" },
        ]}
      />
    </li>
  ));

  if (last_nth !== 0 && last_nth !== undefined && last_nth < n) {
    let obj = items[n - last_nth];
    nav_items[n - last_nth] = (
      <li key={n - last_nth} style={{ marginLeft: "auto" }}>
        <Link to={obj.ref}>{obj.text}</Link>
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
