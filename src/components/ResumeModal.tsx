import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  Code2, 
  FolderGit2, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  FileText, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { personalDetails, educationHistory, certifications, projects } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col glass-card rounded-3xl border border-electric-violet/40 shadow-2xl overflow-hidden">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-navy-800 bg-navy-950/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-electric-violet/20 text-electric-violetLight">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Curriculum Vitae — {personalDetails.name}
              </h3>
              <p className="text-xs text-neon-cyanBright font-mono">
                Verified Academic &amp; Technical Profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-navy-900 border border-navy-800 hover:border-slate-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span>Print</span>
            </button>

            <a
              href={personalDetails.resumeDownloadUrl}
              download="Surili_Govindsing_Reknod_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric-violet to-neon-cyan hover:opacity-95 shadow-md shadow-electric-violet/30 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-navy-900 border border-navy-800 hover:border-slate-700 transition-colors ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Styled Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-navy-950/60 text-slate-200">
          
          {/* Resume Header */}
          <div className="border-b border-navy-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-26 sm:w-24 sm:h-32 shrink-0 rounded-2xl bg-gradient-to-br from-electric-violet via-neon-cyan to-soft-pink p-[2px] shadow-lg">
                  <img
                    src={personalDetails.profilePhoto || "/profile.jpg"}
                    alt={personalDetails.name}
                    className="w-full h-full object-cover object-top rounded-[14px]"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {personalDetails.name}
                  </h1>
                  <p className="text-sm font-semibold text-neon-cyanBright mt-0.5">
                    Information Technology Student | Aspiring Software Engineer
                  </p>
                  <p className="text-xs text-slate-400">
                    R. C. Patel Institute of Technology, Shirpur, Maharashtra
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono space-y-1 text-slate-300">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neon-cyanLight" />
                  <span>{personalDetails.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-electric-violetLight" />
                  <a href={`mailto:${personalDetails.email}`} className="hover:underline">{personalDetails.email}</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-soft-pinkLight" />
                  <a href={`tel:${personalDetails.phone}`} className="hover:underline">+91 {personalDetails.phone}</a>
                </div>
              </div>
            </div>

            {/* Profile Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-400">
              <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-electric-violetLight hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3" /> LinkedIn Profile
              </a>
              <span>•</span>
              <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="text-neon-cyanLight hover:underline flex items-center gap-1">
                <Github className="w-3 h-3" /> GitHub Profile
              </a>
              <span>•</span>
              <a href={personalDetails.codechef} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline flex items-center gap-1">
                <Award className="w-3 h-3" /> CodeChef Profile
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neon-cyanBright font-bold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-navy-900/60 p-4 rounded-xl border border-navy-800">
              Motivated second-year Information Technology student at R. C. Patel Institute of Technology, Shirpur, Maharashtra. Possesses foundational knowledge of Java and C programming, with a strong interest in Data Structures and Algorithms (DSA), software development, and problem-solving. Eager to apply technical knowledge through practical projects and secure software engineering internship opportunities at premier technology firms like Microsoft, Google, Amazon, or Samsung.
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-electric-violetLight font-bold flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>

            <div className="space-y-3">
              {educationHistory.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-navy-900/50 border border-navy-800 space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-1 text-xs sm:text-sm font-bold text-white">
                    <span>{edu.degree}</span>
                    <span className="text-neon-cyanBright font-mono font-semibold">{edu.scoreLabel}: {edu.scoreValue}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-400">
                    <span>{edu.institution}</span>
                    <span className="font-mono">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-soft-pinkLight font-bold flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills &amp; Competencies</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-navy-900/50 border border-navy-800 space-y-1">
                <strong className="text-white block font-semibold">Programming Languages:</strong>
                <span className="text-slate-300">Java (Core &amp; OOP), C Programming</span>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-900/50 border border-navy-800 space-y-1">
                <strong className="text-white block font-semibold">CS Fundamentals:</strong>
                <span className="text-slate-300">Data Structures &amp; Algorithms (DSA), OOP, Problem Solving</span>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-900/50 border border-navy-800 space-y-1">
                <strong className="text-white block font-semibold">Development Tools:</strong>
                <span className="text-slate-300">Visual Studio Code, Git, GitHub</span>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-900/50 border border-navy-800 space-y-1">
                <strong className="text-white block font-semibold">Areas of Interest:</strong>
                <span className="text-slate-300">Software Engineering, Application Development</span>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4" />
              <span>Academic Projects</span>
            </h2>

            <div className="p-4 rounded-xl bg-navy-900/50 border border-navy-800 space-y-2 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <strong className="text-sm font-bold text-white">Online Student Leave Application System</strong>
                <span className="text-neon-cyanBright font-mono font-medium">In Progress (Academic Capstone)</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Developing an academic project to digitize the student leave application process. Aims to simplify leave requests and approval workflows between students, faculty advisors, and institutional administration.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-navy-950 border border-navy-800">Java</span>
                <span className="px-2 py-0.5 rounded bg-navy-950 border border-navy-800">HTML5/CSS3</span>
                <span className="px-2 py-0.5 rounded bg-navy-950 border border-navy-800">JavaScript</span>
                <span className="px-2 py-0.5 rounded bg-navy-950 border border-navy-800">DBMS / SQL</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-3.5 rounded-xl bg-navy-900/50 border border-navy-800 space-y-1">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{cert.title}</span>
                    <span className="text-[10px] font-mono text-emerald-400">Verified</span>
                  </div>
                  <div className="text-slate-400 text-[11px] font-mono">Issued by: {cert.issuer} ({cert.date})</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Strengths */}
          <div className="p-4 rounded-xl bg-navy-900/30 border border-navy-800/80 space-y-2 text-xs">
            <div className="font-semibold text-white">Interests &amp; Hobbies:</div>
            <div className="text-slate-300">
              Coding and programming, software development, learning new technologies, and cooking.
            </div>
          </div>

          {/* Instructions note */}
          <div className="p-4 rounded-xl bg-navy-900/60 border border-navy-800 text-xs font-mono text-slate-400">
            <span>📌 Note for Surili:</span> To replace the default download file with your finalized personal PDF, save your PDF to <code className="text-electric-violetLight">public/resume.pdf</code>.
          </div>

        </div>

      </div>
    </div>
  );
};
