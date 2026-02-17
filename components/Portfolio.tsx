
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, CheckCircle2, History, ShieldCheck, X, Maximize2, ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  src: string;
  type: 'image' | 'video';
  tags: string[];
}

interface PortfolioProps {
  selectedCategory: string | null;
  onClearFilter: () => void;
}

// Industry categories must match exactly with Services.tsx
const categories = ['Restaurants', 'Hotels', 'Schools', 'Companies', 'NGOs', 'Any Business'];

const proofTitles = [
  "Market Dominance",
  "Strategic Branding",
  "Visual Excellence",
  "Elite Documentation",
  "Digital Narrative",
  "Verified Impact"
];

const getAssetForSlot = (cat: string, slot: number): string => {
  const imgParams = "auto=format&fit=crop&q=85&w=1200"; 
  
  if (cat === 'Schools') {
    if (slot === 1) return 'https://i.imgur.com/zrOQ28p.mp4';
    if (slot === 2) return 'https://i.imgur.com/OU7qlpG.mp4';
    if (slot === 3) return 'https://i.imgur.com/BB5qjsd.jpeg';
    if (slot === 4) return 'https://i.imgur.com/ggamYeX.jpeg';
    if (slot === 5) return 'https://i.imgur.com/FFmyTgX.png';
    if (slot === 6) return 'https://i.imgur.com/P7j66EW.png';
  }
  
  if (cat === 'Restaurants') {
    if (slot === 1) return 'https://i.imgur.com/k7EbGcP.mp4';
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
    : `https://picsum.photos/seed/${cat}-${slot}/800/1000`;
};

const generatePortfolioData = (): PortfolioItem[] => {
  const data: PortfolioItem[] = [];
  categories.forEach((cat) => {
    for (let i = 1; i <= 6; i++) {
      data.push({
        id: `${cat}-${i}`,
        category: cat,
        title: proofTitles[i - 1],
        type: (i === 1 || i === 2) ? 'video' : 'image',
        src: getAssetForSlot(cat, i),
        tags: ["VERIFIED", "PREMIUM", "AFRICAN-ELITE"]
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onClick={() => onOpen(item)}
      className="relative group overflow-hidden cursor-pointer w-full"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        {item.type === 'video' ? (
          <video 
            ref={videoRef}
            src={item.src} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1s]" 
            loop 
            muted 
            playsInline
            preload="metadata"
          />
        ) : (
          <img 
            src={item.src} 
            alt={item.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1s]" 
            loading="lazy" 
          />
        )}
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        
        {/* Floating Icons */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Maximize2 size={18} />
        </div>
        
        {item.type === 'video' && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white opacity-100 group-hover:opacity-0 transition-opacity">
                <Play size={20} fill="white" className="ml-1" />
              </div>
           </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-[10px] font-black uppercase text-[#FF7F00] tracking-widest bg-white/10 px-3 py-1 rounded">
              {item.category}
            </span>
            <div className="flex items-center space-x-1 text-green-400">
               <CheckCircle2 size={12} />
               <span className="text-[9px] font-black uppercase tracking-widest">VERIFIED</span>
            </div>
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Lightbox: React.FC<{ item: PortfolioItem | null; onClose: () => void }> = ({ item, onClose }) => {
  if (!item) return null;

  const displayCategory = item.category.toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-10 bg-[#04060b]/98 backdrop-blur-3xl"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 md:top-12 md:right-12 z-[120] w-16 h-16 md:w-24 md:h-24 bg-white/10 hover:bg-[#FF7F00] backdrop-blur-3xl rounded-full flex items-center justify-center text-white border border-white/20 transition-all hover:rotate-90 active:scale-90"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <X size={40} className="md:size-48" />
      </button>

      <motion.div 
        initial={{ scale: 0.95, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        className="relative max-w-[98vw] w-full h-full md:h-[92vh] flex flex-col md:flex-row items-stretch overflow-hidden bg-black rounded-none md:rounded-[4rem] border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-grow h-[45vh] md:h-auto bg-black flex items-center justify-center relative overflow-hidden">
          {item.type === 'video' ? (
            <video 
              src={item.src} 
              className="max-h-full max-w-full object-contain md:p-4" 
              controls 
              autoPlay 
              playsInline
              loop
            />
          ) : (
            <img 
              src={item.src} 
              alt={item.title} 
              className="max-h-full max-w-full object-contain md:p-4" 
            />
          )}
        </div>

        <div className="w-full md:w-[550px] lg:w-[650px] flex-shrink-0 p-10 md:p-20 lg:p-24 text-left bg-[#080c14] flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-white/10">
          <div className="space-y-12">
            <div className="flex items-center space-x-6">
               <div className="w-16 h-16 bg-[#FF7F00]/20 rounded-2xl flex items-center justify-center border border-[#FF7F00]/30">
                 <ShieldCheck size={36} className="text-[#FF7F00]" />
               </div>
               <span className="text-sm font-black text-[#FF7F00] uppercase tracking-[0.5em]">Elite Proof</span>
            </div>

            <div className="space-y-5">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8]">
                {displayCategory}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#0077FF] uppercase tracking-tighter leading-[0.85] opacity-90">
                {item.title}
              </h3>
              <div className="w-32 h-2 bg-[#0077FF] rounded-full mt-10" />
            </div>

            <p className="text-white text-lg md:text-xl font-bold leading-relaxed uppercase tracking-widest text-left opacity-90 max-w-xl">
              THIS ASSET REPRESENTS ELITE BRAND POSITIONING DOCUMENTED BY ARISE MARKETING AGENCY. VERIFIABLE ACHIEVEMENT FOR OUR VISIONARY PARTNERS ACROSS THE ENTIRE CONTINENT.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {item.tags.map(tag => (
                <span key={tag} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-black text-white uppercase tracking-widest">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 lg:mt-24 space-y-10">
            <a 
              href="https://wa.me/250794785167"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-6 w-full py-10 md:py-12 bg-white text-slate-900 rounded-[3rem] font-black text-base lg:text-lg uppercase tracking-[0.4em] hover:bg-[#0077FF] hover:text-white transition-all active:scale-95 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0077FF] opacity-0 group-hover:opacity-10 transition-opacity" />
              <ExternalLink size={24} className="relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Get Similiar Results</span>
            </a>
            
            <div className="text-center">
               <p className="text-xs font-black text-slate-500 uppercase tracking-widest opacity-60">
                 OFFICIAL ARISE DIGITAL RECORD © 2026
               </p>
            </div>
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
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-24 space-y-12 md:space-y-0 text-center md:text-left">
        <motion.div 
          key={selectedCategory || 'all-header'} 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center justify-center md:justify-start space-x-6 mb-8">
            <div className="w-16 h-2 bg-[#FF7F00] rounded-full" />
            <span className="text-base font-black uppercase tracking-[0.5em] text-[#FF7F00]">
              {selectedCategory ? `${selectedCategory} Proof` : '36 Verified Case Studies'}
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-slate-900 leading-[0.8] mb-10">
            {selectedCategory ? (
              <>Market <span className="text-[#0077FF]">Proof.</span></>
            ) : (
              <>The <span className="text-[#0077FF]">Result.</span></>
            )}
          </h2>
          <p className="text-slate-500 text-lg md:text-2xl font-medium leading-relaxed uppercase tracking-widest mx-auto md:mx-0 max-w-3xl opacity-80">
            {selectedCategory 
              ? `Displaying elite documentation for our visionary ${selectedCategory} partners across Africa.`
              : 'Direct evidence of brand dominance and transformation for African visionaries.'}
          </p>
        </motion.div>
        
        {selectedCategory && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onClearFilter}
            className="flex items-center space-x-6 text-slate-900 font-black uppercase tracking-widest border-2 border-slate-900 px-16 py-8 rounded-full bg-white hover:bg-slate-900 hover:text-white transition-all active:scale-95 text-xs"
          >
            <History size={20} />
            <span>Show All</span>
          </motion.button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedCategory || 'all-grid'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6"
        >
          {filteredItems.map((item) => (
            <PortfolioMedia key={item.id} item={item} onOpen={setSelectedItem} />
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedItem && <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </AnimatePresence>

      {filteredItems.length === 0 && portfolioData.length > 0 && (
        <div className="py-48 text-center">
          <Sparkles size={100} className="mx-auto text-slate-200 mb-10 animate-pulse" />
          <h3 className="text-4xl font-black text-slate-400 uppercase tracking-widest">Optimizing Proof</h3>
          <p className="text-slate-400 mt-6 text-lg max-w-xl mx-auto uppercase tracking-widest font-bold">Compiling new documentation for the {selectedCategory} sector.</p>
          <button onClick={onClearFilter} className="mt-12 px-14 py-6 bg-slate-900 text-white font-black rounded-full uppercase text-xs tracking-widest hover:bg-[#0077FF] transition-all">Reset Sector Filter</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
