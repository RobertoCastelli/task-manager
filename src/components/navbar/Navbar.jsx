import React from "react";
import "../../styles/Navbar.css";
import TMLogo from "../../images/task_logo.jpg";
import { FiHome, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={TMLogo} alt="task_logo" />
      </div>

      <ul className="navbar-ul">
        <li className="navbar-li">
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <FiHome /> Home
          </NavLink>
        </li>
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
