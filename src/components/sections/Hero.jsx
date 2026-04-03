import React from 'react';
import './Hero.css';
import { ArrowRight } from 'lucide-react';

/* --- KONFIGURACE DOSTUPNOSTI --- */
const WORK_LOAD = {
  current: 0,      // Kolik máš teď projektů
  max: 2,          // Kolik zvládneš maximálně
  nextDate: "Březen 2026" // Kdy budeš mít čas (pokud jsi plný)
};

const Hero = () => {

    const isAvailable = WORK_LOAD.current < WORK_LOAD.max;

  return (
    <section className="hero">
      {/* Efekt záře za textem pro lepší čitelnost na Aurora pozadí */}
      <div className="hero-glow-backdrop"></div>

      <div className="container hero-content">
        
        {/* --- STATUS BADGE (Automatizovaný) --- */}
        <div className={`status-badge ${isAvailable ? 'available' : 'busy'} animate-fade-in`}>
          <div className="status-dot-container">
            <span className="status-dot"></span>
            <span className="status-dot-ping"></span>
          </div>
          <span className="status-text">
            {isAvailable 
              ? "Dostupný pro nové projekty" 
              : `Nejsem dostupný do ${WORK_LOAD.nextDate}`
            }
          </span>
        </div>

        {/* --- TVOJE JMÉNO (NOVÉ) --- */}
        <h2 className="hero-name animate-slide-up" style={{animationDelay: '0.05s'}}>
            Ahoj, jsem <span className="name-highlight">Martin Habenicht</span>
        </h2>
        
        {/* Vylepšený nadpis s gradientem */}
        <h1 className="hero-title animate-slide-up" style={{animationDelay: '0.1s'}}>
          <span className="text-gradient-shine">Vývojář a Designér</span>
          <br /> s důrazem na detail.
        </h1>
        
        <p className="hero-text animate-slide-up" style={{animationDelay: '0.3s'}}>
          Jsem frontend vývojář specializující se na React a moderní UI. 
          Měním komplexní problémy na jednoduchá a krásná rozhraní.
        </p>
        
        <div className="hero-buttons animate-slide-up" style={{animationDelay: '0.5s'}}>
  
            {/* PRIMÁRNÍ TLAČÍTKO */}
            <a href="#projects" className="hero-btn-primary" aria-label="Zobrazit mé projekty">
                <span className="btn-content">
                Moje práce <ArrowRight size={18} className="btn-icon" />
                </span>
                {/* Záře na pozadí tlačítka */}
                <div className="btn-glow-effect"></div>
            </a>

            {/* SEKUNDÁRNÍ TLAČÍTKO */}
            <a href="#contact" className="hero-btn-secondary" aria-label="Kontaktovat mě">
                Kontaktovat
            </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;