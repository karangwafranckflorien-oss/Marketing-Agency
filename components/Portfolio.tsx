
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, History, ShieldCheck, X, ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: string;
  category: string;
  src: string;
  type: 'image' | 'video';
}

interface PortfolioProps {
  selectedCategory: string | null;
  onClearFilter: () => void;
}

const categories = ['Restaurants', 'Hotels', 'Schools', 'Companies', 'NGOs', 'Any Business'];

const getAssetForSlot = (cat: string, slot: number): string => {
  const imgParams = "auto=format&fit=crop&q=100&w=1920"; 
  
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
    : `https://picsum.photos/seed/${cat}-${slot}/1920/1200`;
};

const generatePortfolioData = (): PortfolioItem[] => {
  const data: PortfolioItem[] = [];
  categories.forEach((cat) => {
    for (let i = 1; i <= 6; i++) {
      data.push({
        id: `${cat}-${i}`,
        category: cat,
        type: (i === 1 || i === 2) ? 'video' : 'image',
        src: getAssetForSlot(cat, i),
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
            className="w-full h-full object-cover transform scale-[1.01] group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
            loop 
            muted 
            playsInline
            preload="auto"
          />
        ) : (
          <img 
            src={item.src} 
            alt="Arise Portfolio" 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
            loading="lazy" 
          />
        )}
        
        {/* Pure Overlay - No Text */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
        
        {item.type === 'video' && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white opacity-40 group-hover:opacity-0 transition-opacity">
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-10"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 z-[120] w-12 h-12 bg-white/5 hover:bg-[#FF7F00] rounded-full flex items-center justify-center text-white border border-white/10 transition-all"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <X size={20} />
      </button>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full h-full flex flex-col md:flex-row items-stretch bg-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-grow h-[50vh] md:h-auto bg-black flex items-center justify-center relative">
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
              alt="Elite Content" 
              className="max-h-full max-w-full object-contain" 
            />
          )}
        </div>

        <div className="w-full md:w-[400px] flex-shrink-0 p-8 md:p-12 text-left bg-zinc-950 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
          <div className="space-y-10">
            <div className="flex items-center space-x-4">
               <div className="w-10 h-10 bg-[#FF7F00]/10 rounded-lg flex items-center justify-center border border-[#FF7F00]/20">
                 <ShieldCheck size={20} className="text-[#FF7F00]" />
               </div>
               <span className="text-[9px] font-black text-[#FF7F00] uppercase tracking-[0.5em]">Arise AI Digital Record</span>
            </div>

            <p className="text-zinc-400 text-xs md:text-sm font-medium leading-relaxed uppercase tracking-[0.1em] max-w-xs">
              This visual asset represents elite brand positioning documented for visionaries across the continent.
            </p>
          </div>

          <div className="mt-16">
            <a 
              href="https://wa.me/250794785167"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full py-6 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#0077FF] hover:text-white transition-all shadow-xl"
            >
              <ExternalLink size={14} />
              <span>Request Similiar Proof</span>
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
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-6 md:space-y-0 text-center md:text-left pt-12">
          <motion.div 
            key={selectedCategory || 'all-header'} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-3">
              <div className="w-10 h-1 bg-[#FF7F00] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF7F00]">
                {selectedCategory ? `${selectedCategory} Proof` : 'Verified Transformations'}
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85]">
              Visual <span className="text-[#0077FF]">Proof.</span>
            </h2>
          </motion.div>
          
          {selectedCategory && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onClearFilter}
              className="flex items-center space-x-3 text-slate-900 font-black uppercase tracking-[0.2em] border-2 border-slate-900 px-8 py-4 rounded-full bg-white hover:bg-slate-900 hover:text-white transition-all active:scale-95 text-[9px]"
            >
              <History size={14} />
              <span>Show All Media</span>
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
        <div className="py-24 text-center bg-white">
          <Sparkles size={40} className="mx-auto text-slate-100 mb-6 animate-pulse" />
          <h3 className="text-sm font-black text-slate-300 uppercase tracking-widest">Optimizing Visuals</h3>
          <button onClick={onClearFilter} className="mt-6 px-8 py-4 bg-slate-900 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em]">Reset Filter</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
