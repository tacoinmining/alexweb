import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  ChevronDown
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero({ onExploreProjects }) {
  const { personal } = PORTFOLIO_DATA;

  const handleDownloadCV = () => {
    const blob = new Blob([
      `HỒ SƠ NĂNG LỰC - ${personal.name.toUpperCase()}\n` +
      `Chức danh: ${personal.role}\n` +
      `Email: ${personal.socials.email}\n` +
      `Địa điểm: ${personal.location}\n\n` +
      `KỸ NĂNG CHÍNH:\n` +
      `- Frontend: React, Next.js, Tailwind CSS, Glassmorphism, TypeScript, Framer Motion\n` +
      `- Triết lý: Giao diện tối giản, thoáng đãng, hiệu năng cao và chuẩn xác từng pixel.\n\n` +
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
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-28 pb-16">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-purple-500/30 text-purple-200 text-xs sm:text-sm font-mono mb-10 shadow-glow-purple">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Không gian Sáng tạo & Thiết kế Kính mờ</span>
        </div>

        {/* Big Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.15]">
          Xin chào, tôi là <br className="hidden sm:block" />
          <span className="text-cosmic-gradient relative inline-block mt-2">
            {personal.name}
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl sm:text-2xl font-medium text-slate-200 max-w-2xl mb-4 leading-relaxed">
          {personal.headline}
        </p>

        <p className="text-sm sm:text-base text-slate-300/80 max-w-xl mb-12 leading-relaxed font-normal">
          {personal.subheadline}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <a
            href="#projects"
            onClick={onExploreProjects}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-btn-primary text-white font-semibold text-base flex items-center justify-center gap-3 group cursor-pointer shadow-lg"
          >
            <span>Xem dự án</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-cyan-300" />
          </a>

          <button
            onClick={handleDownloadCV}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-btn-secondary text-slate-100 font-semibold text-base flex items-center justify-center gap-3 group border-white/20 hover:border-white/40"
          >
            <Download className="w-5 h-5 text-purple-400 group-hover:-translate-y-1 transition-transform" />
            <span>Tải CV</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 text-slate-400/80 flex flex-col items-center gap-1.5">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Cuộn để khám phá</span>
          <ChevronDown className="w-4 h-4 text-purple-400 animate-bounce" />
        </div>

      </div>
    </section>
  );
}
