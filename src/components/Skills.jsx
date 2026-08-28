import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Palette, 
  Terminal, 
  Database, 
  GitBranch, 
  Workflow, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SPACE_CARD_BACKGROUNDS } from '../data/spaceFallbackImages';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA.about;
  const [activeTab, setActiveTab] = useState(0);

  const skillHighlights = [
    { title: 'React / Next.js', tag: 'Expert', desc: 'SSR, SSG, App Router, Hooks & Performance', icon: Code2, color: 'text-cyan-400' },
    { title: 'Glassmorphism UI', tag: 'Specialist', desc: 'Backdrop blur, translucent depth, glowing neon', icon: Palette, color: 'text-purple-400' },
    { title: 'Tailwind CSS', tag: 'Master', desc: 'Design systems, responsive, atomic utilities', icon: Layers, color: 'text-pink-400' },
    { title: 'Motion & Animation', tag: 'Advanced', desc: 'Framer Motion, 3D CSS, micro-interactions', icon: Sparkles, color: 'text-amber-400' }
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>KHO VŨ KHÍ CÔNG NGHỆ</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Kỹ năng & <span className="text-cosmic-gradient">Công nghệ Lõi</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Làm chủ các công cụ và thư viện tiên tiến nhất trong hệ sinh thái Web hiện đại.
          </p>
        </div>

        {/* Highlight Skill Cards Grid (Glass Cards with Cosmic Backgrounds) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {skillHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card-interactive p-6 rounded-2xl relative overflow-hidden group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: `url(${SPACE_CARD_BACKGROUNDS.skills})` }}
                />
                <div className="absolute inset-0 bg-slate-950/80 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center border-white/20">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-slate-300 border border-white/15">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-300/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Skills Meter Box (Large Frosted Glass Card) */}
        <div className="glass-panel-deep p-6 sm:p-10 rounded-3xl relative overflow-hidden border-white/15 shadow-glass-lg">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
            style={{ backgroundImage: `url(${SPACE_CARD_BACKGROUNDS.skills})` }}
          />

          <div className="relative z-10">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-8 border-b border-white/10 pb-4">
              {skills.categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeTab === idx
                      ? 'glass-btn-primary text-white shadow-glow-purple'
                      : 'glass-btn-secondary text-slate-300 hover:text-white'
                  }`}
                >
                  <Workflow className="w-4 h-4 text-cyan-400" />
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Skill Level Progress Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.categories[activeTab].skills.map((skill, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-purple-300">{skill.level}%</span>
                  </div>
                  
                  {/* Glass Progress Track */}
                  <div className="w-full h-2.5 bg-slate-900/80 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 transition-all duration-1000 shadow-glow-cyan"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Badges */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Luôn cập nhật các công nghệ Web và Tiêu chuẩn mới nhất (2026+)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Clean Code</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">SEO Optimized</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">WCAG Accessibility</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
