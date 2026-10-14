import React, { useState, useEffect } from 'react';
import { FuturisticBackground } from './components/FuturisticBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { CareerGoals } from './components/CareerGoals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'career-goals', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-electric-violet/40 selection:text-white bg-[#030614] text-slate-100">
      {/* Unified Global Futuristic Aurora Galaxy Background */}
      <FuturisticBackground />

      {/* Skip to Main Content Link for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-electric-violet text-white rounded-md text-sm font-medium border border-neon-cyan/60"
      >
        Skip to main content
      </a>

      {/* Navigation Bar */}
      <Navbar 
        activeSection={activeSection} 
        onOpenResumeModal={() => setIsResumeModalOpen(true)} 
      />

      {/* Main Sections (Rendered on top of the seamless background) */}
      <main className="flex-grow relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <CareerGoals />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Dialog / Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
