import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return !localStorage.getItem('cookieConsent');
  });

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