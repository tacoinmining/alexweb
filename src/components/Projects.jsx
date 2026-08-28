import React from 'react';
import { 
  Rocket, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-pink-500/30 text-pink-300 text-xs font-mono mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>DỰ ÁN NỔI BẬT</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Sản phẩm & <span className="text-cosmic-gradient">Công trình Tiêu biểu</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Những sản phẩm tiêu biểu được thiết kế với phong cách Glassmorphism mượt mà và hiện đại.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card-interactive rounded-3xl overflow-hidden flex flex-col justify-between border-white/15 hover:border-cyan-400/40 group"
            >
              {/* Project Image Preview */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium glass-panel-deep text-cyan-300 border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl glass-btn-primary text-xs font-semibold text-white flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Trải nghiệm</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-300 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl glass-btn-secondary text-slate-300 hover:text-white flex items-center justify-center"
                    title="Xem mã nguồn trên GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
