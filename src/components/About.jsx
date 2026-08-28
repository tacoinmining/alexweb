import React from 'react';
import { 
  User, 
  Code2, 
  Compass, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SPACE_CARD_BACKGROUNDS } from '../data/spaceFallbackImages';

export default function About() {
  const { aboutCards } = PORTFOLIO_DATA;

  const cardIcons = {
    bio: User,
    skills: Code2,
    philosophy: Compass
  };

  const cardBgImages = {
    bio: SPACE_CARD_BACKGROUNDS.bio,
    skills: SPACE_CARD_BACKGROUNDS.skills,
    philosophy: SPACE_CARD_BACKGROUNDS.philosophy
  };

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>GIỚI THIỆU BẢN THÂN</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Về tôi & <span className="text-cosmic-gradient">Kỹ năng cốt lõi</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tối giản chi tiết để mang lại không gian trải nghiệm thoáng đãng, sắc nét và hiện đại.
          </p>
        </div>

        {/* 3 Glass Cards Grid (Tiểu sử, Kỹ năng, Triết lý làm việc) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Thẻ Tiểu sử */}
          <div className="rounded-3xl overflow-hidden glass-card-interactive p-8 flex flex-col justify-between relative group min-h-[380px]">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundImage: `url(${cardBgImages.bio})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/40 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl glass-btn-primary flex items-center justify-center text-cyan-300 shadow-glow-cyan mb-6">
                <User className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-1.5">
                {aboutCards[0].title}
              </h3>
              <p className="text-cyan-300 text-xs font-mono uppercase tracking-wider mb-5">
                {aboutCards[0].subtitle}
              </p>

              <p className="text-slate-200 text-sm leading-relaxed mb-6 font-normal">
                {aboutCards[0].content}
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {aboutCards[0].tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-xs px-2.5 py-1 rounded-lg glass-panel text-slate-300 border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Thẻ Kỹ năng */}
          <div className="rounded-3xl overflow-hidden glass-card-interactive p-8 flex flex-col justify-between relative group min-h-[380px]">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundImage: `url(${cardBgImages.skills})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/40 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl glass-btn-primary flex items-center justify-center text-purple-300 shadow-glow-purple mb-6">
                <Code2 className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-1.5">
                {aboutCards[1].title}
              </h3>
              <p className="text-purple-300 text-xs font-mono uppercase tracking-wider mb-5">
                {aboutCards[1].subtitle}
              </p>

              <div className="space-y-3 mb-6">
                {aboutCards[1].skillsList.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400">✨ Tối ưu trải nghiệm & hiệu năng</span>
            </div>
          </div>

          {/* 3. Thẻ Triết lý làm việc */}
          <div className="rounded-3xl overflow-hidden glass-card-interactive p-8 flex flex-col justify-between relative group min-h-[380px]">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundImage: `url(${cardBgImages.philosophy})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/40 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl glass-btn-primary flex items-center justify-center text-pink-300 shadow-glow-pink mb-6">
                <Compass className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-1.5">
                {aboutCards[2].title}
              </h3>
              <p className="text-pink-300 text-xs font-mono uppercase tracking-wider mb-5">
                {aboutCards[2].subtitle}
              </p>

              <p className="text-slate-200 text-sm leading-relaxed mb-6 font-normal">
                {aboutCards[2].content}
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {aboutCards[2].highlights.map((item, i) => (
                <span 
                  key={i} 
                  className="text-xs px-2.5 py-1 rounded-lg glass-panel text-slate-300 border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
