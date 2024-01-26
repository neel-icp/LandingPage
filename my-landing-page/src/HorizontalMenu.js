import React, { useState } from 'react';
import './HorizontalMenu.css';
// Importing logos
import buyMiaLogo from './Raydium.png'; // Replace with the actual path to your image
import newButtonLogo from './Jupiter.png'; // Replace with the actual path to your image

function HorizontalMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleBuyMiaClick = () => {
        window.location.href = 'https://raydium.io/swap/?inputCurrency=sol&outputCurrency=Abam1vB9kSXEGA9N7pPifuXwe2xVuqetWBDQDrrvQ43e&inputAmount=0.230381&outputAmount=742451.810446&fixed=in';
    };

    const handleNewButtonClick = () => {
        window.location.href = 'https://jup.ag/swap/USDC-MIA_Abam1vB9kSXEGA9N7pPifuXwe2xVuqetWBDQDrrvQ43e';
    };

    return (
        <nav className="horizontalMenu">
            <button className="menuToggle" onClick={handleMenuToggle}>
                Menu
            </button>
            <div className={`menuItemsContainer ${isMenuOpen ? 'open' : ''}`}>
                <a href="#about" className="menuItem">About</a>
                <a href="#services" className="menuItem">MIAnomics</a>
                <a href="#contact" className="menuItem">Roadmap</a>
            </div>
            <div className="buttonsContainer">
            <button className="menuButton" onClick={handleBuyMiaClick}>
                <img src={buyMiaLogo} alt="Buy MIA Logo" className="buttonLogo" />
                Buy $MIA
            </button>
            <button className="NewmenuButton" onClick={handleNewButtonClick}>
                <img src={newButtonLogo} alt="New Button Logo" className="buttonLogo" />
                Buy $MIA
            </button>
        </div>
        </nav>
    );
}

export default HorizontalMenu;
