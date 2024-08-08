import React, { useContext } from "react";
import Navbar from "./Navbar";
import { MyContext } from "../context/Context";

const Header = () => {
  const { database } = useContext(MyContext);
  return (
    <header>
      <Navbar />

      {database.map((doc) => (
        <div key={doc.id}>{doc.ditta}</div>
      ))}
    </header>
  );
};

export default Header;
