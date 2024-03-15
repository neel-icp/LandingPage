import React from 'react';
import './App.css';
import Navbar from './Navbar'; // Import the Navbar component
import About from './About'; // Import the About component
import FAQ from './FAQ'; // Import the FAQ component
import Hero from './Hero'; // Import the Hero component
import Tokenomics from './Tokenomics'; // Import the Tokenomics component
import Socials from './Socials'; // Import the Socials component
import Roadmap from './Roadmap';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Include the Navbar */}
      <Hero /> {/* Include the Hero component */}
      <About /> {/* Include the About component */}
      <Tokenomics /> {/* Include the Tokenomics component */}
      <FAQ /> {/* Include the FAQ component */}
      <Roadmap/>
      <Socials /> {/* Include the Socials component */}
    </div>
  );
}

export default App;
