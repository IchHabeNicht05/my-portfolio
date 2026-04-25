import React from 'react';
import { Target, Zap, Code, BarChart3, MessageCircle, Sparkles } from 'lucide-react';
import './Workflow.css';

const Workflow = () => {
  // Data pro jednotlivé kroky spolupráce
  const steps = [
    {
      icon: <Target size={32} />,
      title: "1. Strategie & Cíle",
      description: "Nezačínám kódem, ale otázkami. Pochopím váš byznys, zákazníky a definujeme jasné cíle, které má web plnit.",
      color: "#60a5fa" // Modrá
    },
    {
      icon: <Zap size={32} />,
      title: "2. UX & Návrh",
      description: "Navrhnu cestu zákazníka tak, aby byla intuitivní a vedla k nákupu nebo poptávce. Žádné zbytečné překážky.",
      color: "#a78bfa" // Fialová
    },
    {
      icon: <Code size={32} />,
      title: "3. Vývoj & Optimalizace",
      description: "Kóduji moderně (React/Next.js) s důrazem na brutální rychlost a SEO. Protože pomalý web zákazníci opouštějí.",
      color: "#f87171" // Červená
    },
    {
      icon: <BarChart3 size={32} />,
      title: "4. Data & Spuštění",
      description: "Spuštěním to nekončí. Nastavím měření, analyzuji data a ladím detaily, aby web dosahoval maximálních konverzí.",
      color: "#34d399" // Zelená
    }
  ];

  return (
    <section id="workflow" className="workflow-section">
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
                  {step.icon}
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
    </section>
  );
};

export default Workflow;