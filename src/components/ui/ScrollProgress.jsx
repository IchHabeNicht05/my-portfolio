import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      const progress = scrollableHeight > 0 ? scrolled / scrollableHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // KORREKCE GEOMETRIE: Pro kontejner 66x66px je ideální radius 30 (střed 33)
  const radius = 30;
  const circumference = 2 * Math.PI * radius; // cca 188.5
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div 
      className={`scroll-progress-wrapper ${scrollProgress > 0.05 ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Zpět nahoru"
      aria-label="Zpět na začátek stránky"
    >
      {/* 1. SKLENĚNÉ POZADÍ (Pod indikátorem) */}
      <div className="progress-icon">
        <ArrowUp size={20} />
      </div>

      {/* 2. PROGRESS RING (Plave na povrchu nad sklem) */}
      <svg className="progress-ring" width="66" height="66" viewBox="0 0 66 66">
        <circle
          className="progress-ring-bg"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="33" 
          cy="33"
        />
        <circle
          className="progress-ring-circle"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="33"
          cy="33"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollProgress;