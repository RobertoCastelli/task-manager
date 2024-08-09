// Footer.js
import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiNetlify, SiFirebase } from "react-icons/si";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>Task Manager - AGIS @ 2024 v.1.08</div>
      <div>
        <FaReact />
        <FaGithub />
        <SiNetlify />
        <SiFirebase />
      </div>
    </footer>
  );
};

export default Footer;
