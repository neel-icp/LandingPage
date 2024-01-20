import React, { useState } from 'react';
import './DropdownMenu.css';
import MenuIcon from './menu.svg'; // Ensure you have imported the SVG correctly

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        <img src={MenuIcon} alt="Menu" style={{ width: '50px', height: '50px' }} />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#about">About</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#faq">FAQ</a>
          <a href="#socials">Socials</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
