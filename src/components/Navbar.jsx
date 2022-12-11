import React from "react";
import NavIcon from "../assets/navIcon.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={NavIcon} alt="navbar icon" className="navbar-icon" />
        <p className="navbar-title">my travel journal</p>
      </div>
    </nav>
  );
};

export default Navbar;
