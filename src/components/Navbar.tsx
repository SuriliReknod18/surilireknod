import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Code2, GraduationCap, FolderGit2, Award, Target, Mail } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Sparkles },
    { name: 'About & Education', href: '#about', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Career Goals', href: '#career-goals', icon: Target },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-navy-800/80 shadow-2xl shadow-navy-950/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyanLight rounded-xl p-1"
            aria-label="Surili Reknod Portfolio"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-electric-violet via-neon-cyan to-soft-pink p-[1.5px] shadow-lg shadow-electric-violet/20 group-hover:shadow-glow-multi transition-all duration-300">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center font-bold text-sm tracking-wider text-white group-hover:text-neon-cyanLight transition-colors">
                SR
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-navy-950 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-neon-cyanLight transition-colors">
                Surili Reknod
              </span>
              <span className="text-[11px] text-electric-violetLight font-mono tracking-wider">
                IT Student • RCPIT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-navy-900/80 border border-navy-800/80 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner shadow-black/40">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-electric-violet/30 to-neon-cyan/20 text-white font-semibold border border-electric-violet/50 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-navy-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-slate-200 hover:text-white bg-navy-900/80 hover:bg-navy-800 border border-navy-700/80 transition-all hover:border-electric-violet/50"
            >
              Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-electric-violet via-purple-600 to-neon-cyan hover:opacity-95 shadow-lg shadow-electric-violet/25 hover:shadow-glow-multi transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white bg-navy-900/90 border border-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyanLight"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-neon-cyanLight" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 border-b border-navy-800 backdrop-blur-2xl px-5 pt-4 pb-7 space-y-2 mt-2 shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-electric-violet/30 to-neon-cyan/20 text-white font-semibold border border-electric-violet/50'
                      : 'text-slate-300 hover:text-white hover:bg-navy-900'
                  }`}
                >
                  <Icon className="w-4 h-4 text-neon-cyanLight" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-navy-800/80 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 py-2.5 text-center rounded-xl text-xs font-semibold text-white bg-navy-900 border border-navy-700"
            >
              View Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric-violet to-neon-cyan shadow-md"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
