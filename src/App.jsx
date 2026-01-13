import React, { useState, useEffect } from 'react';
import { Github, Mail, Terminal, Cpu, Rocket, ChevronRight, Zap, Shield, BarChart3, Clock, Award, Play, ExternalLink, Binary, Send, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkoonyea", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus({ type: 'success', message: "Message sent! I'll get back to you soon." });
        form.reset();
      } else {
        setStatus({ type: 'error', message: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setStatus({ type: 'error', message: "Could not connect to the server." });
    } finally {
      setIsSubmitting(false);
      // Optional: Clear message after 5 seconds
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }
  };

  const tenets = [
    { title: "Performance", icon: <Zap className="text-emerald-400" />, desc: "Optimizing for peak speed and efficiency." },
    { title: "Cost Management", icon: <BarChart3 className="text-emerald-400" />, desc: "Resource allocation with surgical precision." },
    { title: "Reliability", icon: <Shield className="text-emerald-400" />, desc: "Systems designed to fail-safe, every time." },
    { title: "Availability", icon: <Clock className="text-emerald-400" />, desc: "Ensuring 24/7 mission-critical uptime." }
  ];

  const skillCategories = [
    {
      title: "Aerospace & Physics",
      icon: <Rocket className="text-emerald-400" size={20} />,
      skills: ["Fluid Mechanics", "Aerodynamics", "Propulsion Systems", "CAD/SolidWorks", "MATLAB"]
    },
    {
      title: "Software & Systems",
      icon: <Cpu className="text-emerald-400" size={20} />,
      skills: ["React.js", "Python", "Tailwind CSS", "Embedded Systems", "Git/GitHub", "Node.js"]
    },
    {
      title: "Core Logic & Math",
      icon: <Binary className="text-emerald-400" size={20} />,
      skills: ["Algorithms", "Data Structures", "Informatics", "Differential Equations", "Numerical Analysis"]
    }
  ];

  const projects = [
    {
      title: "Aerodynamic Simulation Suite",
      desc: "A high-fidelity tool for calculating drag coefficients in real-time environments.",
      tags: ["Python", "Aerospace", "Physics"],
      videoUrl: "#",
      img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Olympiad Level Informatics Engine",
      desc: "Competitive programming platform designed for complex algorithm visualization.",
      tags: ["React", "Algorithms", "Informatics"],
      videoUrl: "#",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-400 font-sans scroll-smooth w-screen overflow-x-hidden">
      
      {/* 1. TOP BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'mt-4' : 'mt-0'}`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className={`flex items-center justify-between px-6 py-3 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-full transition-all duration-300 ${scrolled ? 'shadow-[0_0_20px_rgba(52,211,153,0.1)] border-emerald-500/20' : ''}`}>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="text-emerald-400 font-mono text-xl font-bold italic">{"()=>"}</div>
              <span className="text-slate-100 font-semibold tracking-tight">Divine Bawa</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4 border-l border-slate-800 pl-4">
              <a href="#" className="hover:text-emerald-400 transition-colors"><Github size={18} /></a>
              <a href="mailto:anthonybawa496@gmail.com" className="bg-emerald-500/10 text-emerald-400 p-2 rounded-full hover:bg-emerald-500 hover:text-slate-900 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. INTRODUCTION */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase">
              <Rocket size={14} /> Aerospace Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              I am Divine Bawa.
              {/* Designing the <span className="text-emerald-400">Future</span> of Flight. */}
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Informatics expert and 3x Olympiad winner. I bridge the gap between complex aerospace physics and high-performance digital systems.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0d1117] border border-slate-800 rounded-lg overflow-hidden">
              <div className="bg-slate-800/50 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/50"></div><div className="w-3 h-3 rounded-full bg-amber-500/50"></div><div className="w-3 h-3 rounded-full bg-emerald-500/50"></div></div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">system_diagnostics.sh</div>
              </div>
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex gap-2 text-emerald-400"><span>01</span><span><ChevronRight size={14} className="inline"/> init_profile --user="Divine Bawa"</span></div>
                <div className="flex gap-2 text-slate-300"><span>02</span><span>{">"} Education: Aerospace Engineering</span></div>
                <div className="flex gap-2 text-emerald-400 animate-pulse"><span>03</span><span><Terminal size={14} className="inline"/> System ready_</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT ME */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">01.</span> About
          <div className="h-px bg-slate-800 flex-grow"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 bg-slate-900/30 border border-slate-800 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden border-2 border-emerald-500/20 relative group">
              <img src="https://drive.google.com/thumbnail?id=1lfODsB66iYduhtzt0_Cd_9dGQ3Lnsz1W&sz=w1000" alt="Divine" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent"></div>
            </div>
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-lg">I am <span className="text-emerald-400 font-semibold">Divine Bawa</span>. My journey is rooted in logic, having won 3 Olympiads in Abuja across Math and Informatics.</p>
            </div>
          </div>
          <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
            <Award className="text-emerald-400 mb-4" size={32} />
            <h3 className="text-white font-bold mb-2">Abuja Champion</h3>
            <ul className="text-sm text-slate-400 space-y-2 font-mono"><li>• Junior Math</li><li>• Senior Math</li><li>• Informatics</li></ul>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {tenets.map((tenet, idx) => (
              <div key={idx} className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-emerald-400/30 transition-all group">
                <div className="mb-4">{tenet.icon}</div>
                <h4 className="text-white font-semibold mb-1">{tenet.title}</h4>
                <p className="text-xs text-slate-500">{tenet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">02.</span> Projects
          <div className="h-px bg-slate-800 flex-grow"></div>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-slate-900/20 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-all" />
                <a href={project.videoUrl} className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center shadow-2xl opacity-90 group-hover:opacity-100 transition-all"><Play fill="currentColor" size={24} /></div>
                </a>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-slate-800/50 text-emerald-400/80 text-[10px] font-mono rounded-full border border-slate-700">#{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SKILLS */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">03.</span> Skills
          <div className="h-px bg-slate-800 flex-grow"></div>
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="p-8 bg-[#0d1117] border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-3 mb-6"><h3 className="text-white font-bold">{cat.title}</h3></div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <button key={sIdx} className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 text-xs rounded-lg hover:text-emerald-400 transition-all">{skill}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GET IN TOUCH SECTION */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">04.</span> Contact
          <div className="h-px bg-slate-800 flex-grow"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white">Let's build something <span className="text-emerald-400">extraordinary.</span></h3>
            <p className="text-slate-400 leading-relaxed">Whether it's a complex aerospace simulation or a high-performance web application, I'm always open to discussing new challenges and missions.</p>
            
            <div className="space-y-4">
              <a href="mailto:anthonybawa496@gmail.com" className="flex items-center gap-4 text-white hover:text-emerald-400 transition-colors group">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-emerald-500/10"><Mail size={24}/></div>
                anthonybawa496@gmail.com
              </a>
              <a href="https://github.com/Bawinian" className="flex items-center gap-4 text-white hover:text-emerald-400 transition-colors group">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-emerald-500/10"><Github size={24}/></div>
                @Bawinian
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Name</label>
                <input type="text" name="name" className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 focus:border-emerald-500/50 outline-none transition-all text-white" required />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Email</label>
                <input type="email" name="email" className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 focus:border-emerald-500/50 outline-none transition-all text-white" required />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Message</label>
                <textarea name="message" rows="4" className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 focus:border-emerald-500/50 outline-none transition-all text-white" required></textarea>
              </div>
              
              {/* Submission Status Message */}
              {status.type && (
                <div className={`p-4 rounded-lg flex items-center gap-3 text-sm font-medium transition-all ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {status.type === 'success' && <CheckCircle2 size={18} />}
                  {status.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-sm font-mono tracking-widest">DESIGNED BY DIVINE BAWA // 2024</p>
      </footer>
    </div>
  );
}