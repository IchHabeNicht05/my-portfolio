import React from 'react';
import './SectionDivider.css';

const SectionDivider = ({ label }) => {
  return (
    <div className="section-divider-container" aria-hidden="true">
      <div className="divider-line left" />
      {label ? (
        <span className="divider-label">{label}</span>
      ) : (
        <span className="divider-node">+</span>
      )}
      <div className="divider-line right" />
    </div>
  );
};

export default SectionDivider;