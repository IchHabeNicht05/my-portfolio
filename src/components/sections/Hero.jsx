import React from 'react';
import './Hero.css';
import ScrollReveal from '../ui/RevealOnScroll';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  // Pro firmy je důležitá dostupnost a jasný timeline
  const isAvailable = true; 

  return (
    <section className="hero">
      <div className="hero-ambient-glow"></div>
      <ScrollReveal direction="up" delay={0.1}>

      <div className="container hero-content">
        
        {/* Status Badge - čistší, korporátní design */}
        <div className="status-badge-pro animate-fade-in">
          <span className="status-indicator"></span>
          <span className="status-label">
            {isAvailable ? "Přijímám nové projekty" : "Aktuálně plná kapacita"}
          </span>
        </div>

        {/* Headline - Ocelový gradient a precizní typografie */}
        <h1 className="hero-title animate-slide-up">
          Stavím digitální řešení, <br />
          která <span className="hero-text-gradient">pohánějí váš byznys.</span>
        </h1>
        
        <p className="hero-text animate-slide-up">
          Full-stack vývojář specializovaný na výkonné webové aplikace a vizuální identitu. 
          Spojuji technickou preciznost s designem, který buduje autoritu vaší značky.
        </p>
        
        <div className="hero-buttons animate-slide-up">
            <a href="#projects" className="btn-pro-primary">
                Zobrazit případové studie
                <ArrowRight size={18} strokeWidth={2.5} />
            </a>

            <a href="#contact" className="btn-pro-secondary">
                Konzultovat projekt
            </a>
        </div>
        
      </div>
      </ScrollReveal>
    </section>
  );
};

export default Hero;