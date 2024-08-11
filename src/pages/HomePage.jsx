import React from "react";
import "../styles/HomePage.css";
import { FiBarChart, FiPrinter } from "react-icons/fi";
import {
  MdBusiness,
  MdOutlineLocalOffer,
  MdOutlineDescription,
  MdEuro,
} from "react-icons/md";

const HomePage = () => {
  return (
    <main className="homepage-container">
      <h3 className="homepage-title">homepage</h3>
      <div className="homepage-form">
        <div className="homepage-ditte">
          <button>
            <MdBusiness /> Ditte
          </button>
        </div>
        <div className="homepage-cig">
          <button>
            <MdOutlineLocalOffer /> CIG
          </button>
        </div>
        <div className="homepage-ca">
          <button>
            <MdOutlineDescription /> CA
          </button>
        </div>
      </div>

      <div className="homepage-utility">
        <div className="homepage-sal">
          <button>
            <MdEuro /> SAL
          </button>
        </div>
        <div className="homepage-verbali">
          <button>
            <FiPrinter /> Verbali
          </button>
        </div>
        <div className="homepage-dashboard">
          <button>
            <FiBarChart /> Dashboard
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
