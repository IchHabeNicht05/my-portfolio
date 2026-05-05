import React from 'react';
import { Target, Zap, Code, BarChart3, MessageCircle, Sparkles } from 'lucide-react';
import ScrollReveal from '../ui/RevealOnScroll';
import { steps } from '../../data/stepData';
import './Workflow.css';

const Workflow = () => {
  return (
    <section id="workflow" className="workflow-section">
      <ScrollReveal direction="up" delay={0.1}>
      <div className="container relative-z">
        
        <div className="workflow-header">
            <p className="workflow-label">
                <Sparkles size={16} /> 
                Můj proces pro vaše výsledky
            </p>
            <h2 className="workflow-title">Jak funguje spolupráce</h2>
        </div>
        
        {/* Hlavní kontejner pro časovou osu */}
        <div className="workflow-timeline">
          {steps.map((step, index) => (
            <div key={index} className="workflow-step" style={{ '--step-color': step.color }}>
              
              {/* Karta s Liquid Glass efektem */}
              <div className="workflow-card">
                <div className="shine-effect"></div>
                
                {/* Číslo kroku nad kartou */}
                <div className="step-number">{`0${index + 1}`}</div>
                
                {/* Ikona s barevným glow */}
                <div className="step-icon-wrapper">
                  <step.icon size={32} color={step.color} />
                </div>
                
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
                
                {/* Spojovací čára pro desktop (kromě posledního kroku) */}
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            </div>
          ))}
        </div>

        {/* Závěrečné CTA (Výzva k akci) */}
        <div className="workflow-cta">
          <MessageCircle size={20} />
          <span>Chcete web, který bude prodávat?</span>
          <button onClick={() => window.location.hash = '#kontakt'} className="btn-workflow-cta">
            Pojďme probrat váš projekt
          </button>
        </div>

      </div>
      </ScrollReveal>
    </section>
  );
};

export default Workflow;