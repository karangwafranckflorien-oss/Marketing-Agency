
import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Video, Clock, MessageSquare, TrendingUp, Globe, CheckCircle2, Briefcase, ChevronRight } from 'lucide-react';

const singleItems = [
  {
    type: 'Elite Image',
    price: '2,500 RWF',
    details: 'AI-Enhanced photography and cinematic graphic design for luxury market positioning.',
    icon: <ImageIcon className="w-10 h-10 text-[#FF7F00]" />,
    unit: 'Per Single Asset'
  },
  {
    type: '8 Sec Promo',
    price: '10,000 RWF',
    details: 'High-impact TikTok, Instagram Reels, or Status documentation for rapid engagement.',
    icon: <Video className="w-10 h-10 text-[#0077FF]" />,
    unit: 'Vertical Format'
  },
  {
    type: 'Premium Production',
    price: '20,000 RWF',
    details: 'Complete brand narrative content from 8 seconds up to 3 minutes of elite footage.',
    icon: <Clock className="w-10 h-10 text-[#FF7F00]" />,
    unit: 'Full Production'
  }
];

const monthlyPackages = [
  {
    name: 'Starter / Engage',
    price: '230,000 RWF',
    features: [
      '2 Platforms Management',
      '12 Elite Posts / Month',
      'Basic Community Management',
      'Monthly Growth Reports'
    ],
    icon: <MessageSquare className="w-8 h-8 text-[#0077FF]" />,
    color: 'border-slate-100'
  },
  {
    name: 'Grow / Viral',
    price: '400,000 RWF',
    features: [
      '3 Platforms Management',
      '~20 Elite Posts / Month',
      'Monthly Video Content',
      'Viral Strategy Engineering',
      'Competitor Market Monitoring'
    ],
    icon: <TrendingUp className="w-8 h-8 text-[#FF7F00]" />,
    color: 'border-[#FF7F00] bg-orange-50/20 shadow-2xl shadow-orange-500/10',
    featured: true
  },
  {
    name: 'Scale / Advanced',
    price: '690,000 RWF',
    features: [
      '4+ Platforms Management',
      '30+ Elite Posts / Month',
      'Advanced Multi-Media Production',
      'Direct Ad Account Management',
      'Strategic Brand Consulting'
    ],
    icon: <Globe className="w-8 h-8 text-[#0077FF]" />,
    color: 'border-[#0077FF] bg-blue-50/20'
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-24">
        <div className="inline-flex items-center space-x-4 px-8 py-3 bg-slate-50 rounded-full border border-slate-100 mb-8">
          <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400">Strategic Investment</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black mb-10 uppercase tracking-tighter text-slate-900 leading-[0.85]">
          Elite <span className="text-[#FF7F00]">Rates.</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium uppercase tracking-[0.3em] leading-relaxed mb-12">
          Engineered for brands that prioritize growth and African excellence.
        </p>
        
        <div className="flex flex-col items-center">
          <div className="inline-block px-12 py-4 bg-orange-50 text-[#FF7F00] text-sm font-black rounded-full uppercase tracking-[0.5em] border border-orange-200 shadow-sm">
            RWF (Rwanda Francs) Rates
          </div>
          <p className="mt-8 text-[11px] font-black text-slate-400 uppercase tracking-widest max-w-2xl leading-relaxed opacity-60">
            *Conversion standard: 1 RWF ≈ 0.000688 USD. Exchange rates are monitored daily. <br />
            Final billing is processed in RWF for transparency.
          </p>
        </div>
      </div>

      {/* Single Asset Section */}
      <div className="mb-32">
        <div className="flex items-center justify-center md:justify-start space-x-8 mb-16">
          <div className="w-20 h-2 bg-[#0077FF] rounded-full" />
          <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Direct Production</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {singleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-14 rounded-[4rem] bg-white border border-slate-100 hover:border-[#FF7F00] transition-all duration-500 group shadow-sm hover:shadow-2xl"
            >
              <div className="mb-10 p-8 bg-slate-50 rounded-[2.5rem] group-hover:bg-[#FF7F00]/10 transition-all duration-500 w-fit transform group-hover:-translate-y-2">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black mb-3 uppercase text-slate-900 tracking-tight">{item.type}</h4>
              <div className="text-4xl font-black mb-10 text-[#FF7F00]">{item.price}</div>
              <p className="text-[12px] font-black text-[#0077FF] uppercase tracking-[0.5em] mb-10 border-t border-blue-50 pt-6 w-full">{item.unit}</p>
              <p className="text-base text-slate-600 font-bold leading-relaxed mb-12 min-h-[80px]">{item.details}</p>
              <a 
                href="https://wa.me/250794785167"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] hover:bg-[#FF7F00] transition-all shadow-xl active:scale-95"
              >
                Order Asset
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Monthly Management Section */}
      <div className="mb-40">
        <div className="flex items-center justify-center md:justify-start space-x-8 mb-16">
          <div className="w-20 h-2 bg-[#FF7F00] rounded-full" />
          <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Elite Retainers</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {monthlyPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-14 rounded-[4.5rem] border-2 transition-all duration-700 relative flex flex-col ${pkg.color} ${pkg.featured ? 'scale-105 z-10' : 'bg-white shadow-sm'}`}
            >
              {pkg.featured && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-10 py-3 bg-[#FF7F00] text-white rounded-full text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
                  Market Leader's Choice
                </div>
              )}
              <div className="flex items-center justify-between mb-12">
                <div className="p-6 bg-white rounded-[2rem] shadow-xl border border-slate-50">{pkg.icon}</div>
                <div className="text-right">
                  <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest block mb-2">Starts At</span>
                  <span className="text-4xl font-black text-slate-900 tracking-tighter">{pkg.price}</span>
                </div>
              </div>
              <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-10">{pkg.name}</h4>
              <ul className="space-y-8 mb-16 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-5">
                    <CheckCircle2 size={22} className="text-[#0077FF] mt-1 flex-shrink-0" />
                    <span className="text-[16px] font-bold text-slate-700 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/250794785167"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full py-10 rounded-[3rem] font-black text-xs uppercase tracking-[0.5em] transition-all shadow-2xl active:scale-95 ${pkg.featured ? 'bg-[#FF7F00] text-white hover:bg-slate-900' : 'bg-slate-900 text-white hover:bg-[#0077FF]'}`}
              >
                Secure Retainer
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enterprise / Special Requirements */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto p-16 md:p-24 rounded-[5rem] bg-slate-900 text-white relative overflow-hidden border border-white/5 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0077FF]/10 rounded-full blur-[120px] -z-10" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="lg:w-3/5 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-6 px-8 py-4 bg-white/5 rounded-full border border-white/10">
              <Briefcase size={20} className="text-[#FF7F00]" />
              <span className="text-xs font-black uppercase tracking-[0.6em]">Enterprise Level Documentation</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Custom <br />
              <span className="text-[#FF7F00]">Excellence.</span>
            </h3>
            <p className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed uppercase tracking-widest max-w-2xl opacity-90">
              For institutions requiring <span className="text-white">Full Market Strategy</span>, 
              Global <span className="text-white">Brand Audits</span>, or <span className="text-[#0077FF]">Omni-Channel Mastery</span>.
            </p>
          </div>
          <div className="lg:w-2/5 flex flex-col items-center justify-center w-full">
            <a 
              href="https://wa.me/250794785167"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full py-10 md:py-12 bg-white text-slate-900 hover:bg-[#FF7F00] hover:text-white rounded-[3.5rem] font-black text-sm lg:text-lg uppercase tracking-[0.6em] transition-all text-center shadow-2xl active:scale-95 flex items-center justify-center space-x-4"
            >
              <span>Consultation</span>
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <p className="mt-12 text-[11px] font-black text-slate-500 uppercase tracking-[0.7em] opacity-80 text-center">DOMINATING THE AFRICAN DIGITAL SPACE</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
