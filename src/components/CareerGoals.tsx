import React from 'react';
import { 
  Target, 
  Building2, 
  Compass, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Briefcase, 
  ShieldCheck, 
  Rocket 
} from 'lucide-react';
import { careerMilestones, targetCompanies } from '../data/portfolioData';

export const CareerGoals: React.FC = () => {
  return (
    <section id="career-goals" className="py-24 relative bg-navy-950/70">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-electric-violet/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-electric-violet/40 text-electric-violetLight text-xs font-mono">
            <Target className="w-3.5 h-3.5" />
            <span>Aspirations &amp; Strategy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Career Goals &amp; <span className="text-gradient-main">Engineering Roadmap</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Targeting Software Development Engineering (SDE) roles at top-tier global technology enterprises through structured milestones.
          </p>
        </div>

        {/* Target Companies Showcase Grid */}
        <div className="mb-16">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border-navy-800/80 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-navy-800/80">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-neon-cyanLight" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Target Tech Companies for SDE Placement
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Aspirations: Software Development Engineer
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {targetCompanies.map((comp) => (
                <div
                  key={comp.name}
                  className="p-5 rounded-2xl bg-navy-900/80 border border-navy-800/80 hover:border-electric-violet/40 transition-all duration-300 transform hover:-translate-y-1 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-extrabold text-white">
                      {comp.name}
                    </h4>
                    <span className="w-2 h-2 rounded-full bg-neon-cyanLight animate-pulse" />
                  </div>
                  
                  <div>
                    <span className="text-xs font-mono text-electric-violetLight block font-semibold">
                      {comp.role}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {comp.domain}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Phase Roadmap Timeline */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-soft-pinkLight" />
            <h3 className="text-lg font-bold text-white">
              Strategic Multi-Year Development Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerMilestones.map((milestone, idx) => {
              const statusBadges: Record<string, string> = {
                'Current Focus': 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30',
                'Next Milestone': 'bg-electric-violet/20 text-electric-violetLight border-electric-violet/40',
                'Future Target': 'bg-neon-cyan/20 text-neon-cyanBright border-neon-cyan/30',
                'Long-term Goal': 'bg-soft-pink/20 text-soft-pinkLight border-soft-pink/30'
              };

              return (
                <div
                  key={milestone.phase}
                  className="glass-card p-6 rounded-2xl border-navy-800/80 flex flex-col justify-between space-y-4 group hover:border-electric-violet/40 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {milestone.phase}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${statusBadges[milestone.status]}`}>
                        {milestone.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-neon-cyanLight transition-colors">
                      {milestone.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-navy-800/60 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Key Deliverables:
                    </span>
                    {milestone.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyanLight shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Why Recruit Surili Pitch Box */}
        <div className="glass-card rounded-3xl p-7 sm:p-8 border-navy-800/80 bg-gradient-to-r from-navy-900/90 via-navy-850 to-navy-900/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-violet/20 border border-electric-violet/40 text-electric-violetLight text-xs font-mono">
              <Rocket className="w-3.5 h-3.5" />
              <span>Recruiter Value Proposition</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Why I Am Ready to Add Value to Your Engineering Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Consistently high academic track record (90.20% in 10th, 84.67% in 12th, 7.26 First-Year CGPA), verified programming rigor in Java and C with CodeChef certificates, proactive project delivery in student management automation, and intense dedication to continuous improvement.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-electric-violet to-neon-cyan hover:opacity-95 shadow-lg shadow-electric-violet/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Initiate Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
