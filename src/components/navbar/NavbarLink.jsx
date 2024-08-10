import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, icon: Icon, label }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      <Icon /> {label}
    </NavLink>
  );
};

export default NavbarLink;
