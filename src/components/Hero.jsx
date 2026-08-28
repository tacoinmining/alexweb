import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Rocket, 
  Orbit, 
  Globe2, 
  Terminal,
  Telescope,
  ChevronDown
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero({ onOpenNasaModal, nasaApod, onExploreProjects }) {
  const { personal, stats } = PORTFOLIO_DATA;

  const handleDownloadCV = () => {
    // Generate a beautiful simulated CV download alert
    const blob = new Blob([
      `HỒ SƠ NĂNG LỰC - ${personal.name.toUpperCase()}\n` +
      `Chức danh: ${personal.role}\n` +
      `Email: ${personal.socials.email}\n` +
      `Địa điểm: ${personal.location}\n\n` +
      `KỸ NĂNG CHÍNH:\n` +
      `- Frontend: React, Next.js, Tailwind CSS, Glassmorphism, TypeScript, Framer Motion\n` +
      `- State & Tools: Redux Toolkit, Zustand, Vite, RESTful API, Figma to Code\n` +
      `- Triết lý: Hiệu năng cao (Performance-First), Chuẩn xác từng pixel, Trải nghiệm vượt trội.\n\n` +
      `Cảm ơn bạn đã quan tâm đến hồ sơ của tôi!`
    ], { type: 'text/plain;charset=utf-8' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV_${personal.name.replace(/\s+/g, '_')}_Frontend.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Top Floating Badge with Glass Glow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-purple-500/30 text-purple-200 text-xs sm:text-sm font-mono mb-8 animate-float-slow shadow-glow-purple">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          <span>🚀 Khám phá Không gian Thiết kế Glassmorphism</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        </div>

        {/* Big Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.1]">
          Xin chào, tôi là <br className="hidden sm:block" />
          <span className="text-cosmic-gradient relative inline-block">
            {personal.name}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full blur-[1px]" />
          </span>
        </h1>

        {/* Short Description */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-200 max-w-3xl mb-4 leading-snug">
          {personal.headline}
        </p>

        <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mb-10 leading-relaxed font-normal">
          {personal.subheadline}
        </p>

        {/* Call to Action Buttons (Glassmorphism Styled) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14 w-full max-w-md">
          <a
            href="#projects"
            onClick={onExploreProjects}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-btn-primary text-white font-semibold text-base flex items-center justify-center gap-3 group cursor-pointer shadow-lg"
          >
            <span>Xem dự án</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-cyan-300" />
          </a>

          <button
            onClick={handleDownloadCV}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-btn-secondary text-slate-100 font-semibold text-base flex items-center justify-center gap-3 group border-white/20 hover:border-white/40"
          >
            <Download className="w-5 h-5 text-purple-400 group-hover:-translate-y-1 transition-transform" />
            <span>Tải CV</span>
          </button>
        </div>

        {/* NASA APOD Live Telemetry Glass Card */}
        {nasaApod && (
          <div 
            onClick={onOpenNasaModal}
            className="w-full max-w-2xl p-4 sm:p-5 rounded-2xl glass-panel-deep border-white/15 hover:border-cyan-500/40 cursor-pointer group transition-all duration-300 text-left mb-16 shadow-glass-md hover:shadow-glow-cyan"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                  <Telescope className="w-3.5 h-3.5" />
                  NASA LIVE APOD STREAM
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">{nasaApod.date}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="w-full sm:w-28 h-20 rounded-xl overflow-hidden relative flex-shrink-0 border border-white/20">
                <img 
                  src={nasaApod.url} 
                  alt={nasaApod.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-900/20 backdrop-brightness-90" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {nasaApod.title}
                </h4>
                <p className="text-xs text-slate-300/80 line-clamp-2 mt-1">
                  {nasaApod.explanation}
                </p>
                <div className="mt-1.5 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                  <span>Credit: {nasaApod.copyright}</span>
                  <span>•</span>
                  <span className="text-cyan-400 group-hover:underline">Bấm để xem chi tiết HD →</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats Grid (Glass Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl glass-panel border-white/10 hover:border-white/25 transition-all text-center group hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white mb-1 tracking-tight group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce text-slate-400 flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Cuộn xuống</span>
          <ChevronDown className="w-4 h-4 text-purple-400" />
        </div>

      </div>
    </section>
  );
}
