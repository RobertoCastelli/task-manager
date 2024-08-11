// Header.js
import React from "react";
import "../styles/Header.css";
import Navbar from "../components/navbar/Navbar";
import TMLogo from "../images/task_logo.jpg";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={TMLogo} alt="task_logo" />
      </div>
      <div className="header-navbar">
        <Navbar />
      </div>
      <div className="header-title">
        <h1>task manager</h1>
        <div className="header-subtitle">sistema di gestione contratti</div>
      </div>
    </header>
  );
};

export default Header;
