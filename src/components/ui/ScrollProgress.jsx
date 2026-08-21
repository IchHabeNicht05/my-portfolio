import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const updateProgress = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const progress = scrollableHeight > 0 ? scrolled / scrollableHeight : 0;
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      // Synchronizace s obnovovací frekvencí monitoru i během Lenis animace
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <button 
      type="button" 
      className={`scroll-progress-wrapper ${scrollProgress > 0.05 ? 'visible' : ''}`} 
      aria-label="Zpět na začátek stránky" 
      onClick={scrollToTop}
    >
      <div className="progress-icon" aria-hidden="true">
        <ArrowUp size={20} />
      </div>

      <svg className="progress-ring" width="100%" height="100%" viewBox="0 0 66 66" aria-hidden="true">
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
    </button>
  );
};

export default ScrollProgress;