import React, { useState, useEffect } from 'react';
import InquiryModal from './InquiryModal';
import './Navbar.css';
import { Mail, Github, Linkedin, ArrowUpRight, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  // --- 1. Logika pro čas ---
  const [time, setTime] = useState(new Date());
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000); // Aktualizuje každou minutu
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('cs-CZ', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  // --- 1. Logika pro Light/Dark mode ---
 {/*const [isLightMode, setIsLightMode] = useState(() => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'light';
});

  // 2. useEffect teď bude řešit už jen manipulaci s DOMem (třídu na body)
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);
  */}

  {/*const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };*/}

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

        {/* PRAVÁ ČÁST - AKCE */}
        <div className="nav-right">
          
          {/* TLAČÍTKO PRO PŘEPÍNÁNÍ REŽIMU
          <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Přepnout téma"
          >
              {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          */}
                  
          <div className="social-icons">
            <a href="https://github.com/IchHabeNicht05" target="_blank" rel="noreferrer" className="nav-icon" aria-label="GitHub">
              <Github size={18} strokeWidth={2} />
            </a>
            <a href="https://www.linkedin.com/in/martin-habenicht-bbb22a3a1/" target="_blank" rel="noreferrer" className="nav-icon" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={2} />
            </a>
          </div>
          
          <div className="divider"></div>
          
          <button 
            onClick={() => setIsInquiryOpen(true)} 
            className="nav-btn-contact" 
            style={{ border: 'none', cursor: 'pointer' }}
            aria-label="Otevřít poptávkový formulář"
          >
            Poptat <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>
        </div>

      </nav>
      
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </header>
  );
};

export default Navbar;