import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import './TechStack.css';
import { SKILLS } from '../../data/skills';

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
                      <AnimatePresence>
                        {hoveredTech === skill.name && skill.info && (
                          <motion.div 
                            // Tady je ta změna: x: "-50%" musí být v initial i animate
                            initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                            exit={{ opacity: 0, y: 5, x: "-50%", scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="tech-tooltip"
                          >
                            {skill.info}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;