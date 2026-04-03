import React from 'react';
import './TechStack.css';
import { SKILLS } from '../../data/skills';

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="container">
        
        <p className="tech-label">Technologie, které ovládám</p>
        
        <div className="tech-cloud">
          {SKILLS.map((skill, index) => (
            <div key={index} className="tech-item-badge">
              <div className="shine-effect"></div>
              
              <img 
                src={skill.icon} 
                alt={`${skill.name} logo`} 
                /* Logic check: pokud je v datech invertDark, přidáme třídu */
                className={`tech-icon ${skill.invertDark ? 'invert-on-dark' : ''}`} 
                loading="lazy"
              />
              <span className="tech-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;