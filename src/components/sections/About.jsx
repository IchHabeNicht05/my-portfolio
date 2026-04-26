import React from 'react';
import { STATS } from '../../data/statsData';
import ScrollReveal from '../ui/RevealOnScroll'; // Tvůj import
import './About.css';
import { 
  ArrowUpRight, Download, ShieldCheck, 
  CheckCircle2, Laptop, Video
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Ambientní indigo záře */}
      <div className="ambient-glow-pro"></div>
      <ScrollReveal direction="up" delay={0.1}>

      <div className="container about-container">
        <div className="about-grid">
          
          {/* LEVÁ ČÁST - TEXT A STRATEGIE */}
          <div className="about-content">
            <div className="section-header-pro">
              <div className="icon-box-pro">
                <ShieldCheck size={18} />
              </div>
              <span className="section-tag-pro">Strategický partner</span>
            </div>

            <h2 className="about-title-pro">
              Vaše vize. <br />
              <span className="text-pro-gradient">Moje exekutiva.</span>
            </h2>

            <p className="about-desc-pro">
              Pomáhám firmám transformovat nápady do prémiových digitálních produktů. 
              Můj přístup stojí na <strong className="text-white">maximální efektivitě</strong>, čistém kódu a vizuálním storytellingu. 
              Nedělám jen weby, tvořím nástroje pro váš růst.
            </p>

            <div className="expertise-list">
              <div className="expertise-item-pro">
                <div className="check-circle"><CheckCircle2 size={16} /></div>
                <span>Enterprise-ready weby</span>
              </div>
              <div className="expertise-item-pro">
                <div className="check-circle"><CheckCircle2 size={16} /></div>
                <span>E-commerce a firemní systémy</span>
              </div>
              <div className="expertise-item-pro">
                <div className="check-circle"><CheckCircle2 size={16} /></div>
                <span>High-end postprodukce a video</span>
              </div>
              <div className="expertise-item-pro">
                <div className="check-circle"><CheckCircle2 size={16} /></div>
                <span>SEO a technická optimalizace</span>
              </div>
            </div>

            <div className="about-buttons-pro">
              <a href="#contact" className="btn-pro-primary">
                Konzultovat projekt <ArrowUpRight size={18} />
              </a>

              <a href="/Resume_Martin_Habenicht.pdf" className="btn-pro-outline">
                Stáhnout CV <Download size={18} />
              </a>
            </div>
          </div>

          {/* PRAVÁ ČÁST - FOTKA + PROFI VIZUÁL */}
          <div className="about-visual-pro">
            <div className="image-frame-pro">
              <img 
                src="/me.webp" 
                alt="Martin Habenicht" 
                className="main-image-pro" 
              />
              <div className="image-overlay"></div>
              
              {/* Solution Code Window */}
              <div className="code-window-pro">
                <div className="window-header-pro">
                  <div className="dots-pro">
                    <span className="d-red"></span>
                    <span className="d-yellow"></span>
                    <span className="d-green"></span>
                  </div>
                  <span className="w-title">Production.ts</span>
                </div>
                <div className="window-body-pro">
                  <span className="k">const</span> <span className="f">Quality</span> = <span className="b">{`{`}</span>
                  <div className="indent"><span className="p">performance:</span> <span className="s">100</span>,</div>
                  <div className="indent"><span className="p">ui_precision:</span> <span className="s">'Pixel-Perfect'</span>,</div>
                  <div className="indent"><span className="p">status:</span> <span className="s">'Scalable'</span></div>
                  <span className="b">{`}`}</span>;
                </div>
              </div>
            </div>
          </div>

        </div>

        { /* --- STATISTIKY --- */ }
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