
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

// EDIT THIS ADDRESS TO UPLOAD YOUR LOGO
const LOGO_URL = "https://i.imgur.com/lYz6Y6B.png"; 

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Industries', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#footer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.substring(1));
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center space-x-4 group">
          <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
            {LOGO_URL ? (
              <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <div className="w-full h-full bg-slate-100 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-[8px] font-black text-slate-400 uppercase text-center p-1">Logo Area</div>
            )}
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl md:text-2xl font-black tracking-[-0.03em] text-slate-900 uppercase leading-none">Arise AI <span className="text-[#0077FF]">Marketing</span></span>
            <span className="text-[9px] font-black tracking-[0.5em] text-[#FF7F00] uppercase mt-1">Agency</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-[11px] font-black tracking-[0.2em] transition-all duration-300 uppercase relative py-1
                ${activeSection === link.href.substring(1) ? 'text-[#FF7F00]' : 'text-slate-700 hover:text-slate-900'}`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7F00] rounded-full" />
              )}
            </a>
          ))}
          <a 
            href="https://wa.me/250795590127" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-900 hover:bg-[#FF7F00] text-white font-black rounded-2xl text-[10px] tracking-[0.2em] transition-all duration-300 shadow-xl shadow-slate-900/10 uppercase"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 flex items-center justify-center text-slate-900 bg-white shadow-md rounded-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-nav py-12 px-6 flex flex-col items-center space-y-8 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-2xl font-black tracking-tighter uppercase transition-colors
                ${activeSection === link.href.substring(1) ? 'text-[#FF7F00]' : 'text-slate-700 hover:text-slate-900'}`}
            >
              {link.name}
            </a>
          ))}
          <div className="w-full pt-8 flex flex-col items-center space-y-6">
            <a 
              href="https://wa.me/250795590127" 
              className="w-full text-center px-6 py-6 bg-slate-900 text-white font-black rounded-[2rem] text-sm tracking-widest uppercase shadow-xl"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
