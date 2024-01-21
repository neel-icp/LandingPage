import React, { useState } from 'react';
import './HorizontalMenu.css';

function HorizontalMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleButtonClick = () => {
        window.location.href = 'https://raydium.io/swap/?inputCurrency=sol&outputCurrency=Abam1vB9kSXEGA9N7pPifuXwe2xVuqetWBDQDrrvQ43e&inputAmount=0.230381&outputAmount=742451.810446&fixed=in';
    };

    return (
        <nav className="horizontalMenu">
            <button className="menuToggle" onClick={handleMenuToggle}>
                {/* Icon for Menu Toggle, use an SVG or character like ☰ */}
                Menu
            </button>
            <div className={`menuItemsContainer ${isMenuOpen ? 'open' : ''}`}>
                <a href="#about" className="menuItem">About</a>
                <a href="#services" className="menuItem">MIAnomics</a>
                <a href="#contact" className="menuItem">Roadmap</a>
            </div>
            <button className="menuButton" onClick={handleButtonClick}>Buy $MIA</button>
        </nav>
    );
}

export default HorizontalMenu;
