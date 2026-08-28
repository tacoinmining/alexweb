import React, { useState } from 'react';
import StarfieldCanvas from './components/StarfieldCanvas';
import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlassCustomizerModal from './components/GlassCustomizerModal';
import { SPACE_FALLBACK_COLLECTIONS } from './data/spaceFallbackImages';

export default function App() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleNextBackground = () => {
    setCurrentBgIndex((prev) => (prev + 1) % SPACE_FALLBACK_COLLECTIONS.length);
  };

  const currentBg = SPACE_FALLBACK_COLLECTIONS[currentBgIndex];

  const handleExploreProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-purple-500/30 selection:text-cyan-200">
      
      {/* Dynamic Cosmic Background */}
      <CosmicBackground 
        currentBg={currentBg} 
        onNextBg={handleNextBackground} 
      />

      {/* Starfield & Meteor Canvas */}
      <StarfieldCanvas />

      {/* Navigation Bar */}
      <Navbar
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onNextBackground={handleNextBackground}
        currentBgTitle={currentBg.title}
      />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 space-y-12">
        <Hero onExploreProjects={handleExploreProjects} />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Glass Customizer Modal */}
      <GlassCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
      />

    </div>
  );
}
