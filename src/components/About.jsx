import React from 'react';
import { 
  User, 
  Code2, 
  Compass, 
  Sparkles, 
  Zap, 
  Eye, 
  HeartHandshake, 
  Layers, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SPACE_CARD_BACKGROUNDS } from '../data/spaceFallbackImages';

export default function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>KHÁM PHÁ BẢN THÂN</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Về tôi & <span className="text-cosmic-gradient">Triết lý sáng tạo</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Kết hợp tư duy kỹ thuật chuẩn xác và cảm quan thẩm mỹ vũ trụ để kiến tạo các sản phẩm số vượt trội.
          </p>
        </div>

        {/* Bento Grid Layout of Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* CARD 1: Story / Bio (Span 7 cols) */}
          <div className="md:col-span-7 rounded-3xl overflow-hidden glass-card-interactive p-6 sm:p-8 flex flex-col justify-between relative group">
            {/* Space Image Layer inside the Card with Frosted Mask */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundImage: `url(${SPACE_CARD_BACKGROUNDS.bio})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-slate-950/40 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl glass-btn-primary flex items-center justify-center text-cyan-300 shadow-glow-cyan">
                  <User className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-purple-300/80 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                  Profile v4.2
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                {about.bio.title}
              </h3>
              <p className="text-cyan-300 text-sm font-medium mb-6">
                {about.bio.subtitle}
              </p>

              <div className="space-y-4 text-slate-200/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {about.bio.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {about.bio.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-xs px-3 py-1 rounded-lg glass-panel text-slate-300 border-white/15 hover:border-cyan-400/40 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 2: Work Philosophy (Span 5 cols) */}
          <div className="md:col-span-5 rounded-3xl overflow-hidden glass-card-interactive p-6 sm:p-8 flex flex-col justify-between relative group">
            {/* Space Image Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundImage: `url(${SPACE_CARD_BACKGROUNDS.philosophy})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-slate-950/40 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl glass-btn-primary flex items-center justify-center text-purple-300 shadow-glow-purple">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-cyan-300/80 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  Kim chỉ nam
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {about.philosophy.title}
              </h3>
              <p className="text-purple-300 text-xs sm:text-sm font-medium mb-6">
                {about.philosophy.subtitle}
              </p>

              <div className="space-y-4">
                {about.philosophy.items.map((item, idx) => {
                  const icons = [Zap, Eye, HeartHandshake];
                  const Icon = icons[idx] || Sparkles;
                  return (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-6 border-t border-white/10 text-center">
              <span className="text-xs font-mono text-slate-400">✨ Tỉ mỉ từ bản vẽ đến từng commit</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
