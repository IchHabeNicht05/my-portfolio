import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Github, Linkedin, ArrowUp, Mail, FileText } from 'lucide-react'; // Přidána ikona FileText

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-glass">
      <div className="footer-glow-bg"></div>

      <div className="container relative-z">
        {/* CTA KARTA */}
        <div className="glass-cta-card">        
          <h2 className="glass-cta-heading">
            Máte nápad na projekt? <br/>
            <span className="text-gradient">Pojďme ho realizovat.</span>
          </h2>
          <a href="mailto:martin.habenicht05@gmail.com" className="primary-glow-btn">
            <Mail size={18} /> Napsat zprávu
          </a>
        </div>

        {/* ODKAZY */}
        <div className="footer-links-row">
          <div className="footer-brand">
            <a href="/" onClick={(e) => handleNavClick(e, 'home')}>
              Martin<span className="brand-dot">.</span>dev
            </a>
          </div>

          <nav className="footer-nav-minimal">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>O mně</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Služby</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projekty</a>
            {/* Přidán odkaz na Privacy Policy i sem pro snadnou dostupnost */}
            <Link to="/privacy-policy">Soukromí</Link>
          </nav>

          <div className="footer-socials-minimal">
            <a href="https://github.com/IchHabeNicht05" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/martin-habenicht-bbb22a3a1/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* SPODNÍ LIŠTA S KOMPLETNÍMI ÚDAJI */}
        <div className="footer-bottom-bar">
          <div className="footer-info-group">
            <p>© {new Date().getFullYear()} <strong>Martin Habenicht</strong>. Všechna práva vyhrazena.</p>
            
            {/*<div className="footer-billing-info">
              <FileText size={12} />
              <span>
                IČO: 12345678 • [Ulice a č.p., PSČ Město] • Fyzická osoba zapsaná v živnostenském rejstříku. Nejsem plátce DPH.
              </span>
            </div>*/}
          </div>
          
          <button onClick={scrollToTop} className="scroll-to-top" aria-label="Zpět nahoru">
            <span>Zpět nahoru</span>
            <div className="icon-circle">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;