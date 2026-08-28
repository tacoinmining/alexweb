import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  Radio, 
  Sliders, 
  Compass, 
  User, 
  Briefcase, 
  Send 
} from 'lucide-react';

export default function Navbar({ 
  onOpenCustomizer, 
  onNextBackground,
  currentBgTitle
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'projects', 'contact'];
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
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 py-5 transition-all duration-300">
        <nav 
          className={`mx-auto max-w-5xl px-6 py-3.5 rounded-2xl transition-all duration-500 flex items-center justify-between ${
            scrolled 
              ? 'glass-panel-deep shadow-2xl border-white/20' 
              : 'glass-panel border-white/10'
          }`}
        >
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/60 to-cyan-500/60 border border-white/30 backdrop-blur-md shadow-glow-purple group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-white text-base tracking-wider">NAT</span>
            </div>
            <div>
              <span className="font-display font-bold text-base text-white tracking-wide">
                Nguyễn Anh Tuấn
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 bg-slate-900/40 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-white/15 shadow-sm border border-white/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Action Control Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Random Space BG Switcher */}
            <button
              onClick={onNextBackground}
              title="Đổi hình nền vũ trụ"
              className="p-2.5 rounded-xl glass-btn-secondary text-purple-300 hover:text-white flex items-center gap-1.5 text-xs font-mono group"
            >
              <Radio className="w-4 h-4 text-purple-400 group-hover:rotate-45 transition-transform" />
              <span className="hidden lg:inline">Đổi nền</span>
            </button>

            {/* Live Glass Customizer Button */}
            <button
              onClick={onOpenCustomizer}
              title="Tùy chỉnh hiệu ứng kính mờ"
              className="px-3.5 py-2 rounded-xl glass-btn-primary text-xs font-medium flex items-center gap-1.5 text-white shadow-glow-purple"
            >
              <Sliders className="w-3.5 h-3.5 text-cyan-300" />
              <span className="hidden sm:inline">Chỉnh kính</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 md:hidden rounded-xl glass-panel text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-cosmic-dark/85 backdrop-blur-2xl pt-28 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
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
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
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
            <button
              onClick={() => { setMobileMenuOpen(false); onNextBackground(); }}
              className="w-full py-3 rounded-xl glass-btn-secondary text-sm flex items-center justify-center gap-2 text-slate-200"
            >
              <Radio className="w-4 h-4 text-purple-400" />
              <span>Đổi hình nền không gian</span>
            </button>
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
