import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import { resetProfileInfo } from './api';

function Header({ setProfileInfo }) {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      backgroundColor: isActive ? "#fff" : "#f1cc11", 
    };
  };
  const onClick = async () => {
    const { updatedProfiles } = await resetProfileInfo();
    setProfileInfo(updatedProfiles);
  }
  return (
    <div>
      <header className="header">
        <span className="banner" />
        <div className="header-content">
        <button className="logo">Some Social Media Site</button>
        <nav>
            <NavLink className="link" style={navLinkStyles} to="/edit">Edit My Profile</NavLink>
            <NavLink className="link" style={navLinkStyles} to="/">Browse for Friends</NavLink>
            <button onClick={onClick} className="link">Reset My Profile Information</button>
        </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
