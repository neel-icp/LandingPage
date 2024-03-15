import React from 'react';
import './Roadmap.css'; // Ensure this path matches your file structure
import GitButtonLogo from './GitBook.jpg';
// Define a Roadmap component
function Roadmap() {
    const handleGitButtonClick = () => {
        window.location.href = 'https://mia-crush-of-myro.gitbook.io/mia/roadmap';
    };
  // Roadmap phases data
  const phases = [
    {
      id: 1,
      title: "Phase 1 (Q2 2023)",
      heading:"MiaSniffer bot 👅",
      description: " - A sophisticated bot designed to sniff out the best opportunities.",
      active: true, // This can be used to toggle visibility or styles
    },
    {
      id: 2,
      title: "Phase 2 (Q3 2023)",
      heading:"CopyMia bot Upgrade",
      description: " - Enhancing the MiaSniffer bot for superior performance.",
      active: false,
    },
    {
      id: 3,
      title: "Phase 3 - (Q4 2023)",
      heading:"MammaMia NFT",
      description: " - Exclusive NFT collection celebrating the Mia ecosystem.",
      active: false,
    },
    {
      id: 4,
      title: "Phase 4 - (Q4 2023)",
      heading:"MIArena Game Studio",
      description: " - Launching a game studio to develop engaging games within the Mia ecosystem.",
      active: false,
    }
  ];

  return (
    <section id="about">
      <h2>Roadmap $MIA</h2>
      <p>MIA is a meme coin with utility - Bot sniffer/sniper, NFT artwork, games, etc.<br/>
      Join in the fun as we follow the whimsical adventures of $MYRO and his quest for love.</p>
      <div className="roadmap-phases">
        {phases.map(phase => (
          <div key={phase.id} className={`phase ${phase.active ? 'active' : ''}`}>
            <h3>{phase.title}</h3>
            <p>{phase.heading}</p>
            
          </div>
          
        ))}
      </div>
      <button className="GitmenuButton" onClick={handleGitButtonClick}>
                <img src={GitButtonLogo} alt="New Button Logo" className="buttonLogo" />
                Read More
            </button>
    </section>
  );
}

export default Roadmap;
