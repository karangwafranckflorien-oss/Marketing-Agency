
import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Hotel, School, Building2, Heart, Zap, ArrowRight, Eye } from 'lucide-react';

interface ServicesProps {
  onSelectIndustry: (category: string) => void;
}

const sectors = [
  { name: 'Restaurants', icon: <Utensils className="text-[#0077FF]" />, delay: 0 },
  { name: 'Hotels', icon: <Hotel className="text-[#FF7F00]" />, delay: 0.1 },
  { name: 'Schools', icon: <School className="text-[#0077FF]" />, delay: 0.2 },
  { name: 'Companies', icon: <Building2 className="text-[#FF7F00]" />, delay: 0.3 },
  { name: 'NGOs', icon: <Heart className="text-[#0077FF]" />, delay: 0.4 },
  { name: 'Any Business', icon: <Zap className="text-[#FF7F00]" />, delay: 0.5 },
];

const Services: React.FC<ServicesProps> = ({ onSelectIndustry }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight text-slate-900">Industries We <span className="text-[#0077FF]">Elevate</span></h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">Select an industry to see our verified proof of transformation.</p>
        <div className="w-20 h-1 bg-[#FF7F00] mx-auto mt-8" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {sectors.map((sector, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sector.delay, duration: 0.5 }}
            className="flex flex-col items-center p-6 rounded-[2.5rem] glass-panel justify-center card-hover transition-all duration-500 group cursor-pointer border border-slate-100"
            onClick={() => onSelectIndustry(sector.name)}
          >
            <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
              {sector.icon}
            </div>
            <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest text-center mb-3">
              {sector.name}
            </span>
            <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-[8px] font-black text-[#FF7F00] uppercase tracking-tighter">View Proof</span>
              <Eye size={10} className="text-[#FF7F00]" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-10 md:p-16 rounded-[3rem] bg-white border border-slate-100 shadow-sm text-center max-w-4xl mx-auto"
      >
        <h3 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight text-slate-900">
          Evidence-Based <span className="text-[#FF7F00]">Excellence.</span>
        </h3>
        <p className="text-slate-600 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
          We don't just promise results. We deliver tangible evidence of brand growth for visionaries across the continent.
        </p>
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center space-x-4 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#0077FF] transition-all shadow-xl"
        >
          <span>See Pricing Models</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export default Services;
