
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, History, ShieldCheck, X, ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: string;
  category: string;
  src: string;
  type: 'image' | 'video';
  professionalLabel: string;
}

interface PortfolioProps {
  selectedCategory: string | null;
  onClearFilter: () => void;
}

const categories = ['Restaurants', 'Hotels', 'Schools', 'Companies', 'NGOs', 'Any Business'];

const getAssetForSlot = (cat: string, slot: number): string => {
  const imgParams = "auto=format&fit=crop&q=100&w=1200"; 
  
  if (cat === 'Schools') {
    if (slot === 1) return 'https://i.imgur.com/zrOQ28p.mp4';
    if (slot === 2) return 'https://i.imgur.com/OU7qlpG.mp4';
    if (slot === 3) return 'https://i.imgur.com/BB5qjsd.jpeg';
    if (slot === 4) return 'https://i.imgur.com/ggamYeX.jpeg';
    if (slot === 5) return 'https://i.imgur.com/FFmyTgX.png';
    if (slot === 6) return 'https://i.imgur.com/P7j66EW.png';
  }
  
  if (cat === 'Restaurants') {
    if (slot === 1) return 'https://i.imgur.com/fq8gvAq.mp4';
    if (slot === 2) return 'https://i.imgur.com/ItpRQft.mp4';
    if (slot === 3) return `https://images.unsplash.com/photo-1555396273-367ea4eb4db5?${imgParams}`; 
    if (slot === 4) return 'https://i.imgur.com/JQZrvvC.png';
    if (slot === 5) return 'https://i.imgur.com/EjnHM41.png';
    if (slot === 6) return `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?${imgParams}`; 
  }

  if (cat === 'NGOs') {
    if (slot === 1) return 'https://i.imgur.com/bZsKwro.mp4'; 
    if (slot === 2) return 'https://i.imgur.com/MiZgNI3.mp4'; 
    if (slot === 3) return 'https://i.imgur.com/eDsH7VB.png'; 
    if (slot === 4) return `https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?${imgParams}`;
    if (slot === 5) return `https://images.unsplash.com/photo-1509099836639-18ba1795216d?${imgParams}`;
    if (slot === 6) return `https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?${imgParams}`;
  }

  if (cat === 'Hotels') {
    if (slot === 1) return 'https://i.imgur.com/mniACW0.mp4';
    if (slot === 2) return 'https://i.imgur.com/C80pKHn.mp4';
    if (slot === 3) return `https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?${imgParams}`;
    if (slot === 4) return 'https://i.imgur.com/q4Qa0f6.png';
    if (slot === 5) return 'https://i.imgur.com/Lncm9OI.png';
    if (slot === 6) return `https://images.unsplash.com/photo-1566073771259-6a8506099945?${imgParams}`;
  }

  if (cat === 'Companies') {
    if (slot === 1) return 'https://i.imgur.com/09gyqYL.mp4';
    if (slot === 2) return 'https://i.imgur.com/PzAnCtw.mp4';
    if (slot === 3) return 'https://i.imgur.com/8KrxbNA.png';
    if (slot === 4) return `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?${imgParams}`;
    if (slot === 5) return `https://images.unsplash.com/photo-1497366216548-37526070297c?${imgParams}`;
    if (slot === 6) return `https://images.unsplash.com/photo-1554469384-e58fac16e23a?${imgParams}`;
  }

  if (cat === 'Any Business') {
    if (slot === 1) return 'https://i.imgur.com/09gyqYL.mp4'; 
    if (slot === 2) return 'https://i.imgur.com/mniACW0.mp4'; 
    if (slot === 3) return `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?${imgParams}`; 
    if (slot === 4) return `https://images.unsplash.com/photo-1557804506-669a67965ba0?${imgParams}`; 
    if (slot === 5) return `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?${imgParams}`; 
    if (slot === 6) return `https://images.unsplash.com/photo-1497366216548-37526070297c?${imgParams}`; 
  }

  return slot <= 2 
    ? 'https://cdn.pixabay.com/video/2016/11/04/6305-190367375_tiny.mp4' 
    : `https://picsum.photos/seed/${cat}-${slot}/1200/1600`;
};

const professionalLabels = [
  "ELITE ADVERTISING CAMPAIGN",
  "PREMIUM CONTENT PRODUCTION",
  "STRATEGIC FLYER DESIGN",
  "BRAND IDENTITY CASE STUDY",
  "CINEMATIC BRAND NARRATIVE",
  "MARKET AUTHORITY ASSET"
];

const generatePortfolioData = (): PortfolioItem[] => {
  const data: PortfolioItem[] = [];
  categories.forEach((cat) => {
    for (let i = 1; i <= 6; i++) {
      data.push({
        id: `${cat}-${i}`,
        category: cat,
        type: (i === 1 || i === 2) ? 'video' : 'image',
        src: getAssetForSlot(cat, i),
        professionalLabel: professionalLabels[i - 1],
      });
    }
  });
  return data;
};

