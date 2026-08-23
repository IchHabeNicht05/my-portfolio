import React from 'react';
import './Hero.css';
import ScrollReveal from '../ui/RevealOnScroll';
import { ArrowRight, Terminal, Sparkles, Gauge } from 'lucide-react';

const Hero = ({ onOpenInquiry }) => {
  const isAvailable = true; 

  return (
    <section id="hero" className="hero">
      {/* Živá jantaro-fialová aura v pozadí */}
      <div className="raycast-aura"></div>
      <div className="grid-pattern"></div>
      
      <ScrollReveal direction="up" delay={0.1}>
        <div className="container hero-content">
          
          {/* Status Badge + Lighthouse 100/100 Trust Badge */}
          <div className="raycast-badge-wrapper animate-fade-in">
            <div className="raycast-badge">
              <span className="live-dot"></span>
              <span className="badge-text">
                {isAvailable ? "Volná kapacita" : "Kapacita naplněna"}
              </span>
            </div>

            <div className="raycast-badge lighthouse-badge">
              <Gauge size={13} className="lighthouse-icon" />
              <span className="badge-text font-mono">
                Lighthouse <strong className="score-text">100/100</strong>
              </span>
            </div>
          </div>

          {/* Hlavní Headline s ohnivým gradientem */}
          <h1 className="hero-title animate-slide-up">
            Kóduji digitální produkty <br />
            s <span className="ember-text">duší a extrémním výkonem.</span>
          </h1>
          
          <p className="hero-text animate-slide-up">
            Full-Stack vývojář se zaměřením na React, TypeScript a Node.js. Spojuji taktilní mikromoderní UI, bleskovou architekturu a nekompromisní smysl pro každý pixel.
          </p>
          
          {/* Taktilní tlačítka */}
          <div className="hero-buttons animate-slide-up">
            <button onClick={onOpenInquiry} className="btn-raycast-primary">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Zahájit projekt</span>
              <ArrowRight size={16} />
            </button>

            <a href="#projects" className="btn-raycast-secondary">
              <Terminal size={15} />
              <span>Prohlédnout práce</span>
            </a>
          </div>
          
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Hero;