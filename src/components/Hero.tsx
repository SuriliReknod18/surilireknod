import React from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Download, 
  Eye, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Code2, 
  Award, 
  ExternalLink 
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-electric-violet/40 text-electric-violetLight text-xs font-mono backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personalDetails.availabilityBadge}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-900/80 border border-neon-cyan/30 text-neon-cyanBright text-xs font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personalDetails.location}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-gradient-main">
                  {personalDetails.name}
                </span>
              </h1>

              <div className="text-lg sm:text-xl font-medium text-slate-200 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-neon-cyanBright font-semibold">Information Technology Student</span>
                <span className="text-slate-500">•</span>
                <span className="text-electric-violetLight">Aspiring Software Engineer</span>
              </div>

              <p className="text-xs sm:text-sm font-mono text-soft-pinkLight italic">
                "{personalDetails.tagline}"
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Second-year IT student at <strong className="text-white font-semibold">R. C. Patel Institute of Technology, Shirpur</strong>. Passionate about mastering <span className="text-neon-cyanBright font-medium">Java</span>, <span className="text-electric-violetLight font-medium">C</span>, and <span className="text-white font-medium">Data Structures &amp; Algorithms (DSA)</span> to engineer impactful software. Driven to join elite engineering teams at <span className="text-soft-pinkLight font-medium">Microsoft, Google, Amazon, or Samsung</span>.
            </p>

            {/* CTAs & Resume Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-electric-violet via-purple-600 to-neon-cyan hover:opacity-95 shadow-lg shadow-electric-violet/30 hover:shadow-glow-multi transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-200" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-200 hover:text-white bg-navy-900/90 hover:bg-navy-850 border border-electric-violet/40 hover:border-electric-violet shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4 text-electric-violetLight" />
                <span>View Resume</span>
              </button>

              <a
                href={personalDetails.resumeDownloadUrl}
                download="Surili_Govindsing_Reknod_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-200 hover:text-white bg-navy-900/90 hover:bg-navy-850 border border-neon-cyan/40 hover:border-neon-cyan shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-neon-cyanLight" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="pt-3 border-t border-navy-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-navy-800 hover:border-neon-cyan/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-navy-800 hover:border-electric-violet/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-navy-800 hover:border-soft-pink/50 text-slate-300 hover:text-white text-xs font-mono font-semibold transition-all hover:scale-105 flex items-center gap-1.5"
                  title="CodeChef Profile"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>CodeChef</span>
                </a>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="p-2.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-navy-800 hover:border-emerald-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="Email Surili"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalDetails.phone}`}
                  className="p-2.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-navy-800 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="Call Surili"
                  title="Call Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Holographic Glassmorphic Card & Visual Highlights */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Ambient Multi-glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-violet/20 via-neon-cyan/20 to-soft-pink/20 rounded-3xl blur-2xl -z-10" />

            <div className="w-full max-w-md glass-card rounded-3xl p-6 sm:p-7 border-navy-800/80 relative space-y-6 shadow-2xl backdrop-blur-xl">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-navy-800/80">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-20 h-28 sm:w-24 sm:h-32 shrink-0 rounded-2xl bg-gradient-to-br from-electric-violet via-neon-cyan to-soft-pink p-[2px] shadow-xl shadow-electric-violet/30 group/avatar">
                    <img
                      src={personalDetails.profilePhoto || "/profile.jpg"}
                      alt={personalDetails.name}
                      className="w-full h-full object-cover object-top rounded-[14px] transition-transform duration-500 group-hover/avatar:scale-105"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-navy-950 animate-pulse shadow-sm" title="Active Student & Ready for Opportunities" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {personalDetails.name}
                    </h3>
                    <p className="text-xs text-electric-violetLight font-mono">
                      B.Tech IT • 2nd Year Student
                    </p>
                    <p className="text-[11px] text-slate-400">
                      R. C. Patel Institute of Tech, Shirpur
                    </p>
                    <div className="mt-1.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 inline-block">
                        Active Student
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">First-Year CGPA</span>
                  <div className="text-xl font-extrabold text-neon-cyanBright">7.26 <span className="text-xs text-slate-400 font-normal">/ 10</span></div>
                  <span className="text-[10px] text-slate-400">RCPIT Shirpur</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">10th Standard</span>
                  <div className="text-xl font-extrabold text-electric-violetLight">90.20%</div>
                  <span className="text-[10px] text-slate-400">SSC Distinction</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">12th Standard</span>
                  <div className="text-xl font-extrabold text-soft-pinkLight">84.67%</div>
                  <span className="text-[10px] text-slate-400">HSC Distinction</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Certifications</span>
                  <div className="text-xl font-extrabold text-amber-300">2x Verified</div>
                  <span className="text-[10px] text-slate-400">CodeChef Java &amp; C</span>
                </div>
              </div>

              {/* Code Snippet / Terminal Micro-Card */}
              <div className="rounded-2xl bg-navy-950/90 border border-navy-800/80 p-3.5 font-mono text-xs space-y-1.5 shadow-inner">
                <div className="flex items-center justify-between pb-1 border-b border-navy-800/60 text-[10px] text-slate-500">
                  <span>surili_engineer.java</span>
                  <span className="text-neon-cyanLight">Java 17 / DSA</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  <span className="text-electric-violetLight">class</span> <span className="text-neon-cyanLight">Engineer</span> {'{'}
                </p>
                <p className="text-slate-400 text-[11px] pl-3">
                  <span className="text-soft-pinkLight">String</span> dream = <span className="text-emerald-400">"SDE @ Top Tech"</span>;
                </p>
                <p className="text-slate-400 text-[11px] pl-3">
                  <span className="text-soft-pinkLight">String[]</span> skills = {'{'}<span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"C"</span>, <span className="text-amber-300">"DSA"</span>{'}'};
                </p>
                <p className="text-slate-400 text-[11px]">{'}'}</p>
              </div>

              {/* Featured Project Snippet */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-electric-violet/15 via-navy-900 to-neon-cyan/15 border border-electric-violet/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neon-cyanBright">Academic Project</span>
                  <h4 className="text-xs font-bold text-white mt-0.5">Online Student Leave System</h4>
                </div>
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-white bg-electric-violet/40 hover:bg-electric-violet/70 transition-colors"
                >
                  Details →
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 text-center flex flex-col items-center justify-center space-y-2">
          <a
            href="#about"
            className="group inline-flex flex-col items-center text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <span>Scroll to Explore</span>
            <ArrowDown className="w-4 h-4 text-electric-violetLight mt-1 animate-bounce group-hover:text-neon-cyanLight transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};
