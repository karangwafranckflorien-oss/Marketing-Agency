
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Target, 
  Layers, 
  Cpu, 
  BarChart3, 
  Search, 
  Settings, 
  Rocket,
  CheckCircle2
} from 'lucide-react';

const roadmapSteps = [
  {
    phase: "Phase 01: Audit",
    title: "Market Intelligence",
    details: "Deep analysis of your current digital footprint and competitor landscape.",
    icon: <Search className="text-[#357FA6]" size={24} />
  },
  {
    phase: "Phase 02: Engineering",
    title: "Asset Production",
    details: "AI-driven content creation and strategic narrative development.",
    icon: <Settings className="text-[#CE5826]" size={24} />
  },
  {
    phase: "Phase 03: Deployment",
    title: "Market Entry",
    details: "Coordinated omni-channel release for maximum impact and reach.",
    icon: <Rocket className="text-[#357FA6]" size={24} />
  },
  {
    phase: "Phase 04: Optimization",
    title: "Elite Scaling",
    details: "Data-driven performance monitoring and continuous growth engineering.",
    icon: <BarChart3 className="text-[#CE5826]" size={24} />
  }
];

const AgencyOverview: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      {/* Executive Summary Section */}
      <div className="mb-40 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 px-8 py-3 bg-slate-50 rounded-full border border-slate-100 mb-8">
            <ShieldCheck size={18} className="text-[#357FA6]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Executive Overview</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter text-white leading-[0.9]">
            The Future of <br />
            <span className="text-[#CE5826]">Marketing Engineering.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-white text-lg font-bold leading-relaxed uppercase tracking-widest opacity-90">
              Arise AI Marketing Agency, a subsidiary of <span className="text-[#357FA6]">Arise Digital Solutions Ltd. (Rwanda)</span>, is a next-generation marketing firm that leverages cutting-edge Artificial Intelligence to deliver "Elite Proof" results.
            </p>
            <p className="text-slate-300 text-sm font-medium leading-relaxed uppercase tracking-widest">
              We bridge the gap between traditional marketing and the future of digital engagement by automating high-fidelity content creation, data-driven strategy, and multi-channel deployment. Our mission is to provide premium, cinematic marketing solutions at a fraction of the traditional cost and time.
            </p>
          </div>
          <div className="p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#CE5826]/20 rounded-full blur-3xl" />
            <h4 className="text-xl font-black mb-6 uppercase tracking-tighter text-[#CE5826]">Our Mission</h4>
            <p className="text-slate-300 text-sm font-medium leading-relaxed uppercase tracking-widest italic">
              "To empower visionaries with the world's most advanced AI tools, ensuring every brand we touch becomes a verified market authority."
            </p>
          </div>
        </div>
      </div>

      {/* Elite Proof Section */}
      <div className="mb-40">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 px-8 py-3 bg-slate-50 rounded-full border border-slate-100 mb-8">
            <ShieldCheck size={18} className="text-[#357FA6]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">The Elite Standard</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase tracking-tighter text-white leading-[0.85]">
            Our <span className="text-[#CE5826]">Elite</span> Proof.
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg font-bold uppercase tracking-widest leading-relaxed opacity-90">
            We don't just market; we document excellence. Our "Elite Proof" framework ensures every asset we create serves as a verified record of your brand's authority.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Cinematic Documentation",
              desc: "High-end visual storytelling that captures the soul of your business.",
              icon: <Zap className="text-[#357FA6]" />
            },
            {
              title: "AI-Enhanced Precision",
              desc: "Leveraging cutting-edge AI to optimize every pixel and word for conversion.",
              icon: <Cpu className="text-[#CE5826]" />
            },
            {
              title: "Strategic Authority",
              desc: "Positioning your brand as the undisputed leader in your specific sector.",
              icon: <Target className="text-[#357FA6]" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                {item.icon}
              </div>
              <h4 className="text-xl font-black mb-4 uppercase text-white tracking-tight">{item.title}</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Architecture Section */}
      <div className="mb-40">
        <div className="flex items-center justify-center md:justify-start space-x-8 mb-16">
          <div className="w-20 h-2 bg-[#357FA6] rounded-full" />
          <h3 className="text-3xl font-black uppercase tracking-tighter text-white">Service Architecture</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Agency Services",
              items: ["Social Media Management", "Cinematic Video Production", "Brand Identity Design"],
              color: "text-[#CE5826]"
            },
            {
              title: "Arise AI Assistant",
              items: ["24/7 Lead Generation", "Intelligent Customer Support", "Multilingual Engagement"],
              color: "text-[#357FA6]"
            },
            {
              title: "Training Program",
              items: ["AI Tool Mastery", "Capacity Building", "Strategic Handover"],
              color: "text-[#CE5826]"
            }
          ].map((service, i) => (
            <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-sm">
              <h4 className={`text-xl font-black mb-8 uppercase tracking-tight ${service.color}`}>{service.title}</h4>
              <ul className="space-y-4">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center space-x-3">
                    <CheckCircle2 size={14} className="text-slate-500" />
                    <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="mb-40">
        <div className="flex items-center justify-center md:justify-start space-x-8 mb-16">
          <div className="w-20 h-2 bg-[#CE5826] rounded-full" />
          <h3 className="text-3xl font-black uppercase tracking-tighter text-white">Implementation Roadmap</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapSteps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[3rem] bg-slate-900 text-white overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -z-10 group-hover:bg-[#357FA6]/20 transition-all duration-500" />
              <div className="text-[10px] font-black text-[#CE5826] uppercase tracking-[0.4em] mb-6">{step.phase}</div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h4 className="text-lg font-black mb-4 uppercase tracking-tight">{step.title}</h4>
              <p className="text-slate-400 text-xs font-medium leading-relaxed uppercase tracking-widest">{step.details}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="p-16 md:p-24 rounded-[5rem] bg-white/5 border-2 border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#357FA6]/5 rounded-full blur-[120px] -z-10" />
        <div className="text-center mb-16">
          <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-6">Our Elite Tech Stack</h3>
          <p className="text-slate-400 text-xs font-black uppercase tracking-[0.5em]">Powered by the world's most advanced AI</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Gemini 1.5 Pro",
            "Sora 2.0",
            "Midjourney v6",
            "Claude 3.5 Sonnet",
            "Adobe Firefly",
            "ElevenLabs",
            "D-ID",
            "Runway Gen-3"
          ].map((tech, i) => (
            <div key={i} className="px-8 py-4 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-3 hover:border-[#357FA6]/30 transition-all cursor-default">
              <CheckCircle2 size={14} className="text-[#357FA6]" />
              <span className="text-[11px] font-black text-white uppercase tracking-widest">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgencyOverview;
