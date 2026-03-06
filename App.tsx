
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Portfolio from './components/Portfolio.tsx';
import Pricing from './components/Pricing.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import AriseAIWidget from './components/AriseAIWidget.tsx';
import TrainingPage from './components/TrainingPage.tsx';
import MarketingAssistant from './components/MarketingAssistant.tsx';
import AgencyOverview from './components/AgencyOverview.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC<{ onSelectIndustry: (cat: string) => void, activeCategory: string | null, setActiveCategory: (cat: string | null) => void }> = ({ onSelectIndustry, activeCategory, setActiveCategory }) => (
  <main>
    <section id="hero">
      <Hero />
    </section>

    <section id="services" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <Services onSelectIndustry={onSelectIndustry} />
    </section>

    <section id="agency" className="py-24 relative overflow-hidden bg-slate-50/10">
      <AgencyOverview />
    </section>

    <section id="assistant" className="py-24 relative overflow-hidden bg-slate-50/20">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] -z-10" />
      <MarketingAssistant />
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
);

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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FDFDFD] selection:bg-blue-500/10 overflow-x-hidden">
        <Navbar isScrolled={isScrolled} />
        
        <Routes>
          <Route path="/" element={
            <HomePage 
              onSelectIndustry={handleSelectIndustry} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />
          } />
          <Route path="/training" element={<TrainingPage />} />
        </Routes>

        <Footer />
        <AriseAIWidget />
      </div>
    </Router>
  );
};

export default App;
