import React from 'react';
import TwitterIcon from './twitter.svg'; // Update the path
import TelegramIcon from './telegram.svg'; // Update the path
import './Socials.css';
function Socials() {
  return (
    <section id="Socials">
      <h2>Join Us</h2>
      <div className="social-links">
      <a href="https://twitter.com/LoveMiaSol" target="_blank" rel="noopener noreferrer" className="twitter-icon">
  <img src={TwitterIcon} alt="Twitter" />
</a>

        <a href="https://t.me/lovemiasol" target="_blank" rel="noopener noreferrer">
          <img src={TelegramIcon} alt="Telegram" />
        </a>
        {/* Add other social media links similarly */}
      </div>
    </section>
  );
}

export default Socials;

