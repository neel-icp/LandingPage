import React from 'react';
import './Navbar.css';
import logo from './logo.png'; // Assuming logo is imported
import HorizontalMenu from './HorizontalMenu';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        
      </div>
      <HorizontalMenu /> {/* This will now be on the right */}
    </nav>
  );
}

export default Navbar;
