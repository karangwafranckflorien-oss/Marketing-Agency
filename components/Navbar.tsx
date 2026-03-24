
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, MessageCircle, Phone, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const LOGO_URL = "https://i.imgur.com/lYz6Y6B.png"; 

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.03 1.64-.13.51-.12 1.05.03 1.56.24.78.84 1.45 1.56 1.81.42.21.89.31 1.36.3 1.25-.01 2.45-.73 3.01-1.84.18-.34.27-.72.27-1.11.02-4.14-.01-8.29.02-12.43z"/>
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/', isHash: true, section: 'hero' },
    { name: 'Industries', href: '/#services', isHash: true, section: 'services' },
    { name: 'Portfolio', href: '/#portfolio', isHash: true, section: 'portfolio' },
    { name: 'Agency', href: '/#agency', isHash: true, section: 'agency' },
    { name: 'Assistant', href: '/#assistant', isHash: true, section: 'assistant' },
    { name: 'Pricing', href: '/#pricing', isHash: true, section: 'pricing' },
    { name: 'Contact', href: '/#footer', isHash: true, section: 'footer' },
  ];

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        if (link.isHash && link.section) {
          const section = document.getElementById(link.section);
          if (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(link.section);
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    
    if (link.isHash) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate(link.href);
      } else {
        const element = document.getElementById(link.section!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav ${isScrolled ? 'py-4 shadow-lg' : 'py-6 shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={(e) => handleLinkClick(e, navLinks[0])} className="flex items-center space-x-4 group">
          <div className="w-16 md:w-20 h-16 md:h-20 flex items-center justify-center overflow-hidden">
            <img src={LOGO_URL} alt="Arise AI" className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={`text-lg md:text-xl font-black tracking-[-0.03em] uppercase leading-none transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>Arise AI <span className={isScrolled ? 'text-[#357FA6]' : 'text-[#357FA6]'}>Marketing</span></span>
            <span className={`text-[9px] font-black tracking-[0.3em] uppercase mt-2 transition-colors duration-300 ${isScrolled ? 'text-[#CE5826]' : 'text-[#CE5826]'}`}>Agency</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-[11px] font-black tracking-[0.2em] transition-all duration-300 uppercase relative py-1
                ${(link.isHash && activeSection === link.section) || (!link.isHash && location.pathname === link.href) 
                  ? 'text-[#CE5826]' 
                  : 'text-slate-700 hover:text-slate-900'}`}
            >
              {link.name}
              {((link.isHash && activeSection === link.section) || (!link.isHash && location.pathname === link.href)) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-[#CE5826]" />
              )}
            </Link>
          ))}
          <Link 
            to="/training"
            className="px-6 py-3 bg-slate-900 hover:bg-[#CE5826] text-white font-black rounded-xl text-[10px] tracking-[0.2em] transition-all duration-300 shadow-xl shadow-slate-900/10 uppercase flex items-center"
          >
            <GraduationCap size={14} className="mr-2" />
            Join Training
          </Link>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden w-14 h-14 flex items-center justify-center text-slate-900 bg-white shadow-xl rounded-2xl border border-slate-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-3xl lg:hidden flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center space-x-4">
                <img src={LOGO_URL} alt="Arise AI" className="w-12 h-12 object-contain" />
                <span className="font-black text-slate-900 text-lg tracking-tighter uppercase">Menu Center</span>
              </div>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <X size={28} />
              </motion.button>
            </div>

            <div className="flex flex-col space-y-8 flex-grow">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    to={link.href} 
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`text-4xl font-black tracking-tighter uppercase transition-all block
                      ${((link.isHash && activeSection === link.section) || (!link.isHash && location.pathname === link.href)) ? 'text-[#CE5826] translate-x-4' : 'text-slate-900 opacity-60'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-12 border-t border-slate-100 flex flex-col space-y-8">
              <Link 
                to="/training"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-10 py-8 bg-[#CE5826] text-white font-black rounded-[2.5rem] text-xs tracking-[0.4em] uppercase shadow-2xl shadow-orange-500/20 flex items-center justify-center"
              >
                <GraduationCap size={20} className="mr-3" />
                Join Training Program
              </Link>
              
              <div className="flex items-center justify-center space-x-8">
                <a href="https://wa.me/250794785167" className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#25D366] transition-colors"><MessageCircle size={24} /></a>
                <a href="https://www.instagram.com/arise1_marketing/" className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#E4405F] transition-colors"><Instagram size={24} /></a>
                <a href="https://www.tiktok.com/@ariseaimarketingagency" className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-black transition-colors"><TikTokIcon size={24} /></a>
              </div>
              
              <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] pb-8">Arise AI Marketing Agency • Rwanda</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
