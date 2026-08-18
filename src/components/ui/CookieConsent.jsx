import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
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
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Nastavení souborů cookie">
      <div className="cookie-content">
        <div className="cookie-header">
          <div className="cookie-icon-wrapper">
            <Cookie size={20} className="text-primary" />
          </div>
          <p className="cookie-text">
            Tento web používá cookies pro základní analytiku a lepší uživatelský zážitek.{' '}
            <Link to="/privacy-policy" className="cookie-link">
              Více informací
            </Link>
          </p>
        </div>

        <div className="cookie-buttons">
          <button onClick={handleDecline} className="btn-decline">
            Pouze nutné
          </button>
          <button onClick={handleAccept} className="btn-accept">
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;