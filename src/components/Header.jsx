// Header.js
import React from "react";
import Navbar from "./navbar/Navbar";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Navbar />
      <h1>task manager</h1>
    </header>
  );
};

export default Header;
