import React from "react";
import "../styles/Navbar.css";
import TMLogo from "../images/task_logo.jpg";
import { FiHome, FiUser, FiBarChart, FiFileText } from "react-icons/fi";
import {
  MdBusiness,
  MdLocalOffer,
  MdDescription,
  MdEuro,
} from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <img src={TMLogo} alt="task_logo" />

      <ul>
        <h3>menu</h3>
        <li>
          <FiHome /> home
        </li>
        <li>
          <FiUser /> login
        </li>
        <li>
          <FiBarChart /> dashboard
        </li>
        <li>
          <FiFileText /> verbali
        </li>
      </ul>
      <ul>
        <h3>form</h3>
        <li>
          <MdBusiness /> anagrafica Ditte
        </li>
        <li>
          <MdLocalOffer /> CIG
        </li>
        <li>
          <MdDescription /> CA
        </li>
        <li>
          <MdEuro /> SAL
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
