import React from 'react';
import './About.css';
import { 
  ArrowUpRight, Download, Terminal, 
  Zap 
} from 'lucide-react';

const TECH_STACK = [
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Tailwind", level: "Advanced" },
  { name: "TypeScript", level: "Learning" }
];

// Data pro tvé statistiky
/* const STATS = [
  { id: 1, number: '3+', label: 'Roky praxe' },
  { id: 2, number: '15+', label: 'Dokončených projektů' },
  { id: 3, number: '100%', label: 'Spokojenost klientů' },
  { id: 4, number: '24/7', label: 'Support & Údržba' },
]; */

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Ambientní pozadí (záře) */}
      <div className="ambient-glow left"></div>
      <div className="ambient-glow right"></div>

      <div className="container about-container">
        <div className="about-grid">
          
          {/* LEVÁ ČÁST - TEXT */}
          <div className="about-content">
            <div className="section-header">
              <div className="icon-box">
                <Terminal size={20} />
              </div>
              <span className="section-tag">O mně</span>
            </div>

            <h2 className="about-title">
              Nejsem jen student. <br />
              <span className="text-gradient">Jsem tvůrce.</span>
            </h2>

            <p className="about-desc">
              Zatímco ostatní řeší teorii, já stavím projekty. Specializuji se na 
              <strong className="text-white"> React ekosystém</strong>. Můj kód je čistý, 
              weby rychlé a spolupráce se mnou bezbolestná.
            </p>

            {/* Tech Stack Grid */}
            <div className="tech-grid">
              {TECH_STACK.map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-header">
                    <Zap size={14} className="tech-icon" />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                  <div className="tech-bar">
                    <div className={`tech-fill ${tech.name.toLowerCase()}`}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-buttons">
              {/* Tlačítko Spolupracovat - Odkaz na kontakt */}
              <a href="#contact" className="btn-primary-glow" aria-label="Přejít na sekci kontakt">
                Spolupracovat <ArrowUpRight size={18} />
              </a>

              {/* Tlačítko Stáhnout CV - Přímý download PDF */}
              <a 
                href="/Resume_Martin_Habenicht.pdf" 
                download="Resume_Martin_Habenicht.pdf" 
                className="btn-secondary-glass" 
                aria-label="Stáhnout mé CV ve formátu PDF"
              >
                Stáhnout CV <Download size={18} />
              </a>
            </div>
          </div>

          {/* PRAVÁ ČÁST - FOTKA + KÓD */}
          <div className="about-visual">
            <div className="image-frame">
              <img 
                src="/me.webp" 
                alt="Workspace" 
                className="main-image" 
                loading="lazy"
              />
              
              {/* Přidaný overlay pro tmavý gradient pod oknem kódu */}
              <div className="dark-gradient-overlay"></div>
              
              {/* Plovoucí okno s kódem */}
              <div className="code-window">
                <div className="window-header">
                  <div className="dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="window-title">Developer.jsx</span>
                </div>
                <div className="window-body">
                  <div className="code-line">
                    <span className="k">const</span> <span className="f">Martin</span> = <span className="b">()</span> <span className="k">=&gt;</span> <span className="b">{`{`}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="k">return</span> (
                  </div>
                  <div className="code-line double-indent">
                    <span className="t">&lt;Developer</span>
                  </div>
                  <div className="code-line triple-indent">
                    <span className="p">passion</span>=<span className="s">"100%"</span>
                  </div>
                  <div className="code-line triple-indent">
                    <span className="p">skills</span>=<span className="b">{`{['React', 'Next']}`}</span>
                  </div>
                  <div className="code-line double-indent">
                    /&gt;
                  </div>
                  <div className="code-line indent">
                    );
                  </div>
                  <div className="code-line"><span className="b">{`}`}</span></div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* --- STATISTIKY --- 
        <div className="stats-wrapper">
          <div className="stats-grid">
            {STATS.map((stat) => (
              <div key={stat.id} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        */}

      </div>
    </section>
  );
};

export default About;