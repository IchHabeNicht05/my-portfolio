import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jakmile je prvek viditelný z 10 %, spustí se animace
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animujeme jen jednou (nechceme, aby to blikalo při scrollování nahoru/dolů)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Spustí se trochu dříve, než prvek vyjede úplně nahoru
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`reveal-item ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;