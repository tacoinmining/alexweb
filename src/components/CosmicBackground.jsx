import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CosmicBackground({ currentBg, onNextBg }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Dynamic Background Image with Smooth Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg.id || currentBg.url}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out"
          style={{
            backgroundImage: `url(${currentBg.url})`,
          }}
        />
      </AnimatePresence>

      {/* Deep Space Darkening and Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/85 via-cosmic-dark/75 to-cosmic-dark/95 backdrop-brightness-75" />

      {/* Floating Nebula Glowing Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-[30rem] h-[30rem] bg-cyan-600/15 rounded-full blur-3xl animate-float-reverse pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      {/* Subtle Noise / Grain overlay for rich cinematic texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
