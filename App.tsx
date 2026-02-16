
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AriseAIWidget from './components/AriseAIWidget';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectIndustry = (category: string) => {
    setActiveCategory(category);
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-blue-500/10">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="services" className="py-24 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
          <Services onSelectIndustry={handleSelectIndustry} />
        </section>

        <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-50/50">
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
          <Portfolio 
            selectedCategory={activeCategory} 
            onClearFilter={() => setActiveCategory(null)} 
          />
        </section>

        <section id="pricing" className="py-24 relative overflow-hidden bg-white">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] -z-10" />
          <Pricing />
        </section>

        <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50/30">
          <Testimonials />
        </section>
      </main>

      <Footer />
      <AriseAIWidget />
    </div>
  );
};

export default App;
