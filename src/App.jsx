import React from 'react';
import Navbar from './components/Navbar.jsx';
import Herosection from './components/herosection.jsx';
import bgvideo from './assets/marvel.mp4';
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="relative min-h-screen w-full -z-10 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <Navbar />
        <Herosection />
      </div>
    </div>
  );
};

export default App;