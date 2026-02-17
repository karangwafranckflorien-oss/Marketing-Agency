
import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Video, Clock, MessageSquare, Instagram, Send, ChevronRight, Zap, Briefcase, CheckCircle2, Layout, TrendingUp, Globe } from 'lucide-react';

const singleItems = [
  {
    type: 'High-End Image',
    price: '2,500 RWF',
    details: 'AI-Enhanced photography and elite graphic design for social media.',
    icon: <ImageIcon className="w-8 h-8 text-[#FF7F00]" />,
    unit: 'Per Single Image'
  },
  {
    type: '8 Sec Promo',
    price: '10,000 RWF',
    details: 'Perfect for quick TikTok, Instagram Reels, or Status updates.',
    icon: <Video className="w-8 h-8 text-[#0077FF]" />,
    unit: '8 Second Video'
  },
  {
    type: 'Premium Content',
    price: '20,000 RWF',
    details: 'Comprehensive content from 8 seconds up to 3 minutes.',
    icon: <Clock className="w-8 h-8 text-[#FF7F00]" />,
    unit: 'Up to 3 Minutes'
  }
];

const monthlyPackages = [
  {
    name: 'Starter / Engage',
    price: '230,000 RWF',
    features: [
      '2 Platforms Management',
      '12 Elite Posts / Month',
      'Community Management',
      'Basic Performance Analytics'
    ],
    icon: <MessageSquare className="w-6 h-6 text-[#0077FF]" />,
    color: 'border-slate-100'
  },
  {
    name: 'Grow',
    price: '400,000 RWF',
    features: [
      '3 Platforms Management',
      '~20 Elite Posts / Month',
      'Basic Video Content',
      'Growth & Viral Strategies',
      'Competitor Monitoring'
    ],
    icon: <TrendingUp className="w-6 h-6 text-[#FF7F00]" />,
    color: 'border-[#FF7F00] bg-orange-50/10',
    featured: true
  },
  {
    name: 'Scale / Advanced',
    price: '690,000 RWF',
    features: [
      '4+ Platforms Management',
      '30+ Elite Posts / Month',
      'Advanced Content Production',
      'Paid Ad Management',
      'Monthly Strategic Consulting'
    ],
    icon: <Globe className="w-6 h-6 text-[#0077FF]" />,
    color: 'border-[#0077FF] bg-blue-50/10'
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-slate-900">Elite <span className="text-[#FF7F00]">Investment</span></h2>
        <p className="text-slate-800 max-w-2xl mx-auto text-lg font-bold leading-relaxed uppercase tracking-widest">Pricing for Visionaries & Market Leaders</p>
        <div className="flex flex-col items-center">
          <div className="mt-8 inline-block px-10 py-3.5 bg-orange-50 text-[#FF7F00] text-sm font-black rounded-full uppercase tracking-[0.4em] border border-orange-200 shadow-sm">
            RWF & USD Rates (Variable Market Conversion)
          </div>
          <p className="mt-5 text-xs font-black text-slate-400 uppercase tracking-widest max-w-lg leading-relaxed">
            *Conversion standard: 1 RWF ≈ 0.000688 USD. Note: Exchange rates fluctuate daily. Final billing is processed in RWF.
          </p>
        </div>
      </div>

      {/* Single Asset Section */}
      <div className="mb-24">
        <div className="flex items-center space-x-6 mb-12">
          <div className="w-16 h-1 bg-[#0077FF] rounded-full" />
          <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Single Asset Production</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {singleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-[#FF7F00] transition-all duration-500 group"
            >
              <div className="mb-8 p-6 bg-slate-50 rounded-3xl group-hover:bg-[#FF7F00]/10 transition-colors w-fit">{item.icon}</div>
              <h4 className="text-xl font-black mb-2 uppercase text-slate-900 tracking-tight">{item.type}</h4>
              <div className="text-3xl font-black mb-6 text-[#FF7F00]">{item.price}</div>
              <p className="text-[13px] font-black text-[#0077FF] uppercase tracking-[0.4em] mb-8 border-t border-blue-50 pt-4 w-full">{item.unit}</p>
              <p className="text-base text-slate-700 font-bold leading-relaxed mb-10">{item.details}</p>
              <a 
                href="https://wa.me/250794785167"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] hover:bg-[#FF7F00] transition-all"
              >
                Order Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Monthly Management Section */}
      <div className="mb-32">
        <div className="flex items-center space-x-6 mb-12">
          <div className="w-16 h-1 bg-[#FF7F00] rounded-full" />
          <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Monthly Social Media Management</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {monthlyPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-12 rounded-[4rem] border-2 transition-all duration-500 relative flex flex-col ${pkg.color} ${pkg.featured ? 'scale-105 z-10' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2.5 bg-[#FF7F00] text-white rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="flex items-center justify-between mb-10">
                <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-50">{pkg.icon}</div>
                <div className="text-right">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-1">Starting At</span>
                  <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8">{pkg.name}</h4>
              <ul className="space-y-6 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle2 size={18} className="text-[#0077FF] mt-1 flex-shrink-0" />
                    <span className="text-[15px] font-bold text-slate-700 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/250794785167"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full py-8 rounded-[2.5rem] font-black text-sm uppercase tracking-[0.3em] transition-all ${pkg.featured ? 'bg-[#FF7F00] text-white hover:bg-slate-900' : 'bg-slate-900 text-white hover:bg-[#0077FF]'}`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Special Requirements Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-32 p-12 md:p-16 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden border border-white/5 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[100px]" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-3/5 space-y-8">
            <div className="inline-flex items-center space-x-4 px-6 py-3 bg-white/5 rounded-full border border-white/10">
              <Briefcase size={18} className="text-[#FF7F00]" />
              <span className="text-xs font-black uppercase tracking-[0.4em]">Enterprise Solutions</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
              Special <span className="text-[#FF7F00]">Requirements?</span>
            </h3>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed uppercase tracking-widest text-left max-w-2xl opacity-90">
              For organizations requiring <span className="text-white">Full Social Media Strategy</span>, 
              custom <span className="text-white">Elite Brand Identity</span>, or <span className="text-[#0077FF]">Cross-Platform Ad Campaigns</span>, 
              we provide customized enterprise packages.
            </p>
          </div>
          <div className="md:w-2/5 flex flex-col items-center justify-center w-full">
            <a 
              href="https://wa.me/250794785167"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-8 md:py-10 bg-[#FF7F00] hover:bg-white hover:text-slate-900 text-white rounded-[3rem] font-black text-sm lg:text-base uppercase tracking-[0.4em] transition-all text-center shadow-lg active:scale-95"
            >
              Discuss Custom Project
            </a>
            <p className="mt-8 text-xs font-black text-[#FF7F00] uppercase tracking-[0.6em] opacity-80 text-center">RWANDAN EXCELLENCE ON GLOBAL STANDARDS</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
