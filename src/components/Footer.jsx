import React from 'react';
import { 
  Mail, 
  ArrowUp 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 pt-14 pb-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-display font-black text-white text-sm">
              NAT
            </div>
            <div>
              <span className="font-display font-bold text-base text-white">{personal.name}</span>
              <p className="text-xs text-slate-400">Frontend & Glassmorphism</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl glass-btn-secondary text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl glass-btn-secondary text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-xl glass-btn-secondary text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.socials.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl glass-btn-secondary text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl glass-panel text-xs font-medium text-slate-300 hover:text-white flex items-center gap-2 group"
          >
            <span>Đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-300" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="text-center pt-6 border-t border-white/5 text-xs text-slate-400 font-mono">
          © {new Date().getFullYear()} Nguyễn Anh Tuấn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
