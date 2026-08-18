import React from 'react';
import { STATS } from '../../data/statsData';
import ScrollReveal from '../ui/RevealOnScroll';
import './About.css';
import { 
  ArrowRight, FileText, CheckCircle, 
  Terminal, Zap, Globe, Sparkles
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-ambient-glow"></div>
      
      <ScrollReveal direction="up" delay={0.1}>
        <div className="container about-container">
          
          <div className="about-header-center">
            <div className="about-tag-badge">
              <Sparkles size={13} className="tag-icon" />
              <span>Inženýrská preciznost</span>
            </div>
            <h2 className="about-title-pro">
              Architektura. <span className="ember-text-gradient">Výkon. Spolehlivost.</span>
            </h2>
          </div>

          {/* BENTO GRID */}
          <div className="bento-grid">
            
            {/* KARTA 1: BIO (7 sloupců) */}
            <div className="bento-card bento-bio">
              <div>
                <h3 className="bento-card-title">Technické zázemí pro váš byznys</h3>
                <p className="about-desc-pro">
                  Pomáhám firmám a startupům stavět prémiové digitální produkty. Můj přístup stojí na maximální efektivitě, čisté architektuře a striktním dodržování moderních standardů. Tvořím škálovatelné nástroje, které mají reálný dopad na váš růst.
                </p>
                
                <div className="expertise-grid">
                  <div className="expertise-item-pro">
                    <CheckCircle size={15} className="check-icon" />
                    <span>Výkonné webové aplikace</span>
                  </div>
                  <div className="expertise-item-pro">
                    <CheckCircle size={15} className="check-icon" />
                    <span>E-shopy & Interní systémy</span>
                  </div>
                  <div className="expertise-item-pro">
                    <CheckCircle size={15} className="check-icon" />
                    <span>Škálovatelná architektura</span>
                  </div>
                  <div className="expertise-item-pro">
                    <CheckCircle size={15} className="check-icon" />
                    <span>Taktilní UX/UI design</span>
                  </div>
                </div>
              </div>

              <div className="about-buttons-pro">
                <a href="#contact" className="btn-raycast-primary">
                  <span>Navázat spolupráci</span>
                  <ArrowRight size={15} />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-raycast-secondary">
                  <FileText size={15} />
                  <span>Stáhnout CV</span>
                </a>
              </div>
            </div>

            {/* KARTA 2: RAYCAST TERMINAL SIMULATOR (5 sloupců) */}
            <div className="bento-card bento-code">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="window-title">
                    <Terminal size={12} />
                    <span>config.ts</span>
                  </div>
                </div>
                <div className="window-body">
                  <pre>
                    <code>
                      <span className="k font-bold">export const</span> <span className="f">Standards</span> = <span className="b">{`{`}</span>{'\n'}
                      <span className="indent"><span className="p">performance:</span> <span className="s">100</span>,</span>{'\n'}
                      <span className="indent"><span className="p">ui_precision:</span> <span className="s">'Pixel-Perfect'</span>,</span>{'\n'}
                      <span className="indent"><span className="p">architecture:</span> <span className="s">'Scalable'</span>,</span>{'\n'}
                      <span className="indent"><span className="p">stack:</span> [<span className="s">'React'</span>, <span className="s">'Node'</span>, <span className="s">'TS'</span>]</span>{'\n'}
                      <span className="b">{`}`}</span>;
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* KARTA 3: LOCATION & AVAILABILITY (5 sloupců) */}
            <div className="bento-card bento-location">
              <div className="location-content">
                <div className="globe-box">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="card-sub-title">Česká republika & Remote</h4>
                  <p className="card-sub-desc">Dostupný pro klienty globálně (UTC+1).</p>
                </div>
              </div>
            </div>

            {/* KARTA 4: FEATURE ZERO COMPROMISE (7 sloupců) */}
            <div className="bento-card bento-feature">
              <div className="feature-icon-box">
                <Zap size={18} />
              </div>
              <div>
                <h4 className="card-sub-title">Zero Compromise Standard</h4>
                <p className="card-sub-desc">Každý řádek kódu má svúj smysl. Rychlost načítání, bezpečnost dat a plynulost animací na prvním místě.</p>
              </div>
            </div>

          </div>

          {/* STATISTIKY S TAKTILNÍM ODDĚLOVAČEM */}
          <div className="stats-wrapper-pro">
            <div className="stats-grid-pro">
              {STATS.map((stat) => (
                <div key={stat.id} className="stat-card-pro">
                  <h3 className="stat-num">{stat.number}</h3>
                  <p className="stat-txt">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default About;