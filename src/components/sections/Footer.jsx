import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Footer.css';
import { Github, Linkedin, ArrowUp, Mail } from 'lucide-react';

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
    <footer className="footer-section">
      <div className="footer-glow-bg"></div>

      <div className="container footer-container">
        {/* MASIVNÍ CTA KARTA */}
        <div className="footer-cta-card">        
          <h2 className="footer-cta-heading">
            Máte nápad na projekt? <br/>
            <span className="ember-text-gradient">Pojďme ho realizovat.</span>
          </h2>
          <a href="mailto:martin.habenicht05@gmail.com" className="btn-footer-cta">
            <Mail size={18} />
            <span>Napište mi e-mail</span>
          </a>
        </div>

        {/* PROSTŘEDNÍ NAVIGAČNÍ LIŠTA */}
        <div className="footer-links-row">
          <div className="footer-brand">
            <span className="brand-logo-text">Martin Habenicht</span>
            <p className="brand-tagline">Weby & Digitální řešení</p>
          </div>

          <nav className="footer-nav-minimal">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>O mně</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Služby</a>
            <a href="#workflow" onClick={(e) => handleNavClick(e, 'workflow')}>Proces</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projekty</a>
            <Link to="/privacy-policy">Soukromí</Link>
          </nav>

          <div className="footer-socials-minimal">
            <a 
              href="https://github.com/IchHabeNicht05" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              className="social-icon-link"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/martin-habenicht-bbb22a3a1/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="social-icon-link"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* SPODNÍ LIŠTA */}
        <div className="footer-bottom-bar">
          <div className="footer-info-group">
            <p>© {new Date().getFullYear()} <strong>Martin Habenicht</strong>. Všechna práva vyhrazena.</p>
          </div>
          
          <button onClick={scrollToTop} className="scroll-to-top" aria-label="Zpět nahoru">
            <span>Nahoru</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;