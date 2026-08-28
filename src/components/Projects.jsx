import React, { useState } from 'react';
import { 
  Rocket, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Filter, 
  Eye,
  Check
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web App', 'UI/UX & Library', 'Frontend'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-pink-500/30 text-pink-300 text-xs font-mono mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>DANH MỤC DỰ ÁN NỔI BẬT</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Các sản phẩm & <span className="text-cosmic-gradient">Công trình Sáng tạo</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Những trải nghiệm số độc bản được xây dựng với tinh thần cầu toàn, kết hợp hiệu ứng kính mờ và hoạt ảnh vũ trụ.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'glass-btn-primary text-white shadow-glow-cyan'
                  : 'glass-btn-secondary text-slate-300 hover:text-white'
              }`}
            >
              {cat === 'All' ? 'Tất cả dự án' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card-interactive rounded-3xl overflow-hidden flex flex-col justify-between border-white/15 hover:border-cyan-400/40 group"
            >
              {/* Project Image Preview Container */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Frosted gradient overlay over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium glass-panel-deep text-cyan-300 border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Featured Star */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Details Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.subtitle}
                  </p>

                  {/* Tech Stack Badges */}
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

        {/* Extra Bottom Banner in Projects */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-panel-deep border-white/15 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glass-md">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Bạn muốn xây dựng một dự án tương tự?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Tôi luôn sẵn sàng hiện thực hóa các ý tưởng độc đáo với giao diện Glassmorphism đỉnh cao.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl glass-btn-primary text-white text-sm font-semibold whitespace-nowrap shadow-glow-purple"
          >
            Liên hệ hợp tác ngay →
          </a>
        </div>

      </div>
    </section>
  );
}
