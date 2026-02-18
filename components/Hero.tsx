
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12">
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-slate-100 bg-white/50 backdrop-blur-md shadow-sm mb-4"
        >
          <Sparkles size={12} className="text-[#FF7F00]" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">ARISE AI MARKETING AGENCY CROSS AFRICA</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-black mb-6 leading-[0.85] tracking-tighter text-slate-900"
        >
          Everyone Markets. <br />
          We make it <span className="text-[#0077FF]">Elite.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light uppercase tracking-widest opacity-80"
        >
          Helping <strong>Hotels, Restaurants, Schools, and Visionaries</strong> dominate the digital world. African Excellence for global standards.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#pricing" className="group px-10 py-5 bg-[#FF7F00] text-white font-black rounded-xl shadow-xl shadow-orange-500/10 transition-all duration-300 hover:shadow-orange-500/30 hover:scale-105 active:scale-95 text-[11px] tracking-[0.2em] uppercase">
            <span className="flex items-center">
                SEE PRICING <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </span>
          </a>
          
          <div className="px-8 py-4 glass-panel border border-slate-100 text-slate-700 rounded-xl flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-0.5">
              <Phone size={12} className="text-[#0077FF]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Line</span>
            </div>
            <span className="text-base font-black tracking-tighter text-slate-900">+250 794 785 167</span>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-20 -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-50 rounded-full blur-[100px] opacity-20 -z-10" />
    </div>
  );
};

export default Hero;
