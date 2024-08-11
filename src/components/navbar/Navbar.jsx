import React from "react";
import "../../styles/Navbar.css";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-ul">
        <li className="navbar-li">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <FiUser /> Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
