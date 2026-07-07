import React, { useState } from 'react';
import { TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import './RoiCalculator.css';

const RoiCalculator = () => {
  const [traffic, setTraffic] = useState(5000);
  const [aov, setAov] = useState(1200);

  const monthlyGain = Math.round(traffic * 0.01 * aov);
  const yearlyGain = monthlyGain * 12;

  // 1. Dynamické textové štítky pro návštěvnost
  const getTrafficLabel = (val) => {
    if (val <= 5000) return "🍟 Menší projekt / lokální služby";
    if (val <= 20000) return "📈 Slibně rostoucí byznys / e-shop";
    return "🚀 Velký provoz (pomalý web vás vysoce penalizuje)";
  };

  // 2. Výpočet návratnosti (předpokládaná investice do webu cca 15 000 Kč)
  const estimatedInvestment = 15000;
  const monthsToROI = Math.ceil(estimatedInvestment / monthlyGain);

  return (
    <div className="roi-section-card">
      <div className="roi-grid">
        
        {/* Levá strana: Ovládání */}
        <div className="roi-controls">
          <div className="roi-badge">
            <TrendingUp size={14} /> Byznysová matematika
          </div>
          <h2>Spočítejte si přínos rychlého webu</h2>
          <p>
            Pomalé načítání a nepřehledné UI prokazatelně snižují objednávky. 
            Podívejte se, co udělá zvýšení konverzního poměru o <strong>pouhé 1 %</strong>.
          </p>

          <div className="roi-sliders-list">
            {/* Slidr 1: Návštěvnost */}
            <div className="roi-slider-group">
              <div className="roi-slider-label">
                <span>Měsíční návštěvnost</span>
                <strong>{traffic.toLocaleString('cs-CZ')} lidí</strong>
              </div>
              <input 
                type="range" min="1000" max="50000" step="1000"
                value={traffic} onChange={(e) => setTraffic(Number(e.target.value))}
                style={{ '--value': `${(traffic - 1000) / 49000 * 100}%` }}
              />
              <span className="roi-dynamic-status">{getTrafficLabel(traffic)}</span>
            </div>

            {/* Slidr 2: Průměrná objednávka */}
            <div className="roi-slider-group">
              <div className="roi-slider-label">
                <span>Průměrná hodnota objednávky / zakázky</span>
                <strong>{aov.toLocaleString('cs-CZ')} Kč</strong>
              </div>
              <input 
                type="range" min="200" max="10000" step="100"
                value={aov} onChange={(e) => setAov(Number(e.target.value))}
                style={{ '--value': `${(aov - 200) / 9800 * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Pravá strana: Výsledky */}
        <div className="roi-results-display">
          <div className="roi-result-block">
            <span className="roi-result-title">Zisk navíc při optimalizaci o +1 %:</span>
            <div className="roi-big-number">
              +{monthlyGain.toLocaleString('cs-CZ')} Kč <span className="roi-period">/ měsíčně</span>
            </div>
            <div className="roi-secondary-number">
              To dělá stabilních <strong>+{yearlyGain.toLocaleString('cs-CZ')} Kč</strong> ročně k vašemu obratu.
            </div>
          </div>

          <div className="roi-divider"></div>

          {/* Dynamická doložka návratnosti */}
          <div className="roi-roi-badge-box">
            <CheckCircle2 size={16} className="text-emerald" />
            <span>
              Investice do nového webu se vám vrátí cca za 
              <strong> {monthsToROI <= 1 ? 'první měsíc' : `${monthsToROI} měsíce`}</strong>.
            </span>
          </div>
          
          <button 
            className="roi-cta-btn" 
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Chci optimalizovat konverze
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default RoiCalculator;