import React, { useState } from "react";
import "../../styles/Navbar.css";
import TMLogo from "../../images/task_logo.jpg";
import NavbarLink from "./NavbarLink";
import { FiHome, FiUser, FiBarChart, FiPrinter } from "react-icons/fi";
import { TbReportSearch } from "react-icons/tb";

import {
  MdBusiness,
  MdOutlineLocalOffer,
  MdOutlineDescription,
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
          <h3 onClick={() => toggleMenu("menu")}>menu</h3>
          <li>
            <NavbarLink to="/" icon={FiHome} label="home" />
          </li>
          <li>
            <NavbarLink to="/login" icon={FiUser} label="login" />
          </li>
        </ul>
        <ul className={activeMenu === "form" ? "visible" : "hidden"}>
          <h3 onClick={() => toggleMenu("form")}>form</h3>
          <li>
            <NavbarLink to="/ditte" icon={MdBusiness} label="Ditte" />
          </li>
          <li>
            <NavbarLink to="/cig" icon={MdOutlineLocalOffer} label="CIG" />
          </li>
          <li>
            <NavbarLink to="/ca" icon={MdOutlineDescription} label="CA" />
          </li>
          <li>
            <NavbarLink to="/sal" icon={MdEuro} label="SAL" />
          </li>
        </ul>
        <ul className={activeMenu === "utility" ? "visible" : "hidden"}>
          <h3 onClick={() => toggleMenu("utility")}>utility</h3>
          <li>
            <NavbarLink to="/dashboard" icon={FiBarChart} label="dashboard" />
          </li>
          <li>
            <NavbarLink to="/verbali" icon={FiPrinter} label="verbali" />
          </li>
          <NavbarLink to="/reports" icon={TbReportSearch} label="reports" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
