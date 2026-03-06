
import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Share2, Rocket, ShieldCheck, HeartHandshake } from 'lucide-react';

const MarketingAssistant: React.FC = () => {
  const features = [
    {
      title: "Client Engagement",
      description: "We don't just post; we interact. We manage engagement from every piece of content to build real community trust.",
      icon: <MessageSquare className="text-[#0077FF]" size={28} />,
      tag: "Active Interaction"
    },
    {
      title: "Marketing Support",
      description: "Consider us your in-house team. We provide continuous strategic support to ensure your brand stays ahead of the curve.",
      icon: <HeartHandshake className="text-[#FF7F00]" size={28} />,
      tag: "Dedicated Partner"
    },
    {
      title: "Social Media Mastery",
      description: "Elite social media posts engineered with AI precision to capture attention and drive viral growth across all platforms.",
      icon: <Share2 className="text-[#0077FF]" size={28} />,
      tag: "Content Engineering"
    },
    {
      title: "Promotional Activities",
      description: "From seasonal campaigns to product launches, we design and execute promotional activities that convert viewers into clients.",
      icon: <Rocket className="text-[#FF7F00]" size={28} />,
      tag: "Market Impact"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center space-x-4 px-6 py-2 bg-blue-50 rounded-full border border-blue-100 mb-8">
            <Users size={18} className="text-[#0077FF]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0077FF]">Your Dedicated Team</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter text-slate-900 leading-[0.9]">
            Your Elite <br />
            <span className="text-[#FF7F00]">Marketing</span> <br />
            Assistant.
          </h2>
          
          <p className="text-slate-600 text-lg font-bold leading-relaxed uppercase tracking-widest mb-12 opacity-90">
            Arise AI Marketing Agency acts as your full-time marketing department. We handle the complexity of the digital space so you can focus on your core business operations.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-6 rounded-3xl bg-slate-50 border border-slate-100">
              <ShieldCheck className="text-[#0077FF]" size={24} />
              <span className="text-sm font-black uppercase tracking-widest text-slate-900">Full-Cycle Brand Management</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#0077FF]/30 transition-all duration-500 shadow-sm hover:shadow-xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <span className="text-[9px] font-black text-[#FF7F00] uppercase tracking-[0.3em] mb-3 block">
                {feature.tag}
              </span>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                {feature.title}
              </h3>
              <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed tracking-widest">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingAssistant;
