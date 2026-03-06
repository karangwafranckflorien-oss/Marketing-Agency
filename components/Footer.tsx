
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, Instagram, MessageCircle, ChevronRight, Globe } from 'lucide-react';

// EDIT THIS ADDRESS TO UPLOAD YOUR LOGO
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

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', href: '/', isHash: true, section: 'hero' },
    { name: 'Industries', href: '/#services', isHash: true, section: 'services' },
    { name: 'Agency', href: '/#agency', isHash: true, section: 'agency' },
    { name: 'Portfolio', href: '/#portfolio', isHash: true, section: 'portfolio' },
    { name: 'Pricing', href: '/#pricing', isHash: true, section: 'pricing' },
    { name: 'Training', href: '/training', isHash: false },
    { name: 'Contact', href: '/#footer', isHash: true, section: 'footer' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof quickLinks[0]) => {
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
    <footer id="footer" className="bg-white py-24 border-t border-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="w-48 h-48 mb-6 flex items-center justify-center overflow-hidden">
             {LOGO_URL ? (
                <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain drop-shadow-2xl" />
             ) : (
                <div className="w-full h-full bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-xs font-black text-slate-300 uppercase text-center p-3">Upload Logo Here</div>
             )}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-black tracking-[-0.05em] text-slate-900 uppercase leading-none">Arise AI <span className="text-[#0077FF]">Marketing</span></span>
            <span className="text-xs font-bold tracking-[0.4em] text-[#FF7F00] uppercase mt-3 border-t border-orange-50 pt-3">Agency</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 max-w-5xl mx-auto">
          {/* Quick Links Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#FF7F00] font-black uppercase tracking-[0.4em] text-xs mb-8">Navigation</h4>
            <ul className="space-y-5 flex flex-col items-center md:items-start">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    onClick={(e) => handleLinkClick(e, link)}
                    className="group flex items-center text-sm font-bold text-slate-600 hover:text-[#0077FF] transition-colors"
                  >
                    <ChevronRight size={16} className="mr-3 text-[#FF7F00] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#FF7F00] font-black uppercase tracking-[0.4em] text-xs mb-8">Direct Contact</h4>
            <div className="space-y-8">
              <a href="mailto:ariseaimarketingagency@gmail.com" className="flex items-center space-x-5 group justify-center md:justify-start">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#0077FF] transition-all duration-300 border border-slate-100 shadow-sm">
                  <Mail size={20} className="text-slate-600 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Direct Email</span>
                  <span className="text-sm font-black text-slate-900">ariseaimarketingagency@gmail.com</span>
                </div>
              </a>
              <div className="flex items-center space-x-5 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                  <Phone size={20} className="text-slate-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Call Support</span>
                  <span className="text-base font-black text-slate-900">+250 794 785 167</span>
                </div>
              </div>
              <a href="https://www.ariseaiagency.com/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-5 group justify-center md:justify-start">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-[#FF7F00] transition-all">
                  <Globe size={20} className="text-slate-600 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Official Website</span>
                  <span className="text-base font-black text-slate-900">www.ariseaiagency.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Social Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#FF7F00] font-black uppercase tracking-[0.4em] text-xs mb-8">Follow Our Growth</h4>
            <div className="flex space-x-5">
              <a 
                href="https://wa.me/250794785167" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:shadow-xl hover:border-[#25D366] transition-all group shadow-sm"
              >
                <MessageCircle size={24} className="text-slate-700 group-hover:text-[#25D366]" />
              </a>
              <a 
                href="https://www.instagram.com/arise1_marketing/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:shadow-xl hover:border-[#E4405F] transition-all group shadow-sm"
              >
                <Instagram size={24} className="text-slate-700 group-hover:text-[#E4405F]" />
              </a>
              <a 
                href="https://www.tiktok.com/@ariseaimarketingagency" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:shadow-xl hover:border-black transition-all group shadow-sm"
              >
                <TikTokIcon size={24} className="text-slate-700 group-hover:text-black" />
              </a>
            </div>
            <p className="mt-10 text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-left leading-relaxed">
              ARISE AI MARKETING AGENCY IS UNDER <br />
              <span className="text-slate-900 font-black">ARISE DIGITAL SOLUTIONS LTD. - RWANDA</span>
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 text-center">
          <p className="text-[#FF7F00] text-sm font-black tracking-[0.3em] uppercase">
            © 2026 Arise Digital Solutions Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase">
              ELEVATING BRANDS CROSS AFRICA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
