import React from 'react';
import './Header.css';

function Header({ setCurrentView }) {
  return (
    <div>
      <header className="header">
        <span className="banner" />
        <div className="header-content">
        <button className="logo">Some Social Media Site</button>
        <nav>
            <button className="link" onClick={() => {setCurrentView('edit') }}>Edit My Profile</button>
            <button className="link"  onClick={() => {setCurrentView('browse') }}>Browse for Friends</button>
        </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
