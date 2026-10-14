import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  Terminal, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Trophy, 
  FileCheck 
} from 'lucide-react';
import { certifications, codeChefProfile, personalDetails } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-midnight-mesh">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-electric-violet/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-amber-400/40 text-amber-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; <span className="text-gradient-violet">CodeChef Profile</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Industry-recognized programming certificates from CodeChef, verified problem-solving track, and key academic achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: CodeChef Verified Certifications (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-neon-cyanLight" />
              <span>Programming Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card p-6 sm:p-7 rounded-2xl border-navy-800/80 space-y-4 group hover:border-amber-400/40 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-start justify-between flex-wrap gap-3 pb-3 border-b border-navy-800/80">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-amber-950/50 border border-amber-500/30 text-amber-400">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5 text-xs font-mono">
                          <span className="text-amber-400 font-semibold">{cert.issuer}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-400">{cert.date}</span>
                        </div>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                      Verified
                    </span>
                  </div>

                  {/* Skills Tested */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Core Syllabus &amp; Tested Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-navy-900 border border-navy-800 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verification Link */}
                  <div className="pt-3 border-t border-navy-800/60 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">Issuer: CodeChef Assessment</span>
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neon-cyanLight hover:text-white font-medium"
                    >
                      <span>Verify on CodeChef</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              ))}
            </div>

            {/* Academic Honors Card */}
            <div className="glass-card p-6 rounded-2xl border-navy-800/80 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Academic Honors &amp; Board Distinctions</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-navy-900/80 border border-navy-800 flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold block">Secondary School (10th)</span>
                    <span className="text-slate-400">Maharashtra State Board</span>
                  </div>
                  <span className="text-sm font-extrabold text-neon-cyanBright">90.20%</span>
                </div>

                <div className="p-3 rounded-xl bg-navy-900/80 border border-navy-800 flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold block">Higher Secondary (12th)</span>
                    <span className="text-slate-400">Science Stream</span>
                  </div>
                  <span className="text-sm font-extrabold text-electric-violetLight">84.67%</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: CodeChef Profile Dedicated Showcase (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-soft-pinkLight" />
              <span>Official CodeChef Profile</span>
            </h3>

            <div className="glass-card p-7 rounded-3xl border-navy-800/90 space-y-6 shadow-2xl relative overflow-hidden group hover:border-soft-pink/40 transition-all">
              
              {/* Profile Card Header */}
              <div className="flex items-start justify-between pb-4 border-b border-navy-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/20 to-soft-pink/20 border border-amber-500/40 text-amber-300">
                    <Code2 className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-white">CodeChef</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-500/30">
                        Competitive Dev
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neon-cyanBright">
                      @{codeChefProfile.username}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {codeChefProfile.bio}
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3 rounded-xl bg-navy-900/80 border border-navy-800 space-y-1">
                  <span className="text-[10px] uppercase text-slate-400">Certified Tracks</span>
                  <div className="text-base font-bold text-white">Java &amp; C</div>
                  <span className="text-[10px] text-emerald-400">Verified Completed</span>
                </div>

                <div className="p-3 rounded-xl bg-navy-900/80 border border-navy-800 space-y-1">
                  <span className="text-[10px] uppercase text-slate-400">Division Focus</span>
                  <div className="text-base font-bold text-amber-300">DSA Practice</div>
                  <span className="text-[10px] text-slate-400">Active Learning</span>
                </div>
              </div>

              {/* Focus areas */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Problem Solving Focus:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {codeChefProfile.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-navy-900 border border-navy-800 text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={personalDetails.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric-violet via-purple-600 to-soft-pink hover:opacity-95 shadow-lg shadow-purple-900/40 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Visit CodeChef Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Clear Editable Placeholder Note */}
              <div className="p-3.5 rounded-xl bg-navy-900/50 border border-navy-800 text-[11px] font-mono text-slate-400 leading-relaxed">
                <span>💡 Note:</span> Your profile URL is linked to <code className="text-neon-cyanBright">{personalDetails.codechef}</code>. You can update your exact username anytime in <code className="text-electric-violetLight">src/data/portfolioData.ts</code>.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
