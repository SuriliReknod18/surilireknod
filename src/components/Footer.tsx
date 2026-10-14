import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Award, Heart } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About & Education', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Career Goals', href: '#career-goals' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 border-t border-navy-850 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-electric-violet/10 via-neon-cyan/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-850">
          
          {/* Brand & Identity Column (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-violet via-neon-cyan to-soft-pink p-[1.5px] shadow-lg">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center font-bold text-sm text-white">
                  SR
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-white tracking-tight block">
                  {personalDetails.name}
                </span>
                <span className="text-xs font-mono text-neon-cyanBright">
                  {personalDetails.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              "{personalDetails.tagline}" Crafting intuitive software solutions and algorithmic systems as an Information Technology student at RCPIT Shirpur.
            </p>

            <div className="text-xs font-mono text-slate-500">
              Chhatrapati Sambhajinagar &amp; Shirpur, Maharashtra, India
            </div>
          </div>

          {/* Quick Links Column (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-neon-cyanBright transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Channels & Back to Top (3 Cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white">
                Connect Directly
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-navy-900 border border-navy-800 hover:border-neon-cyan/50 text-slate-300 hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-navy-900 border border-navy-800 hover:border-electric-violet/50 text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-navy-900 border border-navy-800 hover:border-amber-400/50 text-slate-300 hover:text-white transition-all"
                  aria-label="CodeChef Profile"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                </a>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="p-2.5 rounded-xl bg-navy-900 border border-navy-800 hover:border-emerald-500/50 text-slate-300 hover:text-white transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalDetails.phone}`}
                  className="p-2.5 rounded-xl bg-navy-900 border border-navy-800 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all"
                  aria-label="Call Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-navy-900 hover:bg-navy-850 border border-navy-800 hover:border-electric-violet/40 transition-all"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-neon-cyanLight" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright and Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed for Recruiter Excellence</span>
            <span>•</span>
            <span className="text-electric-violetLight">React + TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
