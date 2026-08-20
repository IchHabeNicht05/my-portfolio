import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { Calendar, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { experienceData } from '../../data/experienceData';
import ScrollReveal from '../ui/RevealOnScroll';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      {/* Světelná fialovo-jantarová záře na pozadí */}
      <div className="experience-ambient-glow"></div>

      <div className="container experience-container">
        
        {/* Hlavička sekce */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="experience-header-pro">
            <h2 className="experience-title-pro">
              Zkušenosti & <span className="ember-text-gradient">Vzdělání</span>
            </h2>
            <p className="experience-desc-pro">
              Moje cesta od technického vzdělání až po realizaci architektury a vývoj komplexních digitálních produktů.
            </p>
          </div>
        </ScrollReveal>

        {/* Časová osa (Timeline) */}
        <div className="timeline-container-pro">
          
          {/* Světelná vertikální linka s animací výšky */}
          <motion.div 
            className="timeline-spine"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          ></motion.div>

          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;
            // Výběr ikony podle typu (Pokud je např. 'education' / 'work')
            const IconComponent = item.type === 'education' ? GraduationCap : Briefcase;

            return (
              <div 
                key={item.id || index} 
                className={`timeline-row-pro ${isEven ? 'left-row' : 'right-row'}`}
              >
                {/* Bod na ose s pulzujícím efektem */}
                <div className="timeline-dot-wrapper">
                  <motion.div 
                    className="timeline-dot-pro"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="dot-inner"></div>
                  </motion.div>
                </div>

                {/* Karta zkušenosti / vzdělání */}
                <motion.div 
                  className="timeline-card-wrapper"
                  initial={{ 
                    opacity: 0, 
                    x: isEven ? -40 : 40 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0 
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="timeline-card-pro">
                    <div className="card-header-pro">
                      <div className="card-period-badge">
                        <Calendar size={12} />
                        <span>{item.year}</span>
                      </div>
                      
                      <div className="card-type-icon" title={item.company}>
                        <IconComponent size={15} />
                      </div>
                    </div>
                    
                    <h3 className="card-role">{item.title}</h3>
                    <span className="card-institution">{item.company}</span>
                    <p className="card-details">{item.description}</p>

                    {/* Dovednosti / Technologie (pokud existují v datech) */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="card-skills">
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Experience;