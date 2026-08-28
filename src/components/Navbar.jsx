import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Layers, 
  Menu, 
  X, 
  Radio, 
  Sliders, 
  Telescope,
  Send,
  User,
  Code,
  Briefcase,
  Compass
} from 'lucide-react';

export default function Navbar({ 
  onOpenCustomizer, 
  onOpenNasaModal, 
  onNextBackground,
  currentBgTitle
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home', id: 'home', icon: Compass },
    { name: 'Giới thiệu', href: '#about', id: 'about', icon: User },
    { name: 'Kỹ năng', href: '#skills', id: 'skills', icon: Code },
    { name: 'Dự án', href: '#projects', id: 'projects', icon: Briefcase },
    { name: 'Liên hệ', href: '#contact', id: 'contact', icon: Send },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
        <nav 
          className={`mx-auto max-w-7xl px-4 sm:px-6 py-3 rounded-2xl transition-all duration-500 flex items-center justify-between ${
            scrolled 
              ? 'glass-panel-deep shadow-2xl border-white/20' 
              : 'glass-panel border-white/10'
          }`}
        >
          {/* Logo with Cosmic Orbit Indicator */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/60 to-cyan-500/60 border border-white/30 backdrop-blur-md shadow-glow-purple group-hover:scale-105 transition-transform">
              <span className="font-display font-extrabold text-white text-lg tracking-wider">AN</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full" />
            </div>
            <div>
              <div className="font-display font-bold text-base sm:text-lg text-white tracking-wide flex items-center gap-1.5">
                <span>Alex.Dev</span>
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Cosmic
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono hidden sm:block">Frontend & Glassmorphism</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/40 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-white/15 shadow-sm border border-white/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Control Buttons (Cosmic Switcher, Glass Tweaker, NASA APOD) */}
          <div className="flex items-center gap-2">
            {/* NASA APOD Modal Button */}
            <button
              onClick={onOpenNasaModal}
              title="Khám phá ảnh thiên văn NASA hôm nay"
              className="p-2 rounded-xl glass-btn-secondary text-cyan-300 hover:text-white flex items-center gap-1.5 text-xs font-mono group"
            >
              <Telescope className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden xl:inline">NASA APOD</span>
            </button>

            {/* Random Space BG Switcher */}
            <button
              onClick={onNextBackground}
              title={`Đổi hình nền vũ trụ (Hiện tại: ${currentBgTitle || 'Cosmic'})`}
              className="p-2 rounded-xl glass-btn-secondary text-purple-300 hover:text-white flex items-center gap-1.5 text-xs font-mono group"
            >
              <Radio className="w-4 h-4 text-purple-400 group-hover:rotate-45 transition-transform" />
              <span className="hidden xl:inline">Đổi hình nền</span>
            </button>

            {/* Live Glass Customizer Button */}
            <button
              onClick={onOpenCustomizer}
              title="Tùy chỉnh hiệu ứng kính mờ Glassmorphism"
              className="px-3 py-2 rounded-xl glass-btn-primary text-xs font-medium flex items-center gap-1.5 text-white shadow-glow-purple"
            >
              <Sliders className="w-3.5 h-3.5 text-cyan-300" />
              <span className="hidden sm:inline">Chỉnh kính</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-xl glass-panel text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-cosmic-dark/80 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 px-3">Danh mục điều hướng</p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/30 text-cyan-300 border border-purple-500/40 shadow-glow-purple'
                      : 'glass-panel text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onNextBackground(); }}
                className="py-2.5 px-3 rounded-xl glass-btn-secondary text-xs flex items-center justify-center gap-1.5 text-slate-200"
              >
                <Radio className="w-4 h-4 text-purple-400" />
                <span>Đổi hình nền</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenNasaModal(); }}
                className="py-2.5 px-3 rounded-xl glass-btn-secondary text-xs flex items-center justify-center gap-1.5 text-slate-200"
              >
                <Telescope className="w-4 h-4 text-cyan-400" />
                <span>NASA APOD</span>
              </button>
            </div>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCustomizer(); }}
              className="w-full py-3 rounded-xl glass-btn-primary text-sm font-semibold flex items-center justify-center gap-2 text-white"
            >
              <Sliders className="w-4 h-4 text-cyan-300" />
              <span>Tùy chỉnh hiệu ứng Glassmorphism</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
