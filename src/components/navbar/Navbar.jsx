import React, { useState } from "react";
import "../../styles/Navbar.css";
import TMLogo from "../../images/task_logo.jpg";
import NavbarLink from "./NavbarLink";
import { FiHome, FiUser, FiBarChart, FiFileText } from "react-icons/fi";
import {
  MdBusiness,
  MdLocalOffer,
  MdDescription,
  MdEuro,
} from "react-icons/md";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav>
      <img src={TMLogo} alt="task_logo" />
      <div>
        <ul className={activeMenu === "menu" ? "visible" : "hidden"}>
          <h4 onClick={() => toggleMenu("menu")}>menu</h4>
          <li>
            <NavbarLink to="/" icon={FiHome} label="home" />
          </li>
          <li>
            <NavbarLink to="/login" icon={FiUser} label="login" />
          </li>
        </ul>
        <ul className={activeMenu === "form" ? "visible" : "hidden"}>
          <h4 onClick={() => toggleMenu("form")}>form</h4>
          <li>
            <NavbarLink to="/ditte" icon={MdBusiness} label="Ditte" />
          </li>
          <li>
            <NavbarLink to="/cig" icon={MdLocalOffer} label="CIG" />
          </li>
          <li>
            <NavbarLink to="/ca" icon={MdDescription} label="CA" />
          </li>
          <li>
            <NavbarLink to="/sal" icon={MdEuro} label="SAL" />
          </li>
        </ul>
        <ul className={activeMenu === "utility" ? "visible" : "hidden"}>
          <h4 onClick={() => toggleMenu("utility")}>utility</h4>
          <li>
            <NavbarLink to="/dashboard" icon={FiBarChart} label="dashboard" />
          </li>
          <li>
            <NavbarLink to="/verbali" icon={FiFileText} label="verbali" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
