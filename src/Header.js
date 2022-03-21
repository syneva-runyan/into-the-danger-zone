import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "normal" : "bold",
      backgroundColor: isActive ? "#f1cc11" : "white", 
    };
  };
  return (
    <div>
      <header className="header">
        <span className="banner" />
        <div className="header-content">
        <button className="logo">Some Social Media Site</button>
        <nav>
            <NavLink className="link" style={navLinkStyles} to="/edit">Edit My Profile</NavLink>
            <NavLink className="link" style={navLinkStyles} to="/">Browse for Friends</NavLink>
        </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
