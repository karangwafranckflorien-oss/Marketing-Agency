
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-6 py-2 rounded-full border border-slate-100 bg-white/50 backdrop-blur-md shadow-sm mb-10"
        >
          <Sparkles size={16} className="text-[#FF7F00]" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-slate-500">ARISE AI MARKETING AGENCY CROSS AFRICA</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-black mb-10 leading-[0.95] tracking-tighter text-slate-900"
        >
          Everyone Markets. <br />
          We make it <span className="text-[#0077FF]">Elite.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-600 max-w-4xl mx-auto mb-14 leading-relaxed font-light"
        >
          Helping <strong>Hotels, Restaurants, Schools, and Visionaries</strong> dominate the digital world. Turn your brand into a masterpiece with <strong>African Excellence.</strong>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
        >
          <a href="#pricing" className="group px-12 py-6 bg-[#FF7F00] text-white font-black rounded-2xl shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 hover:scale-105 active:scale-95">
            <span className="flex items-center">
                SEE PRICING <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <div className="px-12 py-4 glass-panel border border-slate-100 text-slate-700 rounded-2xl flex flex-col items-center justify-center min-w-[240px]">
            <div className="flex items-center space-x-2 mb-1">
              <Phone size={14} className="text-[#0077FF]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Call Us</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">+250 795 590 127</span>
          </div>
        </motion.div>
      </div>
      
      {/* Refined Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-40 -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-50 rounded-full blur-[120px] opacity-40 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,119,255,0.01)_0%,transparent_70%)] -z-10" />
    </div>
  );
};

export default Hero;
