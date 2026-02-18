
import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Hotel, School, Building2, Heart, Zap, ArrowRight, Eye, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  onSelectIndustry: (category: string) => void;
}

const sectors = [
  { name: 'Restaurants', icon: <Utensils className="text-[#0077FF]" size={32} />, delay: 0 },
  { name: 'Hotels', icon: <Hotel className="text-[#FF7F00]" size={32} />, delay: 0.1 },
  { name: 'Schools', icon: <School className="text-[#0077FF]" size={32} />, delay: 0.2 },
  { name: 'Companies', icon: <Building2 className="text-[#FF7F00]" size={32} />, delay: 0.3 },
  { name: 'NGOs', icon: <Heart className="text-[#0077FF]" size={32} />, delay: 0.4 },
  { name: 'Any Business', icon: <Zap className="text-[#FF7F00]" size={32} />, delay: 0.5 },
];

const Services: React.FC<ServicesProps> = ({ onSelectIndustry }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-24">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <ShieldCheck size={20} className="text-[#FF7F00]" />
          <span className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Sectors of dominance</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter text-slate-900 leading-tight">
          Industries We <br />
          <span className="text-[#0077FF]">Elevate.</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-medium uppercase tracking-[0.2em] leading-relaxed">
          Select your industry to explore verified transformation records.
        </p>
        <div className="w-24 h-1.5 bg-[#FF7F00] mx-auto mt-12 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
        {sectors.map((sector, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sector.delay, duration: 0.6 }}
            className="group relative flex flex-col items-center p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#0077FF]/30 transition-all duration-500 cursor-pointer text-center"
            onClick={() => onSelectIndustry(sector.name)}
          >
            <div className="mb-8 p-6 bg-slate-50 rounded-3xl group-hover:bg-white group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-3">
              {sector.icon}
            </div>
            <span className="text-xs font-black uppercase text-slate-900 tracking-[0.4em] mb-6">
              {sector.name}
            </span>
            <div className="mt-auto flex items-center space-x-2 text-[#FF7F00] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <span className="text-[10px] font-black uppercase tracking-widest">Explore Proof</span>
              <Eye size={12} />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-12 md:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden text-center max-w-5xl mx-auto border border-white/5"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0077FF]/10 rounded-full blur-[100px] -z-10" />
        <h3 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-tight">
          Elite <span className="text-[#FF7F00]">Proof</span> for Elite Visionaries.
        </h3>
        <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-14 uppercase tracking-widest opacity-80">
          We don't just speak results; we document excellence. Join the league of brands dominating the digital landscape.
        </p>
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center space-x-4 px-12 py-6 bg-[#0077FF] text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all shadow-xl active:scale-95"
        >
          <span>Review Investment Plans</span>
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export default Services;
