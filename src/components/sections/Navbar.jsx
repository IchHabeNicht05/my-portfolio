import React, { useState, useEffect } from 'react';
import InquiryModal from './InquiryModal';
import './Navbar.css';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Domů', href: '#hero' },
  { label: 'O mně', href: '#about' },
  { label: 'Zkušenosti', href: '#experience' },
  { label: 'Projekty', href: '#projects' },
  { label: 'Služby', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Recenze', href: '#reviews' },
  { label: 'Kontakt', href: '#contact' },
];

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('cs-CZ', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        
        {/* LEVÁ ČÁST - LOGO + LOKACE */}
        <div className="nav-left">
          <a href="#" className="nav-logo" aria-label="Přejít na hlavní stránku">
            Martin<span className="highlight">.</span>dev
          </a>
          
          <div className="nav-location-divider"></div>
          <div className="nav-location">
            <span className="location-city">Prague</span>
            <span className="location-time">{formattedTime}</span>
          </div>
        </div>

        {/* PROSTŘEDNÍ ČÁST - ODKAZY NA SEKCÍ */}
        <div className="nav-center">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* PRAVÁ ČÁST - AKCE & SOCIÁLNÍ SÍTĚ */}
        <div className="nav-right">
          <div className="social-icons">
            <a 
              href="https://github.com/IchHabeNicht05" 
              target="_blank" 
              rel="noreferrer" 
              className="nav-icon" 
              aria-label="GitHub"
            >
              <Github size={17} strokeWidth={2} />
            </a>
            <a 
              href="https://www.linkedin.com/in/martin-habenicht-bbb22a3a1/" 
              target="_blank" 
              rel="noreferrer" 
              className="nav-icon" 
              aria-label="LinkedIn"
            >
              <Linkedin size={17} strokeWidth={2} />
            </a>
          </div>
          
          <div className="divider"></div>
          
          <button 
            onClick={() => setIsInquiryOpen(true)} 
            className="nav-btn-contact" 
            aria-label="Otevřít poptávkový formulář"
          >
            <span>Poptat</span>
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </button>
        </div>

      </nav>
      
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </header>
  );
};

export default Navbar;