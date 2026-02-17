
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
  const imgParams = "auto=format&fit=crop&q=95&w=1600"; 
  
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
    : `https://picsum.photos/seed/${cat}-${slot}/1600/1000`;
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
      className="relative group cursor-pointer w-full bg-black overflow-hidden"
    >
      <div className="relative w-full aspect-[16/10]">
        {item.type === 'video' ? (
          <video 
            ref={videoRef}
            src={item.src} 
            className="w-full h-full object-cover transform scale-[1.01] group-hover:scale-105 transition-transform duration-[1.2s] ease-out" 
            loop 
            muted 
            playsInline
            preload="auto"
          />
        ) : (
          <img 
            src={item.src} 
            alt={item.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.2s] ease-out" 
            loading="lazy" 
          />
        )}
        
        {/* Modern Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
        
        {item.type === 'video' && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 text-white opacity-60 group-hover:opacity-0 transition-opacity">
                <Play size={24} fill="white" className="ml-1" />
              </div>
           </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-[10px] font-black uppercase text-[#FF7F00] tracking-[0.2em] bg-white/10 px-3 py-1 rounded-full border border-white/5 backdrop-blur-md">
              {item.category}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <button 
        className="absolute top-8 right-8 z-[120] w-16 h-16 bg-white/5 hover:bg-[#FF7F00] backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:rotate-90"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <X size={28} />
      </button>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full h-full flex flex-col md:flex-row items-stretch bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-grow h-[50vh] md:h-auto bg-black flex items-center justify-center p-4">
          {item.type === 'video' ? (
            <video 
              src={item.src} 
              className="max-h-full max-w-full object-contain" 
              controls 
              autoPlay 
              playsInline
              loop
            />
          ) : (
            <img 
              src={item.src} 
              alt={item.title} 
              className="max-h-full max-w-full object-contain" 
            />
          )}
        </div>

        <div className="w-full md:w-[500px] flex-shrink-0 p-10 md:p-16 text-left bg-zinc-950 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
          <div className="space-y-10">
            <div className="flex items-center space-x-6">
               <div className="w-12 h-12 bg-[#FF7F00]/10 rounded-xl flex items-center justify-center border border-[#FF7F00]/20">
                 <ShieldCheck size={24} className="text-[#FF7F00]" />
               </div>
               <span className="text-xs font-black text-[#FF7F00] uppercase tracking-[0.5em]">Verified Content</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.8]">
                {displayCategory}
              </h2>
              <h3 className="text-2xl md:text-3xl font-black text-[#0077FF] uppercase tracking-tighter opacity-90">
                {item.title}
              </h3>
            </div>

            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed uppercase tracking-widest max-w-xl">
              High-fidelity documentation for visionaries across Africa. Engineering the future of brand perception.
            </p>
          </div>

          <div className="mt-16">
            <a 
              href="https://wa.me/250794785167"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-6 w-full py-8 bg-white text-black rounded-full font-black text-sm uppercase tracking-[0.3em] hover:bg-[#0077FF] hover:text-white transition-all group"
            >
              <ExternalLink size={20} />
              <span>Elevate Your Brand</span>
            </a>
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
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center md:justify-start space-x-6 mb-8">
              <div className="w-16 h-2 bg-[#FF7F00] rounded-full" />
              <span className="text-base font-black uppercase tracking-[0.5em] text-[#FF7F00]">
                {selectedCategory ? `${selectedCategory} Proof` : 'Elite Portfolio Documentation'}
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-slate-900 leading-[0.8] mb-10">
              The <span className="text-[#0077FF]">Proof.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-2xl font-medium leading-relaxed uppercase tracking-widest mx-auto md:mx-0 max-w-3xl opacity-80">
              Direct evidence of brand dominance and transformation for African visionaries. Every asset is engineered for maximum quality.
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
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedCategory || 'all-grid'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-black"
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
        <div className="py-48 text-center bg-white">
          <Sparkles size={100} className="mx-auto text-slate-200 mb-10 animate-pulse" />
          <h3 className="text-4xl font-black text-slate-400 uppercase tracking-widest">Compiling Proof</h3>
          <button onClick={onClearFilter} className="mt-12 px-14 py-6 bg-slate-900 text-white font-black rounded-full uppercase text-xs tracking-widest">Reset Filter</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
