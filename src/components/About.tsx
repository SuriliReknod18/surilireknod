import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Utensils, 
  Terminal, 
  Sparkles, 
  Heart, 
  BookMarked 
} from 'lucide-react';
import { personalDetails, aboutHighlights, educationHistory } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-navy-950/60">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-electric-violet/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-neon-cyan/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-electric-violet/40 text-electric-violetLight text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background &amp; Persona</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me &amp; <span className="text-gradient-main">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Second-year Information Technology undergraduate combining disciplined academic rigor with a hands-on builder mindset.
          </p>
        </div>

        {/* 4 Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {aboutHighlights.map((card, idx) => {
            const icons = [GraduationCap, Award, BookOpen, ShieldCheck];
            const Icon = icons[idx % icons.length];
            const borderColors = [
              'hover:border-neon-cyan/50',
              'hover:border-electric-violet/50',
              'hover:border-soft-pink/50',
              'hover:border-amber-400/50'
            ];

            return (
              <div
                key={card.label}
                className={`glass-card p-6 rounded-2xl border-navy-800/80 transition-all duration-300 transform hover:-translate-y-1 ${borderColors[idx]}`}
              >
                <div className="flex items-center justify-between pb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {card.label}
                  </span>
                  <div className="p-2 rounded-xl bg-navy-900 border border-navy-800 text-electric-violetLight">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-white tracking-tight">
                  {card.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {card.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Story & Education Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Story & Passions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-7 sm:p-8 rounded-3xl border-navy-800/80 space-y-6">
              
              {/* Profile Portrait Showcase (Framed up to chest) */}
              <div className="flex flex-col sm:flex-row items-center gap-5 pb-5 border-b border-navy-800/80">
                <div className="relative w-28 h-36 sm:w-36 sm:h-48 shrink-0 rounded-2xl bg-gradient-to-br from-electric-violet via-neon-cyan to-soft-pink p-[2.5px] shadow-xl shadow-electric-violet/25 group/avatar">
                  <img
                    src={personalDetails.profilePhoto || "/profile.jpg"}
                    alt={personalDetails.name}
                    className="w-full h-full object-cover object-top rounded-[14px] transition-transform duration-500 group-hover/avatar:scale-105"
                  />
                  <span className="absolute -bottom-1.5 -right-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-navy-950 text-emerald-300 border border-emerald-500/40 shadow-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    RCPIT
                  </span>
                </div>
                <div className="space-y-1.5 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-electric-violet/15 border border-electric-violet/30 text-electric-violetLight text-[11px] font-mono">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Who I Am</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{personalDetails.name}</h3>
                  <p className="text-xs text-neon-cyanBright font-medium">B.Tech Information Technology • 2nd Year</p>
                  <p className="text-[11px] text-slate-400">{personalDetails.college}</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {personalDetails.aboutStory}
              </p>

              {/* Location and Institution details */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900/80 border border-navy-800 text-xs">
                  <MapPin className="w-4 h-4 text-neon-cyanLight shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Hometown: </span>
                    <span className="text-slate-300">{personalDetails.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900/80 border border-navy-800 text-xs">
                  <GraduationCap className="w-4 h-4 text-electric-violetLight shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">College: </span>
                    <span className="text-slate-300">{personalDetails.college}</span>
                  </div>
                </div>
              </div>

              {/* Hobbies & Passions: Coding & Cooking */}
              <div className="pt-4 border-t border-navy-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <Heart className="w-3.5 h-3.5 text-soft-pinkLight" />
                  <span>Hobbies &amp; Creative Outlets</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-electric-violet/20 text-electric-violetLight">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Coding</h4>
                      <p className="text-[10px] text-slate-400">DSA &amp; Development</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-soft-pink/20 text-soft-pinkLight">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Cooking</h4>
                      <p className="text-[10px] text-slate-400">Recipes &amp; Precision</p>
                    </div>
                  </div>
                </div>

                <p className="text-[12px] text-slate-400 italic leading-relaxed pt-1">
                  "Just like code demands logical structure and syntax perfection, cooking requires balanced ingredients, precise timing, and continuous refinement."
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Formal Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                <BookMarked className="w-5 h-5 text-neon-cyanLight" />
                <span>Academic Record &amp; Timeline</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">All Credentials Verified</span>
            </div>

            <div className="space-y-5">
              {educationHistory.map((edu) => (
                <div
                  key={edu.id}
                  className="glass-card p-6 sm:p-7 rounded-2xl border-navy-800/80 space-y-4 relative group hover:border-electric-violet/40 transition-all"
                >
                  {/* Top status bar */}
                  <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-navy-800/80">
                    <div>
                      <span className="text-xs font-mono font-semibold text-neon-cyanBright bg-navy-900 px-3 py-1 rounded-md border border-neon-cyan/30">
                        {edu.status}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white mt-2 group-hover:text-neon-cyanLight transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="text-left sm:text-right mt-1 sm:mt-0">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-electric-violetLight" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-xs text-slate-400 font-mono block">{edu.scoreLabel}:</span>
                        <span className="text-base font-extrabold text-white text-gradient-main">
                          {edu.scoreValue}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Coursework Tags */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Core Subjects &amp; Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-navy-900/90 border border-navy-800 text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  {edu.highlights && (
                    <div className="space-y-1.5 pt-2 border-t border-navy-800/60">
                      {edu.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
