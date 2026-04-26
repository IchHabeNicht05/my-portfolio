import React from 'react';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Experience.css';
import { Calendar, Check } from 'lucide-react';
import { experienceData } from '../../data/experienceData';
import ScrollReveal from '../ui/RevealOnScroll'; // Tvůj import

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-ambient-glow"></div>

      <div className="container experience-container">
        
        <ScrollReveal direction="up">
          <div className="experience-header-pro">
            <div className="experience-tag-pro">
              <Calendar size={14} />
              PROFESNÍ HISTORIE
            </div>
            <h2 className="experience-title-pro">Zkušenosti & <span className="text-pro-gradient">Vzdělání</span></h2>
            <p className="experience-desc-pro">
              Moje cesta od technického vzdělání až po realizaci komplexních digitálních produktů pro moderní značky.
            </p>
          </div>
        </ScrollReveal>

        <div className="timeline-container-pro">
          {/* Linka se animuje shora dolů */}
          <motion.div 
            className="timeline-spine"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>

          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.id} 
                className={`timeline-row-pro ${isEven ? 'left-row' : 'right-row'}`}
              >
                {/* Bod na ose s jemným pulsem */}
                <div className="timeline-dot-wrapper">
                  {/* Framer Motion se stará jen o animaci velikosti */}
                  <motion.div 
                    className="timeline-dot-pro"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="dot-inner"></div>
                  </motion.div>
                </div>

                {/* Karta - Animuje se směrem ke středu */}
                <motion.div 
                  className="timeline-card-wrapper"
                  initial={{ 
                    opacity: 0, 
                    x: isEven ? -50 : 50 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                >
                  <div className="timeline-card-pro">
                    <div className="card-header-pro">
                      <span className="card-period">{item.year}</span>
                      <div className="card-type-icon">
                        <item.icon size={16} />
                      </div>
                    </div>
                    
                    <h3 className="card-role">{item.title}</h3>
                    <span className="card-institution">{item.company}</span>
                    <p className="card-details">{item.description}</p>
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