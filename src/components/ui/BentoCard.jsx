import React from 'react';
import './BentoCard.css';

const BentoCard = ({ title, description, className, children }) => {
  // Spojíme základní třídu 'bento-card' s třídami pro grid (className)
  return (
    <div className={`bento-card ${className}`}>
      <div className="bento-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="bento-visual">
        {children}
      </div>
    </div>
  );
};

export default BentoCard;