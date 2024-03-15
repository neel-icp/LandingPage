import React from 'react';
import './Hero.css';

import secondaryImg from './hero.png'; // Update with the correct path

function Hero() {
    const handleBuyMiaClick = () => {
      window.location.href = 'https://raydium.io/swap/?inputCurrency=sol&outputCurrency=Abam1vB9kSXEGA9N7pPifuXwe2xVuqetWBDQDrrvQ43e&inputAmount=0.230381&outputAmount=742451.810446&fixed=in';
    };

    const handleNewButtonClick = () => {
      window.location.href = 'https://jup.ag/swap/USDC-MIA_Abam1vB9kSXEGA9N7pPifuXwe2xVuqetWBDQDrrvQ43e'; // Replace with your second URL
    };

    return (
      <div className="container">
        <section id="hero" className="hero">
          <div className="hero-content">
            <h2><span className="mia-text">MEET $MIA</span></h2>
            <p><br/> MIA is the only crush of $MYRO, <br/>the dog of Solana Co-Founder Mr.Raj Gokal. </p>
        {/*    <button onClick={handleBuyMiaClick} className="hero-button">BUY $MIA on Raydium</button> */}
            <button onClick={handleNewButtonClick} className="hero-button">BUY $MIA on Jupiter</button> {/* New button */}
          </div>
          <img src={secondaryImg} alt="Mia" className="hero-secondary-image"/>
        </section>
      </div>
    );
}

export default Hero;
