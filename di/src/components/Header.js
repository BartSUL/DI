import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Home page</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/drawit"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Draw it!</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
