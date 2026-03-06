
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-48 pb-24 bg-[#355271]">
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-[6.5rem] font-black mb-12 leading-[0.9] tracking-tighter text-white"
        >
          Everyone Markets. <br />
          We make it <span className="text-[#357FA6]">Elite.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-lg text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed font-light uppercase tracking-[0.2em] opacity-90"
        >
          Empowering <span className="text-white font-black">Visionaries, Hotels, and Schools</span> with Global Standards of Rwandan Excellence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        >
          <a href="#pricing" className="group px-10 py-5 bg-[#CE5826] text-white font-black rounded-2xl shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
            <span className="flex items-center">
                SEE PRICING <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </span>
          </a>

          <a href="/training" className="group px-10 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-2xl shadow-slate-900/10 transition-all duration-300 hover:bg-[#357FA6] hover:scale-105 active:scale-95 text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
            <span className="flex items-center">
                JOIN TRAINING <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </span>
          </a>
          
          <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl flex flex-col items-center justify-center min-w-[220px] shadow-sm">
            <div className="flex items-center space-x-3 mb-1">
              <Phone size={12} className="text-[#357FA6]" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Consultation</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-white">+250 794 785 167</span>
          </div>
        </motion.div>
      </div>
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default Hero;
