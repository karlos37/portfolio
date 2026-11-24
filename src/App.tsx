import React, { useState } from 'react'
import AgentCoreCanvas from './components/AgentCoreCanvas'
import { 
  Terminal, 
  Cpu, 
  Network, 
  ExternalLink, 
  Mail, 
  ChevronRight,
  ShieldCheck,
  Activity,
  Code2
} from 'lucide-react'

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'systems'>('all')

  const projects = [
    {
      title: "Autonomous Agent Node & Cloud Tunnel",
      category: "ai",
      desc: "Self-hosted AI agent execution kernel connected via encrypted Cloudflare Zero Trust tunnels. Automates multi-step workflows, persistent memory triage, and tool orchestration.",
      tech: ["Python", "Cloudflare Tunnels", "FastAPI", "React", "DSPy"],
      badge: "Production Core",
      link: "https://agent.vedanshsurjan.com"
    },
    {
      title: "Startup of Self (Personal Command OS)",
      category: "systems",
      desc: "Private web dashboard consolidating task management, personal finance analytics, automated tracking, and real-time telemetry into a unified operational console.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Zero Trust", "PostgreSQL"],
      badge: "Internal Portal",
      link: "https://app.vedanshsurjan.com"
    },
    {
      title: "Distributed Financial Microservices",
      category: "systems",
      desc: "High-throughput, fault-tolerant backend architectures engineered for low-latency processing, enterprise data pipelines, and strict compliance boundaries.",
      tech: ["Java", "Distributed Systems", "Kafka", "Cloud Infrastructure"],
      badge: "Enterprise",
      link: "#experience"
    }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* Top ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08090d]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 group-hover:scale-105 transition-transform">
              VS
            </span>
            <span className="font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              vedanshsurjan<span className="text-emerald-400">.com</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#canvas" className="hover:text-white transition-colors">3D Core</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://app.vedanshsurjan.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-mono px-3.5 py-1.5 rounded-md bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 text-zinc-300 hover:text-emerald-400 transition-all flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Portal
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-12 pb-24 flex-1 space-y-24">

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Software Engineer · Systems & AI Architectures
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering autonomous <span className="text-emerald-400">AI agents</span> & distributed systems.
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
              I am Vedansh Surjan — building high-scale distributed backend systems, intelligent agent frameworks, and self-hosted cloud infrastructure. Currently at <span className="text-white font-medium">Goldman Sachs</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm transition-colors shadow-lg shadow-emerald-500/20 flex items-center gap-2"
              >
                Explore Projects <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-medium text-sm transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* 3D Visual Hero Component */}
          <div className="lg:col-span-5" id="canvas">
            <AgentCoreCanvas />
          </div>
        </section>

        {/* Focus Areas */}
        <section id="about" className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400">01 / Pillars</h2>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-1">Core Architecture Focus</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Autonomous Agents</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Self-orchestrating agent frameworks with recursive task decomposition, long-term memory retrieval, and deterministic tool validation.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Network className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Distributed Systems</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                High-throughput concurrent architectures built with enterprise reliability, transaction guarantees, and real-time data streaming.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Edge & Zero Trust</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Edge computing with Cloudflare Workers/Pages and encrypted tunnels securely binding self-hosted hardware to global subdomains.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400">02 / Engineering</h2>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1">Featured Work</h3>
            </div>
            
            <div className="flex items-center gap-2 p-1 bg-white/5 rounded-lg border border-white/5 text-xs font-mono">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-3 py-1 rounded transition-colors ${activeTab === 'all' ? 'bg-emerald-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('ai')} 
                className={`px-3 py-1 rounded transition-colors ${activeTab === 'ai' ? 'bg-emerald-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'}`}
              >
                AI & Agents
              </button>
              <button 
                onClick={() => setActiveTab('systems')} 
                className={`px-3 py-1 rounded transition-colors ${activeTab === 'systems' ? 'bg-emerald-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'}`}
              >
                Systems
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((p, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400">{p.badge}</span>
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h4 className="text-xl font-bold text-white">{p.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-zinc-400">
                  {p.tech.map((t, tidx) => (
                    <span key={tidx} className="px-2 py-1 bg-white/5 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400">03 / Experience</h2>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-1">Career</h3>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-xl border-l-2 border-l-emerald-500 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h4 className="text-lg font-bold text-white">Software Engineer</h4>
                <div className="text-emerald-400 font-medium text-sm">Goldman Sachs</div>
              </div>
              <div className="font-mono text-xs text-zinc-500">
                Dallas / Richardson, TX · Present
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Engineering core financial software, distributed backend services, and scalable cloud applications within high-security enterprise environments.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6">
          <div className="glass-panel p-8 sm:p-12 rounded-2xl text-center space-y-6 max-w-2xl mx-auto border border-emerald-500/20">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Let's Connect</h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">
                Feel free to reach out directly to discuss distributed systems, AI agent integrations, or new initiatives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a 
                href="mailto:contact@vedanshsurjan.com" 
                className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> contact@vedanshsurjan.com
              </a>
              <a 
                href="https://github.com/karlos37" 
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-xs text-zinc-500 font-mono">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Vedansh Surjan. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            Edge deployed on Cloudflare Pages
          </div>
        </div>
      </footer>

    </div>
  )
}
