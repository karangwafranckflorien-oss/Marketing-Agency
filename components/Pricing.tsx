
import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Video, Clock, MessageSquare, Instagram, Send, ChevronRight, Zap, Briefcase } from 'lucide-react';

const pricingItems = [
  {
    type: 'High-End Image',
    price: '1,000 RWF',
    details: 'AI-Enhanced photography and elite graphic design for social media.',
    icon: <ImageIcon className="w-8 h-8 text-[#FF7F00]" />,
    unit: 'Per Single Image'
  },
  {
    type: '8 Sec Promo',
    price: '5,000 RWF',
    details: 'Perfect for quick TikTok, Instagram Reels, or Status updates.',
    icon: <Video className="w-8 h-8 text-[#0077FF]" />,
    unit: '8 Second Video'
  },
  {
    type: 'Premium Content',
    price: '15,000 RWF',
    details: 'Comprehensive content from 8 seconds up to 1 minute.',
    icon: <Clock className="w-8 h-8 text-[#FF7F00]" />,
    unit: '8s to 1 Minute'
  },
  {
    type: 'Monthly Excellence',
    price: '150,000 RWF',
    details: 'Full monthly content management, strategy, and 24/7 priority support.',
    icon: <Zap className="w-8 h-8 text-[#0077FF]" />,
    unit: 'Per Month Plan',
    featured: true
  }
];

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.03 1.64-.13.51-.12 1.05.03 1.56.24.78.84 1.45 1.56 1.81.42.21.89.31 1.36.3 1.25-.01 2.45-.73 3.01-1.84.18-.34.27-.72.27-1.11.02-4.14-.01-8.29.02-12.43z"/>
  </svg>
);

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-slate-900">Elite <span className="text-[#FF7F00]">Pricing</span></h2>
        <p className="text-slate-800 max-w-2xl mx-auto text-lg font-bold leading-relaxed">Cross Africa Premium Marketing Services</p>
        <div className="flex flex-col items-center">
          <div className="mt-6 inline-block px-8 py-2.5 bg-orange-50 text-[#FF7F00] text-[11px] font-black rounded-full uppercase tracking-[0.5em] border border-orange-200 shadow-sm">
            RWF & USD Rates (Variable Market Conversion)
          </div>
          <p className="mt-3 text-[9px] font-black text-slate-400 uppercase tracking-widest max-w-md leading-relaxed">
            *Conversion standard: 1 RWF ≈ 0.000688 USD. Note: Exchange rates fluctuate daily based on global market conditions. Final billing is processed in RWF.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
        {pricingItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-10 rounded-[3.5rem] glass-panel flex flex-col items-center text-center card-hover transition-all duration-500 group relative overflow-hidden border ${item.featured ? 'border-[#0077FF] ring-4 ring-blue-50' : 'border-slate-100'}`}
          >
            {item.featured && (
              <div className="absolute top-6 right-6">
                <Zap size={20} className="text-[#0077FF] animate-pulse" />
              </div>
            )}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-[#FF7F00]/5 transition-colors duration-500" />
            <div className="mb-8 p-6 bg-slate-50 rounded-[2rem] group-hover:bg-white transition-all duration-500 shadow-inner group-hover:shadow-lg border border-slate-50">{item.icon}</div>
            <h3 className="text-lg font-black mb-2 uppercase text-slate-900 tracking-tight">{item.type}</h3>
            <div className={`text-4xl font-black mb-6 ${item.featured ? 'text-[#FF7F00]' : 'text-[#0077FF]'}`}>{item.price}</div>
            
            <p className="text-[10px] font-black text-[#FF7F00] uppercase tracking-[0.5em] mb-8 border-t border-orange-50 pt-3 w-full">{item.unit}</p>
            <p className="text-sm text-slate-800 font-bold leading-relaxed mb-10 min-h-[48px]">{item.details}</p>
            <a 
              href="https://wa.me/250794785167"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto w-full py-7 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center text-center ${item.featured ? 'bg-[#0077FF] text-white hover:bg-slate-900 shadow-blue-500/20' : 'bg-slate-900 text-white hover:bg-[#FF7F00] shadow-slate-900/20'}`}
            >
              Order Via WhatsApp
            </a>
          </motion.div>
        ))}
      </div>

      {/* Special Requirements Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-32 p-10 md:p-14 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden group border border-white/5 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[100px] -z-0" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5 space-y-6">
            <div className="inline-flex items-center space-x-3 px-5 py-2 bg-white/5 rounded-full border border-white/10">
              <Briefcase size={14} className="text-[#FF7F00]" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em]">Enterprise Solutions</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
              Special <span className="text-[#FF7F00]">Requirements?</span>
            </h3>
            <p className="text-slate-300 text-sm md:text-base lg:text-lg font-medium leading-relaxed uppercase tracking-widest text-left max-w-2xl">
              For organizations requiring specialized content such as <span className="text-white">extended videos (10min+)</span>, 
              custom <span className="text-white">elite logos</span>, or full <span className="text-[#0077FF]">Social Media Management</span>, 
              we provide tailored strategic pricing.
            </p>
          </div>
          <div className="md:w-2/5 flex flex-col items-center justify-center w-full">
            <a 
              href="https://wa.me/250794785167"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 md:py-8 bg-[#FF7F00] hover:bg-white hover:text-slate-900 text-white rounded-[2rem] font-black text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] transition-all text-center shadow-lg group relative overflow-hidden active:scale-95"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative z-10">Discuss Your Project</span>
            </a>
            <p className="mt-4 text-[9px] font-black text-[#FF7F00] uppercase tracking-[0.6em] opacity-80 text-center">Dedicated African Support Team</p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 mb-4 tracking-tighter">Growth <span className="text-[#0077FF]">Steps</span></h2>
          <p className="text-[#FF7F00] font-black uppercase tracking-[0.6em] text-[11px]">Dominating Markets Across Africa</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Step 1: Order */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] glass-panel border border-slate-200 relative group"
          >
            <div className="absolute top-8 right-8 text-slate-200 font-black text-6xl italic group-hover:text-blue-100 transition-colors">01</div>
            <div className="w-16 h-16 bg-[#0077FF] rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg shadow-blue-500/20">
              <MessageSquare size={28} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">01. Order</h4>
            <p className="text-slate-800 font-bold leading-relaxed mb-10">Choose your plan and message us for instant setup.</p>
            <a 
              href="https://wa.me/250794785167" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-[#0077FF] font-black text-[11px] uppercase tracking-[0.4em] group/btn"
            >
              <span>WhatsApp</span> <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Step 2: Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] glass-panel border border-slate-200 relative group"
          >
            <div className="absolute top-8 right-8 text-slate-200 font-black text-6xl italic group-hover:text-orange-100 transition-colors">02</div>
            <div className="w-16 h-16 bg-[#FF7F00] rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg shadow-orange-500/20">
              <Send size={28} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">02. Send</h4>
            <p className="text-slate-800 font-bold leading-relaxed mb-10">Email us your project details and assets for processing.</p>
            <a href="mailto:arisemarketingagency@gmail.com" className="flex items-center space-x-3 text-[#FF7F00] font-black text-[11px] uppercase tracking-[0.4em] group/btn">
              <span>Email Us</span> <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Step 3: Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] glass-panel border border-slate-200 relative group"
          >
            <div className="absolute top-8 right-8 text-slate-200 font-black text-6xl italic group-hover:text-slate-300 transition-colors">03</div>
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg shadow-slate-900/20">
              <Instagram size={28} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">03. Follow</h4>
            <p className="text-slate-800 font-bold leading-relaxed mb-10">Join our community on TikTok and Instagram.</p>
            <div className="flex space-x-4">
               <a 
                href="https://www.instagram.com/arise1_marketing/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm"
               >
                <Instagram size={18} />
               </a>
               <a 
                href="https://www.tiktok.com/@arisemarketingagency" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm"
               >
                <TikTokIcon size={18} />
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
