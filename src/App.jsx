import React, { useState, useEffect } from 'react';
import StarfieldCanvas from './components/StarfieldCanvas';
import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlassCustomizerModal from './components/GlassCustomizerModal';
import NasaApodModal from './components/NasaApodModal';
import { SPACE_FALLBACK_COLLECTIONS } from './data/spaceFallbackImages';
import { fetchNasaApod } from './services/spaceApiService';
import { Sliders, Sparkles, Radio } from 'lucide-react';

export default function App() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [customBg, setCustomBg] = useState(null);
  const [nasaApod, setNasaApod] = useState(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isNasaModalOpen, setIsNasaModalOpen] = useState(false);

  // Fetch NASA Astronomy Picture of the Day on initial load
  useEffect(() => {
    async function loadNasaData() {
      try {
        const apod = await fetchNasaApod();
        setNasaApod(apod);
      } catch (err) {
        console.error('Failed to load NASA APOD', err);
      }
    }
    loadNasaData();
  }, []);

  // Switch to next background in space collection
  const handleNextBackground = () => {
    setCustomBg(null);
    setCurrentBgIndex((prev) => (prev + 1) % SPACE_FALLBACK_COLLECTIONS.length);
  };

  // Set APOD as active background
  const handleSetApodBackground = (apodData) => {
    setCustomBg({
      id: 'nasa-apod-active',
      title: apodData.title,
      url: apodData.url,
      subtitle: apodData.explanation.slice(0, 70) + '...',
      credit: apodData.copyright
    });
  };

  const currentBg = customBg || SPACE_FALLBACK_COLLECTIONS[currentBgIndex];

  const handleExploreProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-purple-500/30 selection:text-cyan-200">
      
      {/* 1. Dynamic Space Imagery Background */}
      <CosmicBackground 
        currentBg={currentBg} 
        onNextBg={handleNextBackground} 
      />

      {/* 2. Interactive Starfield & Meteor Canvas */}
      <StarfieldCanvas />

      {/* 3. Navigation Bar */}
      <Navbar
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenNasaModal={() => setIsNasaModalOpen(true)}
        onNextBackground={handleNextBackground}
        currentBgTitle={currentBg.title}
      />

      {/* 4. Main Portfolio Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenNasaModal={() => setIsNasaModalOpen(true)}
          nasaApod={nasaApod}
          onExploreProjects={handleExploreProjects}
        />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Floating Glassmorphism Quick Controls Badge */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <button
          onClick={() => setIsCustomizerOpen(true)}
          className="p-3.5 rounded-2xl glass-panel-deep border-white/25 hover:border-cyan-400 text-white shadow-glow-purple hover:scale-110 transition-all group flex items-center gap-2"
          title="Mở trình tùy biến hiệu ứng kính (Glassmorphism Tweaker)"
        >
          <Sliders className="w-5 h-5 text-cyan-300 group-hover:rotate-90 transition-transform" />
          <span className="text-xs font-semibold hidden md:inline pr-1">Chỉnh kính</span>
        </button>
      </div>

      {/* 7. Interactive Modals */}
      <GlassCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
      />

      <NasaApodModal
        isOpen={isNasaModalOpen}
        onClose={() => setIsNasaModalOpen(false)}
        apodData={nasaApod}
        onSetAsBackground={handleSetApodBackground}
      />

    </div>
  );
}
