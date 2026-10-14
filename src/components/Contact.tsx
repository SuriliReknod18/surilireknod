import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Linkedin, 
  GraduationCap, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  MessageSquare, 
  Award 
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a message subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitted(true);

      // Trigger pre-filled mailto for guaranteed delivery
      const mailtoUrl = `mailto:${personalDetails.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Surili,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
      )}`;

      window.location.href = mailtoUrl;

      // Reset form after short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-navy-950/90">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-electric-violet/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-neon-cyan/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-neon-cyan/40 text-neon-cyanBright text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a project in mind? <span className="text-gradient-cyan">Let's build something great.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am currently open to Software Engineering internship opportunities, academic collaborations, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-7 rounded-3xl border-navy-800/80 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white">Contact Information</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Feel free to reach out directly via email, phone, or professional platforms.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-2 group hover:border-neon-cyan/40 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-neon-cyanBright">
                    <Mail className="w-4 h-4" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={() => handleCopy(personalDetails.email, 'email')}
                    className="p-1.5 rounded-lg bg-navy-950 text-slate-400 hover:text-white border border-navy-800 hover:border-slate-700 transition-colors"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="text-sm font-semibold text-white group-hover:text-neon-cyanLight transition-colors block break-all"
                >
                  {personalDetails.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-2 group hover:border-electric-violet/40 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-electric-violetLight">
                    <Phone className="w-4 h-4" />
                    <span>Phone Number</span>
                  </div>
                  <button
                    onClick={() => handleCopy(personalDetails.phone, 'phone')}
                    className="p-1.5 rounded-lg bg-navy-950 text-slate-400 hover:text-white border border-navy-800 hover:border-slate-700 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href={`tel:${personalDetails.phone}`}
                  className="text-sm font-semibold text-white group-hover:text-electric-violetLight transition-colors block"
                >
                  +91 {personalDetails.phone}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-soft-pinkLight">
                  <MapPin className="w-4 h-4" />
                  <span>Permanent Location</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {personalDetails.location}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Maharashtra, India
                </div>
              </div>

              {/* Institutional Affiliation */}
              <div className="p-4 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                  <GraduationCap className="w-4 h-4" />
                  <span>College Campus</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  R. C. Patel Institute of Technology
                </div>
                <div className="text-xs text-slate-400">
                  Shirpur, Dist. Dhule, Maharashtra
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-navy-800/80 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Professional Channels:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 hover:border-electric-violet/50 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-electric-violetLight group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-medium">LinkedIn</span>
                  </a>

                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 hover:border-neon-cyan/50 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all group"
                  >
                    <Github className="w-5 h-5 text-neon-cyanLight group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-medium">GitHub</span>
                  </a>

                  <a
                    href={personalDetails.codechef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 hover:border-amber-400/50 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all group"
                  >
                    <Award className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-medium">CodeChef</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-7 sm:p-9 rounded-3xl border-navy-800/80 shadow-2xl space-y-6">
              
              <div className="border-b border-navy-800/80 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-neon-cyanLight" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in the details below. This client validates your request and initiates an email directly to Surili.
                </p>
              </div>

              {/* Success Notification */}
              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block text-emerald-300 font-semibold">Message Prepared!</strong>
                    <span>Your email client has been opened with your drafted message. You can also contact directly at surelireknod@gmail.com.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-slate-300 block">
                      Your Full Name <span className="text-soft-pinkLight">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyanshu Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500/80 focus:border-red-400'
                          : 'border-navy-800 focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/40'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-slate-300 block">
                      Email Address <span className="text-soft-pinkLight">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500/80 focus:border-red-400'
                          : 'border-navy-800 focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/40'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-300 block">
                    Subject / Topic <span className="text-soft-pinkLight">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. SDE Internship Opportunity / Academic Project"
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-red-500/80 focus:border-red-400'
                        : 'border-navy-800 focus:border-electric-violet/60 focus:ring-1 focus:ring-electric-violet/40'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-300 block">
                    Your Message <span className="text-soft-pinkLight">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role requirements, opportunity details, or questions..."
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-y ${
                      errors.message
                        ? 'border-red-500/80 focus:border-red-400'
                        : 'border-navy-800 focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/40'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric-violet via-purple-600 to-neon-cyan hover:opacity-95 shadow-lg shadow-electric-violet/30 hover:shadow-glow-multi transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4 text-cyan-200" />
                    <span>Send Message Directly</span>
                  </button>
                </div>

                {/* Form transparency disclaimer */}
                <p className="text-[11px] text-slate-500 font-mono text-center pt-2">
                  🔒 Transparent Notice: Validated inputs generate a direct email communication via standard protocols. No third-party data tracking.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
