import React from 'react';
import { 
  Mail, 
  ArrowUp, 
  Heart, 
  Sparkles, 
  Globe 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-display font-extrabold text-white text-sm">
                AN
              </div>
              <span className="font-display font-bold text-lg text-white">Alex Nguyễn • Portfolio</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Thiết kế Glassmorphism chuẩn cao cấp kết hợp công nghệ vũ trụ và giao diện web tương tác mượt mà.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-xl glass-btn-secondary text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-xl glass-btn-secondary text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-11 h-11 rounded-xl glass-btn-secondary text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.socials.email}`}
              aria-label="Email"
              className="w-11 h-11 rounded-xl glass-btn-secondary text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2.5 rounded-xl glass-btn-primary text-xs font-semibold text-white flex items-center gap-2 group"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-cyan-300" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3">
          <p>© {new Date().getFullYear()} Alex Nguyễn. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Powered by React, Tailwind CSS & NASA Open API</span>
            <span>•</span>
            <span className="text-cyan-400">Glassmorphism Cosmic Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
