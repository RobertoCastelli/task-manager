import React from "react";
import "../styles/HomePage.css";
import { FiBarChart, FiPrinter, FiPenTool } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineTable } from "react-icons/ai";
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
        <div className="homepage-subtitle">
          <FiPenTool />
          <h4>registrazione</h4>
        </div>
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

      <div className="homepage-manage">
        <div className="homepage-subtitle">
          <GoGear />
          <h4>gestione</h4>
        </div>
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
      </div>

      <div className="homepage-control">
        <div className="homepage-subtitle">
          <FaRegEye />
          <h4>controllo</h4>
        </div>

        <div className="homepage-prospetti">
          <button>
            <AiOutlineTable />
            Prospetti
          </button>
        </div>
        <div className="homepage-dashboard">
          <button>
            <FiBarChart />
            Dashboard
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
