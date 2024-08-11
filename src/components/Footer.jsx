// Footer.js
import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiNetlify, SiFirebase } from "react-icons/si";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">Task Manager - AGIS @ 2024 v.4.08</div>
      <div className="footer-icons">
        <FaReact />
        <FaGithub />
        <SiNetlify />
        <SiFirebase />
      </div>
    </footer>
  );
};

export default Footer;
