import React, { useState } from 'react';
import './TechStack.css';
import { SKILLS } from '../../data/skills';
import ScrollReveal from '../ui/RevealOnScroll';

const TechStack = () => {
  const categoryOrder = ["Frontend", "Backend & Cloud", "Nástroje", "Video Produkce"];
  const [hoveredTech, setHoveredTech] = useState(null);

  // Seskupení dovedností
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    const cat = skill.category || "Ostatní";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <section className="tech-stack">
      <ScrollReveal direction="up" delay={0.1}>
      <div className="container">
        <p className="tech-label">Technologie, které ovládám</p>
        
        <div className="tech-categories-wrapper">
          {categoryOrder.map((catName) => {
            if (!groupedSkills[catName]) return null;
            return (
              <div key={catName} className="tech-category-group">
                <div className="category-header">
                  <span className="category-name">{catName}</span>
                  <div className="category-line"></div>
                </div>

                <div className="tech-cloud">
                  {groupedSkills[catName].map((skill, index) => (
                    <div 
                      key={index} 
                      className="tech-item-badge"
                      onMouseEnter={() => setHoveredTech(skill.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      {/* Vnitřní část, která ořezává shine effect */}
                      <div className="badge-content">
                        <div className="shine-effect"></div>
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className={`tech-icon ${skill.invertDark ? 'invert-on-dark' : ''}`} 
                        />
                        <span className="tech-name">{skill.name}</span>
                      </div>

                      {/* Tooltip je mimo badge-content, aby mohl vyčnívat ven */}
                      {hoveredTech === skill.name && skill.info && (
                        <div className="tech-tooltip">
                          {skill.info}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default TechStack;