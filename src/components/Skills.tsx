import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Filter, 
  BookOpen, 
  Lightbulb 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Code2 className="w-5 h-5 text-neon-cyanLight" />,
    fundamentals: <Cpu className="w-5 h-5 text-electric-violetLight" />,
    tools: <Terminal className="w-5 h-5 text-soft-pinkLight" />,
    interests: <Layers className="w-5 h-5 text-amber-300" />,
    strengths: <Sparkles className="w-5 h-5 text-emerald-300" />
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-midnight-mesh">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-neon-cyan/40 text-neon-cyanBright text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Skills</span> &amp; Focus
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Curated overview of core programming languages, algorithmic problem solving, software design principles, and engineering tooling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-electric-violet to-neon-cyan text-white shadow-lg font-semibold border border-neon-cyan/40'
                : 'bg-navy-900/90 text-slate-300 hover:text-white border border-navy-800 hover:border-navy-700'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-electric-violet to-neon-cyan text-white shadow-lg font-semibold border border-neon-cyan/40'
                  : 'bg-navy-900/90 text-slate-300 hover:text-white border border-navy-800 hover:border-navy-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card p-6 sm:p-7 rounded-2xl border-navy-800/80 flex flex-col justify-between group hover:border-neon-cyan/40 transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-navy-800/80">
                  <div className="p-3 rounded-xl bg-navy-900 border border-navy-800">
                    {categoryIcons[category.id] || <Code2 className="w-5 h-5 text-neon-cyanLight" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-neon-cyanLight transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="mt-5 space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-navy-900/80 border border-navy-800/70 hover:border-navy-700 transition-colors flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <span>{skill.name}</span>
                        </div>
                        {skill.level && (
                          <div className="text-xs text-slate-400 font-mono">
                            {skill.level}
                          </div>
                        )}
                      </div>

                      {skill.tag && (
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-navy-950 text-neon-cyanBright border border-neon-cyan/25 shrink-0 ml-2">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric */}
              <div className="mt-6 pt-3 border-t border-navy-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{category.skills.length} competencies</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active Skill
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-navy-900/60 border border-navy-800/80 max-w-2xl mx-auto flex items-center gap-3 text-xs text-slate-400 font-mono">
          <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            <strong>Authentic Skills:</strong> Skills represent active coursework and projects without arbitrary percentage gauges. Verified by CodeChef certifications in C &amp; Java.
          </span>
        </div>

      </div>
    </section>
  );
};
