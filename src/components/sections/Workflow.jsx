import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, Zap, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../ui/RevealOnScroll';
import { steps } from '../../data/stepData';
import './Workflow.css';

const Workflow = ({ onOpenInquiry }) => {
  return (
    <section id="workflow" className="workflow-section">
      {/* Ambientní fialovo-jantarová záře na pozadí */}
      <div className="workflow-ambient-glow" />

      <div className="container workflow-container">
        
        {/* HLAVIČKA SEKCE */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="workflow-header-pro">
            <div className="workflow-tag-pro">
              <Sparkles size={13} className="tag-sparkle" />
              <span>Metodika & Proces</span>
            </div>
            
            <h2 className="workflow-title-pro">
              Jak probíhá <span className="ember-text-gradient">spolupráce</span>
            </h2>
            
            <p className="workflow-desc-pro">
              Jasně strukturovaný proces od úvodního konceptu až po finální spuštění. 
              Žádné nečekané zádrhely, plná transparentnost na každém kroku.
            </p>
          </div>
        </ScrollReveal>
        
        {/* GRID KROKŮ (RAYCAST TACTILE CARDS) */}
        <div className="workflow-grid-pro">
          {steps.map((step, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={0.1 + index * 0.1}
            >
              <div className="workflow-card-pro">
                
                {/* Horní řádek: Číslo v kruhu & Ikona */}
                <div className="card-top-bar">
                  <div className="step-badge-pro">
                    <span>{`0${index + 1}`}</span>
                  </div>
                  <div className="step-icon-box">
                    <step.icon size={20} />
                  </div>
                </div>

                <div className="card-body-pro">
                  <h3 className="step-title-pro">{step.title}</h3>
                  <p className="step-desc-pro">{step.description}</p>
                </div>

                {/* Spodní dekorativní linka s jantarovým bodem */}
                <div className="card-footer-pro">
                  <span className="step-phase-label">Fáze {index + 1}</span>
                  <div className="ember-dot-indicator" />
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA BANNER */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="workflow-cta-card">
            <div className="cta-content-pro">
              <div className="cta-icon-box">
                <MessageCircle size={22} />
              </div>
              <div className="cta-text-box">
                <h4 className="cta-title-pro">Chcete probrat váš projekt?</h4>
                <p className="cta-desc-pro">
                  Nezávazná konzultace, na které si ujasníme vaše cíle, rozsah práce i časový harmonogram.
                </p>
              </div>
            </div>

            <button 
              onClick={onOpenInquiry || (() => window.location.hash = '#kontakt')} 
              className="btn-service-pro btn-ember-primary btn-cta-fixed"
            >
              <span>Konzultovat projekt</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Workflow;