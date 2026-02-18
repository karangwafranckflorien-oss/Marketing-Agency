
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-48 pb-24">
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full border border-slate-100 bg-white/40 backdrop-blur-xl shadow-sm mb-12"
        >
          <Sparkles size={16} className="text-[#FF7F00]" />
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500">ARISE AI • THE PEAK OF AFRICAN MARKETING</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl lg:text-[7.5rem] font-black mb-12 leading-[0.9] tracking-tighter text-slate-900"
        >
          Everyone Markets. <br />
          We make it <span className="text-[#0077FF]">Elite.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-xl text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed font-light uppercase tracking-[0.3em] opacity-90"
        >
          Empowering <span className="text-slate-900 font-black">Visionaries, Hotels, and Schools</span> with Global Standards of Rwandan Excellence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10"
        >
          <a href="#pricing" className="group px-12 py-6 bg-[#FF7F00] text-white font-black rounded-2xl shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 text-xs tracking-[0.4em] uppercase">
            <span className="flex items-center">
                SEE PRICING MODELS <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </span>
          </a>
          
          <div className="px-10 py-5 bg-white/80 backdrop-blur-md border border-slate-100 text-slate-700 rounded-2xl flex flex-col items-center justify-center min-w-[260px] shadow-sm">
            <div className="flex items-center space-x-3 mb-1.5">
              <Phone size={14} className="text-[#0077FF]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Direct Consultation</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">+250 794 785 167</span>
          </div>
        </motion.div>
      </div>
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default Hero;
