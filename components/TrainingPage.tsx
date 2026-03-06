
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
      icon: <Video className="text-[#357FA6]" size={24} />,
      details: ["Sora 2 & Veo 3 Mastery", "Whisk & Flow AI Video", "Cinematic Composition", "Lighting & Audio Tech"]
    },
    {
      title: "Professional Editing",
      description: "Learn high-end editing workflows using CapCut and Adobe Premiere Pro for viral content.",
      icon: <Edit3 className="text-[#CE5826]" size={24} />,
      details: ["CapCut Mobile/Desktop", "Premiere Pro Versions", "Advanced Color Grading", "Pro Sound Design"]
    },
    {
      title: "AI Image & Visual Design",
      description: "Harness Leonardo.ai and other top engines to create stunning, high-resolution visuals and commercial designs.",
      icon: <ImageIcon className="text-[#357FA6]" size={24} />,
      details: ["Leonardo.ai Pro", "Advanced Prompting", "Visual Brand Design", "Upscaling for Print"]
    },
    {
      title: "AI Strategy & Content",
      description: "Master the world's leading LLMs for content strategy, scriptwriting, and elite brand growth.",
      icon: <Users className="text-[#CE5826]" size={24} />,
      details: ["ChatGPT Pro & Gemini", "Claude & Perplexity", "Grok AI Research", "Personal Branding"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#355271] pb-24">
      {/* Hero Section with Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-48">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/tech-training/1920/1080?blur=2" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#355271] via-[#355271]/80 to-[#355271]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 px-8 py-3 rounded-full border-2 border-[#357FA6] bg-[#355271] mb-12 shadow-[8px_8px_0px_0px_rgba(53,127,166,1)]"
          >
            <Award size={20} className="text-[#357FA6]" />
            <span className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] text-[#357FA6]">Elite Training Program</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tight text-white uppercase"
          >
            Master the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#357FA6] via-[#CE5826] to-[#357FA6] animate-gradient-x">Digital</span> <br />
            <span className="relative inline-block">
              Creative
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#CE5826]/20 -rotate-1 -z-10" />
            </span> <br />
            Economy.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <a 
              href="https://wa.me/250794785167" 
              target="_blank"
              className="px-12 py-6 bg-slate-900 text-white font-black rounded-2xl text-xs tracking-[0.4em] uppercase flex items-center justify-center hover:bg-[#357FA6] transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Apply via WhatsApp <ChevronRight className="ml-2" size={18} />
            </a>
            <a 
              href="#fees" 
              className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-100 font-black rounded-2xl text-xs tracking-[0.4em] uppercase flex items-center justify-center hover:bg-slate-50 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              View Training Fees
            </a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-100 font-black max-w-5xl mx-auto mb-16 leading-tight uppercase tracking-[0.1em] border-l-8 border-[#357FA6] pl-8 text-left inline-block"
          >
            Intensive 1-Month Training Cycle <br />
            <span className="text-[#CE5826]">1 Month Training • 1 Month Break • Repeated</span> <br />
            <span className="text-slate-400 text-sm tracking-[0.3em] mt-2 block">We train in February, skip March, train in April, skip May... and so on.</span>
          </motion.p>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-24 h-1 bg-[#CE5826]"
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
          className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#357FA6]/10"
        >
          <img 
            src="https://i.imgur.com/6Puofv3.jpeg" 
            alt="Official Training Flyer" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Modules Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <p className="text-[11px] font-black text-white uppercase tracking-[0.4em] mb-4 bg-white/10 inline-block px-8 py-3 rounded-full border border-white/20">
            * All modules are updated continuously with the latest AI tools (Sora 2, Veo 3, Leonardo Pro)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-white/5 border-2 border-white/10 hover:border-[#357FA6] transition-all group shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col relative overflow-hidden min-h-[450px]"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:bg-[#357FA6]/10 transition-colors duration-500 blur-3xl" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#357FA6] transition-all duration-300 relative z-10">
                {React.cloneElement(module.icon as React.ReactElement, { 
                  className: "group-hover:text-white transition-colors",
                  size: 32
                })}
              </div>
              
              <h3 className="text-2xl font-black mb-4 tracking-tight text-white leading-tight relative z-10">{module.title}</h3>
              
              <p className="text-slate-300 text-[10px] leading-relaxed mb-8 uppercase tracking-widest font-black opacity-90 relative z-10">
                {module.description}
              </p>
              
              <div className="mt-auto relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CE5826] mb-6 border-b border-slate-100 pb-2">Curriculum Highlights</h4>
                <ul className="space-y-4">
                  {module.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-[11px] font-black text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">
                      <CheckCircle2 size={14} className="mr-3 text-[#357FA6] shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtle Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#357FA6] to-[#CE5826] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule & Fees */}
      <section id="fees" className="bg-slate-900 py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#357FA6]/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter leading-none">
                Program <span className="text-[#CE5826]">Structure</span> <br />
                & Schedule
              </h2>
              <p className="text-slate-400 text-base mb-12 max-w-xl uppercase tracking-widest leading-relaxed">
                Our training program runs for one full month, followed by a one-month break before the next intake begins.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-16">
                {trainingMonths.map((month, i) => (
                  <div key={i} className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-4 mb-2">
                      <Calendar className="text-[#CE5826]" size={20} />
                      <span className="font-black uppercase tracking-widest text-sm">{month}</span>
                    </div>
                    <span className="text-[10px] font-black text-[#357FA6] uppercase tracking-[0.2em]">Training Month</span>
                  </div>
                ))}
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-[0.3em] text-[#CE5826] mb-6 flex items-center">
                    <div className="w-8 h-1 bg-[#CE5826] mr-4" /> Class Schedule
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                      <h4 className="font-black uppercase tracking-widest text-[#357FA6] mb-4">📍 Physical Classes</h4>
                      <ul className="space-y-3 text-xs font-black uppercase tracking-widest text-slate-400">
                        <li>Tue & Fri: 5:30 PM – 8:30 PM</li>
                        <li>Saturday: 10:30 AM – 2:00 PM</li>
                      </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                      <h4 className="font-black uppercase tracking-widest text-[#CE5826] mb-4">💻 Online Classes</h4>
                      <p className="text-[10px] text-slate-500 mb-4 uppercase font-black tracking-widest">Saturday Only</p>
                      <ul className="space-y-3 text-xs font-black uppercase tracking-widest text-slate-400">
                        <li>Session 1: 8:00 AM – 10:00 AM</li>
                        <li>Session 2: 10:30 AM – 12:30 PM</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black uppercase tracking-[0.3em] text-[#357FA6] mb-6 flex items-center">
                    <div className="w-8 h-1 bg-[#357FA6] mr-4" /> Payment Details
                  </h3>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-slate-300">
                      <li className="flex items-center"><CheckCircle2 size={16} className="mr-3 text-[#CE5826]" /> Payment after application confirmation</li>
                      <li className="flex items-center"><CheckCircle2 size={16} className="mr-3 text-[#CE5826]" /> Office or Online payment allowed</li>
                      <li className="flex items-center bg-[#CE5826]/10 p-4 rounded-xl border border-[#CE5826]/20">
                        <span className="text-[#CE5826]">MoMo Code: 002680 (Arise Company)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-16 rounded-[3rem] bg-white/10 backdrop-blur-md text-white shadow-2xl relative lg:sticky lg:top-32 border border-white/10">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#CE5826] rounded-full flex flex-col items-center justify-center text-white font-black text-center p-4 rotate-12 shadow-2xl border-4 border-[#355271] z-20">
                <span className="text-[10px] uppercase tracking-widest mb-1">Limited</span>
                <span className="text-lg uppercase tracking-tighter leading-none">Seats</span>
                <span className="text-[8px] uppercase tracking-widest mt-1 opacity-80">Available</span>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-12">Training <span className="text-[#357FA6]">Fees</span></h3>

              <div className="space-y-12 mb-16">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#357FA6] block mb-4">Physical Training</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">75K</span>
                    <span className="text-xl font-black ml-3 text-slate-300">RWF</span>
                  </div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Full Month Training Fee</p>
                </div>

                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#CE5826] block mb-4">Online Training</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">35K</span>
                    <span className="text-xl font-black ml-3 text-slate-300">RWF</span>
                  </div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Per Month (2h/week • 8h total)</p>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <Award size={20} className="text-[#357FA6]" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">Official Certificate Included</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Wifi size={20} className="text-[#CE5826]" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">High-Speed WiFi (Physical)</span>
                </div>
              </div>

              <a 
                href="https://wa.me/250794785167" 
                target="_blank"
                className="w-full py-8 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-[0.4em] uppercase flex items-center justify-center hover:bg-[#357FA6] transition-colors shadow-xl mb-6"
              >
                Apply via WhatsApp <ChevronRight className="ml-2" size={18} />
              </a>
              <div className="text-center space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Classes begin First Saturday of each month
                </p>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">
                  Call: +250 794 785 167
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Gallery Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white">Training <span className="text-[#357FA6]">Gallery</span></h2>
          <p className="text-slate-300 uppercase tracking-[0.3em] text-sm">See what our trainees are achieving</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* YouTube Outro Video */}
          <div className="md:col-span-2 aspect-video rounded-[3rem] overflow-hidden bg-slate-900 relative group shadow-2xl">
            <video 
              src="https://i.imgur.com/4YQLbKU.mp4" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              autoPlay 
              muted 
              loop 
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 md:p-12">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                  <Play fill="white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm md:text-base">YouTube Outro Masterclass</h4>
                  <p className="text-[#357FA6] text-[10px] md:text-xs font-black uppercase tracking-widest mt-1">Professional Production</p>
                </div>
              </div>
            </div>
          </div>

          {/* TikTok Short Video */}
          <div className="aspect-[9/16] rounded-[3rem] overflow-hidden bg-slate-900 relative group shadow-2xl">
            <video 
              src="https://i.imgur.com/4YQLbKU.mp4" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              autoPlay 
              muted 
              loop 
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm">TikTok Short Video</h4>
                <p className="text-[#CE5826] text-[10px] font-black uppercase tracking-widest mt-1">Viral Content Strategy</p>
              </div>
            </div>
          </div>

          {/* Second YouTube Outro Video */}
          <div className="md:col-span-2 aspect-video rounded-[3rem] overflow-hidden bg-slate-900 relative group shadow-2xl">
            <video 
              src="https://i.imgur.com/bDC27yk.mp4" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              autoPlay 
              muted 
              loop 
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 md:p-12">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                  <Play fill="white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm md:text-base">Advanced YouTube Outro</h4>
                  <p className="text-[#357FA6] text-[10px] md:text-xs font-black uppercase tracking-widest mt-1">Elite Motion Graphics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
