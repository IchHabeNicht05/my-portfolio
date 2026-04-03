import React from 'react';
import './Experience.css';
import { Clock } from 'lucide-react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { experienceData } from '../../data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="experience-section container">
      <div className="experience-glow top-left"></div>
      <div className="experience-glow bottom-right"></div>

      <div className="experience-container">
        
        <div className="experience-header-wrapper">
          <div className="experience-tag">
            <Clock size={14} />
            MOJE CESTA
          </div>
          <h2 className="experience-title-large">Zkušenosti & Vzdělání</h2>
          <p className="experience-description">
            Od prvního řádku kódu až po komplexní webové aplikace. Podívejte se na mou dosavadní cestu.
          </p>
        </div>

        <div className="timeline-wrapper">
          {/* ANIMOVANÁ ČÁRA: Kreslí se postupně dolů */}
          <motion.div 
            className="timeline-line"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>

          {experienceData.map((item, index) => (
            /* ANIMOVANÁ KARTA: Zobrazí se, až když k ní doscrolluješ */
            <motion.div 
              key={item.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >

              <div className="timeline-marker">
                <div className="marker-icon">
                  <item.icon size={20} />
                </div>
              </div>

              <div className="timeline-content-card">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-company">{item.company}</span>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;