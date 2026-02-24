
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Edit3, 
  Image as ImageIcon, 
  DollarSign, 
  Calendar, 
  Wifi, 
  Award, 
  ChevronRight,
  Play,
  CheckCircle2,
  Users
} from 'lucide-react';

const TrainingPage: React.FC = () => {
  const trainingMonths = [
    "February", "April", "June", "August", "October", "December"
  ];

  const modules = [
    {
      title: "Video Production & AI Motion",
      description: "Master cinematic storytelling using traditional techniques and cutting-edge AI video tools like Sora 2 and Veo 3.",
      icon: <Video className="text-[#0077FF]" size={24} />,
      details: ["Sora 2 & Veo 3 Mastery", "Whisk & Flow AI Video", "Cinematic Composition", "Lighting & Audio Tech"]
    },
    {
      title: "Professional Editing",
      description: "Learn high-end editing workflows using CapCut and Adobe Premiere Pro for viral content.",
      icon: <Edit3 className="text-[#FF7F00]" size={24} />,
      details: ["CapCut Mobile/Desktop", "Premiere Pro Versions", "Advanced Color Grading", "Pro Sound Design"]
    },
    {
      title: "AI Image & Visual Design",
      description: "Harness Leonardo.ai and other top engines to create stunning, high-resolution visuals and commercial designs.",
      icon: <ImageIcon className="text-[#0077FF]" size={24} />,
      details: ["Leonardo.ai Pro", "Advanced Prompting", "Visual Brand Design", "Upscaling for Print"]
    },
    {
      title: "AI Strategy & Content",
      description: "Master the world's leading LLMs for content strategy, scriptwriting, and elite brand growth.",
      icon: <Users className="text-[#FF7F00]" size={24} />,
      details: ["ChatGPT Pro & Gemini", "Claude & Perplexity", "Grok AI Research", "Personal Branding"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Section with Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/tech-training/1920/1080?blur=2" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="px-6 py-2 bg-[#FF7F00] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full shadow-lg shadow-orange-500/20">
              ChatGPT Pro • Gemini • Claude • Sora 2 • Leonardo.ai
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 px-8 py-3 rounded-full border-2 border-[#0077FF] bg-white mb-12 shadow-[8px_8px_0px_0px_rgba(0,119,255,1)]"
          >
            <Award size={20} className="text-[#0077FF]" />
            <span className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] text-[#0077FF]">Elite Training Program</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-black mb-12 leading-[0.85] tracking-[-0.05em] text-slate-900 uppercase"
          >
            Master the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077FF] via-[#FF7F00] to-[#0077FF] animate-gradient-x">Digital</span> <br />
            <span className="relative inline-block">
              Creative
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#FF7F00]/20 -rotate-1 -z-10" />
            </span> <br />
            Economy.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-700 font-black max-w-5xl mx-auto mb-16 leading-tight uppercase tracking-[0.1em] border-l-8 border-[#0077FF] pl-8 text-left inline-block"
          >
            Intensive 1-Month Training Cycle <br />
            <span className="text-[#FF7F00]">1 Month Training • 1 Month Break • Repeated</span> <br />
            <span className="text-slate-400 text-sm tracking-[0.3em] mt-2 block">We train in February, skip March, train in April, skip May... and so on.</span>
          </motion.p>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-24 h-1 bg-[#FF7F00]"
            />
          </div>
        </div>
      </section>

      {/* Official Flyer Section */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#0077FF]/10"
        >
          <img 
            src="https://i.imgur.com/eOZXVhh.jpeg" 
            alt="Official Training Flyer" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Modules Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white border-2 border-slate-100 hover:border-[#0077FF] transition-all group shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#0077FF] transition-all duration-300">
                {React.cloneElement(module.icon as React.ReactElement, { 
                  className: "group-hover:text-white transition-colors" 
                })}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">{module.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 uppercase tracking-wider font-medium opacity-80">
                {module.description}
              </p>
              <ul className="space-y-3">
                {module.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">
                    <CheckCircle2 size={14} className="mr-2 text-[#FF7F00]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule & Fees */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter leading-none">
                Training <span className="text-[#FF7F00]">Schedule</span> <br />
                & Investment
              </h2>
              <p className="text-slate-400 text-lg mb-16 max-w-xl uppercase tracking-widest leading-relaxed">
                Our program follows an alternating cycle: One month of intensive training followed by a one-month break for practice and implementation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {trainingMonths.map((month, i) => (
                  <div key={i} className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-4 mb-2">
                      <Calendar className="text-[#FF7F00]" size={20} />
                      <span className="font-black uppercase tracking-widest text-sm">{month}</span>
                    </div>
                    <span className="text-[10px] font-black text-[#0077FF] uppercase tracking-[0.2em]">Training Month</span>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-slate-500 text-xs uppercase tracking-[0.3em] font-black italic">
                * Months not listed (Mar, May, Jul, Sep, Nov, Jan) are dedicated to independent project work.
              </p>
            </div>

            <div className="p-12 md:p-16 rounded-[3rem] bg-white text-slate-900 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FF7F00] rounded-full flex items-center justify-center text-white font-black text-xs uppercase tracking-widest rotate-12 shadow-xl">
                Limited Seats
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0077FF] block mb-4">Registration Fee</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">5K</span>
                    <span className="text-xl font-black ml-3 text-slate-400">RWF</span>
                  </div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">* Proof of payment required</p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FF7F00] block mb-4">Monthly Tuition</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">75K</span>
                    <span className="text-xl font-black ml-3 text-slate-400">RWF</span>
                  </div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">* Per month of training</p>
                </div>
              </div>

              <div className="space-y-8 mb-16">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0077FF]">
                    <Wifi size={24} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-sm">High-Speed WiFi</h4>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mt-1">Included for all sessions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF7F00]">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-sm">Official Certificate</h4>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mt-1">Recognized by Arise Digital Solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-sm">Expert Mentorship</h4>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mt-1">1-on-1 guidance for content</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/250794785167" 
                target="_blank"
                className="w-full py-8 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-[0.4em] uppercase flex items-center justify-center hover:bg-[#0077FF] transition-colors shadow-xl mb-6"
              >
                Apply via WhatsApp <ChevronRight className="ml-2" size={18} />
              </a>
              <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Or call <span className="text-slate-900">+250 794 785 167</span> for direct registration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Flyer Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Training <span className="text-[#0077FF]">Gallery</span></h2>
          <p className="text-slate-500 uppercase tracking-[0.3em] text-sm">See what our trainees are achieving</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 aspect-video rounded-[3rem] overflow-hidden bg-slate-100 relative group">
            <img 
              src="https://picsum.photos/seed/training1/1200/800" 
              alt="Training Session" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Play fill="white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest">Video Editing Masterclass</h4>
                  <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Live Session Preview</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-[3/4] rounded-[3rem] overflow-hidden bg-slate-100">
            <img 
              src="https://picsum.photos/seed/training2/800/1200" 
              alt="AI Image Result" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100">
            <img 
              src="https://picsum.photos/seed/training3/800/800" 
              alt="Content Creation" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100">
            <img 
              src="https://picsum.photos/seed/training4/800/800" 
              alt="Monetization Workshop" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100">
            <img 
              src="https://picsum.photos/seed/training5/800/800" 
              alt="Certificate Ceremony" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
