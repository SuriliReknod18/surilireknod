import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight, 
  Sparkles, 
  X, 
  Workflow, 
  Database, 
  FileCode2, 
  Server, 
  ShieldCheck 
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-navy-950/80">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-electric-violet/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-soft-pink/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-soft-pink/40 text-soft-pinkLight text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-pink">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic software solutions, algorithmic practice repositories, and administrative automation systems built with clean code and structured architectures.
          </p>
        </div>

        {/* Featured Project Banner: Online Student Leave Application System */}
        {projects.length > 0 && (
          <div className="mb-14">
            <div className="glass-card rounded-3xl p-7 sm:p-10 border-navy-800/90 relative overflow-hidden group hover:border-electric-violet/50 transition-all duration-300 shadow-2xl">
              
              {/* Top ambient highlight */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-electric-violet/30 via-neon-cyan/20 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Description */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neon-cyan/20 text-neon-cyanBright border border-neon-cyan/40">
                      Primary Academic Project
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-electric-violetLight bg-navy-900 border border-electric-violet/30">
                      {projects[0].status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-neon-cyanLight transition-colors">
                    {projects[0].title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {projects[0].tagline}
                  </p>

                  <div className="p-4 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neon-cyanBright">
                      Problem Solved:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {projects[0].problemSolved}
                    </p>
                  </div>

                  {/* Key Features Bullet points */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      System Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {projects[0].keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyanLight shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {projects[0].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-navy-900 border border-navy-800 text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setSelectedProject(projects[0])}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric-violet to-neon-cyan hover:opacity-95 shadow-lg shadow-electric-violet/25 transition-all transform hover:-translate-y-0.5"
                    >
                      <Workflow className="w-4 h-4" />
                      <span>View Architecture &amp; Flow</span>
                    </button>

                    <a
                      href={projects[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-navy-900 hover:bg-navy-800 border border-navy-700 transition-all hover:border-neon-cyan/40"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>

                </div>

                {/* Right Interactive Architecture Visual Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-navy-900/90 border border-navy-800 p-6 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-navy-800 text-xs font-mono text-slate-400">
                      <span>Workflow Diagram</span>
                      <span className="text-emerald-400">Digital Flow</span>
                    </div>

                    {/* Step-by-Step Flow preview */}
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-neon-cyan/20 text-neon-cyanLight flex items-center justify-center text-[10px] font-bold">1</span>
                          <span className="text-white">Student Submission</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Categorized Reason</span>
                      </div>

                      <div className="text-center text-slate-600 text-xs">↓</div>

                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-electric-violet/20 text-electric-violetLight flex items-center justify-center text-[10px] font-bold">2</span>
                          <span className="text-white">Faculty Dashboard</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Review &amp; Approve</span>
                      </div>

                      <div className="text-center text-slate-600 text-xs">↓</div>

                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-soft-pink/20 text-soft-pinkLight flex items-center justify-center text-[10px] font-bold">3</span>
                          <span className="text-white">Live Status &amp; Archive</span>
                        </div>
                        <span className="text-[10px] text-emerald-400">Real-Time Sync</span>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <button
                        onClick={() => setSelectedProject(projects[0])}
                        className="text-xs font-mono text-electric-violetLight hover:text-neon-cyanLight transition-colors"
                      >
                        Inspect Full Architecture Specs →
                      </button>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-7 border-navy-800/80 flex flex-col justify-between group hover:border-neon-cyan/40 transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neon-cyanBright bg-navy-900 px-3 py-1 rounded-md border border-neon-cyan/30">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyanLight transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.tagline}
                </p>

                <div className="p-3.5 rounded-xl bg-navy-900/80 border border-navy-800 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block mb-1">Focus &amp; Design:</strong>
                  {project.problemSolved}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-navy-900 border border-navy-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-electric-violetLight hover:text-neon-cyanLight transition-colors inline-flex items-center gap-1"
                >
                  <span>Project Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-navy-900 hover:bg-navy-800 border border-navy-800 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-electric-violet/40 p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-navy-800">
              <div>
                <span className="text-xs font-mono text-neon-cyanBright">
                  {selectedProject.category} • {selectedProject.status}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-navy-900 border border-navy-800 hover:border-slate-700 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Problem & Impact */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Problem Statement &amp; Resolution:
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-navy-900/60 p-4 rounded-xl border border-navy-800">
                {selectedProject.problemSolved}
              </p>
            </div>

            {/* Detailed Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Architecture &amp; Features:
              </h4>
              <div className="space-y-2">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-lg bg-navy-900/40 border border-navy-800/60">
                    <CheckCircle2 className="w-4 h-4 text-neon-cyanLight shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-navy-900 border border-navy-800 text-neon-cyanBright"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric-violet to-neon-cyan"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-navy-900 border border-navy-800"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
