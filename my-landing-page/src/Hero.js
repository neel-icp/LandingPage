import React from 'react';
import './Hero.css';

import secondaryImg from './hero.png'; // Update with the correct path

function Hero() {
    const handleClick = () => {
      // Redirect to your desired URL
      window.location.href = '';
    };
    return (
      <div className="container">
        <section id="hero" className="hero">
        <div className="hero-content">
    <h2><span className="mia-text">MEET $MIA</span> </h2>
    <p><br/> MIA is the crush of the cute doge Raj Gokal,<br/> one and only $MYRO  </p>
{/* Button below the text */}
<button onClick={handleClick} className="hero-button">BUY $MIA</button>
        </div>
 <img src={secondaryImg} alt="Mia" className="hero-secondary-image"/>
        </section>
      </div>
    );
  }
  

export default Hero;
