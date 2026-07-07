import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Zkontrolujeme localStorage
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Elegantní delay 600ms – web se načte a pak jemně vyjede lišta
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    /* Pokud bys chtěl web na pozadí úplně zablokovat (přísný režim), 
       stačí obalit banner ještě do jednoho divu s třídou "cookie-overlay" */
    <div className="cookie-banner">
      <div className="cookie-content">
        <p className="cookie-text">
          Tento web používá cookies pro základní analytiku a lepší uživatelský zážitek. 🍪
          <Link to="/privacy-policy" className="cookie-link"> Více informací</Link>
        </p>
        <div className="cookie-buttons">
          <button onClick={handleDecline} className="btn-decline">Pouze nutné</button>
          <button onClick={handleAccept} className="btn-accept">Přijmout vše</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;