const PortfolioMedia: React.FC<{ item: PortfolioItem; onOpen: (item: PortfolioItem) => void }> = ({ item, onOpen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) videoRef.current.play().catch(() => {});
      else videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onOpen(item)}
      className="mb-12 overflow-hidden group cursor-pointer relative bg-white rounded-[2.5rem] p-2 border border-slate-50 shadow-sm"
    >
      <div className="w-full relative overflow-hidden rounded-[2rem]">
        {item.type === 'video' ? (
          <video 
            ref={videoRef}
            src={item.src} 
            className="w-full h-auto block transform scale-[1.01] group-hover:scale-105 transition-transform duration-[1s] ease-out rounded-[2rem]" 
            loop 
            muted 
            playsInline
            preload="auto"
          />
        ) : (
          <img 
            src={item.src} 
            alt="Arise Elite Documentation" 
            className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-[1s] ease-out rounded-[2rem]" 
            loading="lazy" 
          />
        )}
        
        <div className="absolute bottom-8 left-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-3 group-hover:translate-y-0">
          <div className="px-6 py-4 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
            <span className="text-[10px] md:text-[11px] font-black text-white tracking-[0.5em] uppercase leading-none block">{item.professionalLabel}</span>
            <span className="text-[9px] font-bold text-[#FF7F00] tracking-[0.3em] uppercase mt-2 block opacity-90">{item.category} RECORD</span>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
        
        {item.type === 'video' && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white opacity-40 group-hover:opacity-0 transition-opacity">
                <Play size={24} fill="white" className="ml-1" />
              </div>
           </div>
        )}
      </div>
    </motion.div>
  );
};

const Lightbox: React.FC<{ item: PortfolioItem | null; onClose: () => void }> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-6 md:p-16"
      onClick={onClose}
    >
      <button 
        className="absolute top-10 right-10 z-[120] w-14 h-14 bg-white/10 hover:bg-[#FF7F00] rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:rotate-90 shadow-2xl"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <X size={24} />
      </button>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full h-full flex flex-col md:flex-row items-stretch bg-[#080808] overflow-hidden shadow-2xl rounded-[3rem] border border-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-grow h-[50vh] md:h-auto bg-black flex items-center justify-center relative p-4">
          {item.type === 'video' ? (
            <video 
              src={item.src} 
              className="max-h-full max-w-full object-contain rounded-2xl" 
              controls 
              autoPlay 
              playsInline
              loop
            />
          ) : (
            <img 
              src={item.src} 
              alt="Elite Visual Asset" 
              className="max-h-full max-w-full object-contain rounded-2xl" 
            />
          )}
        </div>

        <div className="w-full md:w-[520px] flex-shrink-0 p-12 md:p-20 text-left bg-[#0c0c0c] flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
          <div className="space-y-14">
            <div className="flex items-center space-x-6">
               <div className="w-20 h-20 bg-[#FF7F00]/10 rounded-[2rem] flex items-center justify-center border border-[#FF7F00]/20 shadow-inner">
                 <ShieldCheck size={36} className="text-[#FF7F00]" />
               </div>
               <div className="flex flex-col">
                 <span className="text-[11px] font-black text-[#FF7F00] uppercase tracking-[0.7em]">ELITE DOCUMENT</span>
                 <span className="text-[15px] font-bold text-white tracking-[0.3em] mt-2 uppercase">{item.professionalLabel}</span>
               </div>
            </div>

            <p className="text-zinc-500 text-sm md:text-lg font-medium leading-relaxed uppercase tracking-[0.1em] max-w-sm">
              Premium market documentation engineered for visionaries. This {item.category.toLowerCase()} asset exemplifies the pinnacle of <span className="text-white">African Digital Excellence</span>.
            </p>
          </div>

          <div className="mt-24">
            <a 
              href="https://wa.me/250794785167"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-5 w-full py-10 bg-white text-black rounded-[2.5rem] font-black text-[13px] uppercase tracking-[0.5em] hover:bg-[#0077FF] hover:text-white transition-all shadow-2xl active:scale-95"
            >
              <ExternalLink size={20} />
              <span>Elevate Your Brand</span>
            </a>
            <p className="mt-10 text-[10px] font-black text-center text-zinc-700 uppercase tracking-[0.6em] opacity-60">Arise AI Marketing Agency • Rwanda</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ selectedCategory, onClearFilter }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>([]);
  
  useEffect(() => {
    setPortfolioData(generatePortfolioData());
  }, []);
  
  const filteredItems = selectedCategory 
    ? portfolioData.filter(item => item.category === selectedCategory)
    : portfolioData;

  useEffect(() => {
    if (selectedItem) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedItem]);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 space-y-12 md:space-y-0 text-center md:text-left pt-32">
          <motion.div 
            key={selectedCategory || 'all-header'} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center md:justify-start space-x-6 mb-6">
              <div className="w-16 h-1.5 bg-[#FF7F00] rounded-full" />
              <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#FF7F00]">
                {selectedCategory ? `${selectedCategory} Proof` : 'Verified Transformations'}
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85] mb-10">
              Visual <span className="text-[#0077FF]">Proof.</span>
            </h2>
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] max-w-2xl opacity-70">
              Original native dimensions documentation of market-leading results.
            </p>
          </motion.div>
          
          {selectedCategory && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onClearFilter}
              className="flex items-center space-x-5 text-slate-900 font-black uppercase tracking-[0.5em] border-2 border-slate-900 px-12 py-6 rounded-full bg-white hover:bg-slate-900 hover:text-white transition-all active:scale-95 text-[11px] shadow-lg"
            >
              <History size={18} />
              <span>Show All Records</span>
            </motion.button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory || 'all-grid'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-12"
          >
            {filteredItems.map((item) => (
              <PortfolioMedia key={item.id} item={item} onOpen={setSelectedItem} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedItem && <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </AnimatePresence>

      {filteredItems.length === 0 && portfolioData.length > 0 && (
        <div className="py-48 text-center bg-white">
          <Sparkles size={80} className="mx-auto text-slate-100 mb-10 animate-pulse" />
          <h3 className="text-2xl font-black text-slate-300 uppercase tracking-widest">Optimizing Records</h3>
          <button onClick={onClearFilter} className="mt-12 px-12 py-6 bg-slate-900 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em]">Clear Filter</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
