
import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Video, Clock, MessageSquare, TrendingUp, Globe, CheckCircle2, Briefcase, ChevronRight } from 'lucide-react';

const singleItems = [
  {
    type: 'Elite Image',
    price: '2,500 RWF',
    details: 'AI-Enhanced photography and cinematic graphic design for luxury market positioning.',
    icon: <ImageIcon className="w-10 h-10 text-[#CE5826]" />,
    unit: 'Per Single Asset'
  },
  {
    type: '8 Sec Promo',
    price: '10,000 RWF',
    details: 'High-impact TikTok, Instagram Reels, or Status documentation for rapid engagement.',
    icon: <Video className="w-10 h-10 text-[#357FA6]" />,
    unit: 'Vertical Format'
  },
  {
    type: 'Premium Production',
    price: '20,000 RWF',
    details: 'Complete brand narrative content from 8 seconds up to 3 minutes of elite footage.',
    icon: <Clock className="w-10 h-10 text-[#CE5826]" />,
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
    icon: <MessageSquare className="w-8 h-8 text-[#357FA6]" />,
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
    icon: <TrendingUp className="w-8 h-8 text-[#CE5826]" />,
    color: 'border-[#CE5826] bg-orange-50/20 shadow-2xl shadow-orange-500/10',
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
    icon: <Globe className="w-8 h-8 text-[#357FA6]" />,
    color: 'border-[#357FA6] bg-blue-50/20'
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
        <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase tracking-tighter text-slate-900 leading-[0.85]">
          Elite <span className="text-[#CE5826]">Rates.</span>
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg font-bold uppercase tracking-widest leading-relaxed mb-12 opacity-90">
          Our investment tiers are strategically engineered to scale with your brand's ambitions. From high-impact single assets to comprehensive omni-channel dominance, we provide the elite infrastructure required for market leadership.
        </p>
        
        <div className="flex flex-col items-center">
          <div className="inline-block px-12 py-4 bg-orange-50 text-[#CE5826] text-sm font-black rounded-full uppercase tracking-[0.5em] border border-orange-200 shadow-sm">
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
          <div className="w-20 h-2 bg-[#357FA6] rounded-full" />
          <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Direct Production</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {singleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-14 rounded-[4rem] bg-white border border-slate-100 hover:border-[#CE5826] transition-all duration-500 group shadow-sm hover:shadow-2xl"
            >
              <div className="mb-10 p-8 bg-slate-50 rounded-[2.5rem] group-hover:bg-[#CE5826]/10 transition-all duration-500 w-fit transform group-hover:-translate-y-2">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black mb-3 uppercase text-slate-900 tracking-tight">{item.type}</h4>
              <div className="text-4xl font-black mb-10 text-[#CE5826]">{item.price}</div>
              <p className="text-[12px] font-black text-[#357FA6] uppercase tracking-[0.5em] mb-10 border-t border-blue-50 pt-6 w-full">{item.unit}</p>
              <p className="text-base text-slate-600 font-bold leading-relaxed mb-12 min-h-[80px]">{item.details}</p>
              <a 
                href="https://wa.me/250794785167"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] hover:bg-[#CE5826] transition-all shadow-xl active:scale-95"
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
          <div className="w-20 h-2 bg-[#CE5826] rounded-full" />
          <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Elite Retainers</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {monthlyPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 lg:p-14 rounded-[3.5rem] lg:rounded-[4.5rem] border-2 transition-all duration-700 relative flex flex-col ${pkg.color} ${pkg.featured ? 'scale-100 lg:scale-105 z-10' : 'bg-white shadow-sm'}`}
            >
              {pkg.featured && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2.5 bg-[#CE5826] text-white rounded-full text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl whitespace-nowrap">
                  Market Leader's Choice
                </div>
              )}
              <div className="flex items-center justify-between mb-10 lg:mb-12">
                <div className="p-5 lg:p-6 bg-white rounded-[1.5rem] lg:rounded-[2rem] shadow-xl border border-slate-50">{pkg.icon}</div>
                <div className="text-right">
                  <span className="text-[10px] lg:text-[12px] font-black text-slate-400 uppercase tracking-widest block mb-1 lg:mb-2">Starts At</span>
                  <span className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter">{pkg.price}</span>
                </div>
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8 lg:mb-10">{pkg.name}</h4>
              <ul className="space-y-6 lg:space-y-8 mb-12 lg:mb-16 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-4 lg:space-x-5">
                    <CheckCircle2 size={20} className="text-[#357FA6] mt-1 flex-shrink-0" />
                    <span className="text-sm lg:text-[16px] font-black text-slate-900 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/250794785167"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full py-6 lg:py-8 rounded-[2rem] lg:rounded-[2.5rem] font-black text-xs lg:text-sm uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 ${pkg.featured ? 'bg-[#CE5826] text-white hover:bg-slate-900' : 'bg-slate-900 text-white hover:bg-[#357FA6]'}`}
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#357FA6]/10 rounded-full blur-[120px] -z-10" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="lg:w-3/5 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-6 px-8 py-4 bg-white/5 rounded-full border border-white/10">
              <Briefcase size={20} className="text-[#CE5826]" />
              <span className="text-xs font-black uppercase tracking-[0.6em]">Enterprise Level Documentation</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
              Custom <br />
              <span className="text-[#CE5826]">Excellence.</span>
            </h3>
            <p className="text-slate-400 text-base md:text-xl font-medium leading-relaxed uppercase tracking-widest max-w-2xl opacity-90">
              For institutions requiring <span className="text-white">Full Market Strategy</span>, 
              Global <span className="text-white">Brand Audits</span>, or <span className="text-[#357FA6]">Omni-Channel Mastery</span>.
            </p>
          </div>
          <div className="lg:w-2/5 flex flex-col items-center justify-center w-full">
            <a 
              href="https://wa.me/250794785167"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full py-8 md:py-10 bg-white text-slate-900 hover:bg-[#CE5826] hover:text-white rounded-[2.5rem] font-black text-sm lg:text-base uppercase tracking-[0.2em] transition-all text-center shadow-2xl active:scale-95 flex items-center justify-center space-x-4"
            >
              <span>Consultation</span>
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <p className="mt-12 text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] opacity-80 text-center">DOMINATING THE AFRICAN DIGITAL SPACE</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
