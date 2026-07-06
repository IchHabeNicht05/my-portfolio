import React, { useState } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import './RoiCalculator.css';

const RoiCalculator = ({ onOpenInquiry }) => {
  // Výchozí hodnoty pro posuvníky
  const [traffic, setTraffic] = useState(5000);
  const [aov, setAov] = useState(1200); // Průměrná objednávka v Kč

  // Výpočet přínosu při zvýšení konverzního poměru o pouhé 1 % (např. z 1.5 % na 2.5 %)
  // Vzorec: Měsíční návštěvnost * 1 % (0.01) * Průměrná objednávka
  const monthlyGain = Math.round(traffic * 0.01 * aov);
  const yearlyGain = monthlyGain * 12;

  return (
    <div className="roi-section-card glass-card">
      <div className="roi-grid">
        
        {/* Levá strana: Ovládací prvky */}
        <div className="roi-controls">
          <div className="roi-badge">
            <TrendingUp size={14} /> Byznysová matematika
          </div>
          <h2>Spočítejte si přínos rychlého webu</h2>
          <p>Pomalý web a špatné UX zabíjí konverze. Podívejte se, kolik peněz vám přinese zvýšení konverzního poměru o <strong>pouhé 1 %</strong> díky špičkovému full-stack kódu.</p>

          <div className="roi-sliders-list">
            {/* Slidr 1: Návštěvnost */}
            <div className="roi-slider-group">
              <div className="roi-slider-label">
                <span>Měsíční návštěvnost webu</span>
                <strong>{traffic.toLocaleString('cs-CZ')} lidí</strong>
              </div>
              <input 
                type="range" min="1000" max="50000" step="1000"
                value={traffic} onChange={(e) => setTraffic(Number(e.target.value))}
              />
            </div>

            {/* Slidr 2: Hodnota objednávky */}
            <div className="roi-slider-group">
              <div className="roi-slider-label">
                <span>Průměrná hodnota zakázky / košíku</span>
                <strong>{aov.toLocaleString('cs-CZ')} Kč</strong>
              </div>
              <input 
                type="range" min="200" max="10000" step="100"
                value={aov} onChange={(e) => setAov(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Pravá strana: Výsledková tabule */}
        <div className="roi-results-display">
          <div className="roi-result-block">
            <span className="roi-result-title">Zvýšení konverze o +1 % vám přinese:</span>
            <div className="roi-big-number">
              +{monthlyGain.toLocaleString('cs-CZ')} Kč <span className="roi-period">/ měsíčně</span>
            </div>
            <div className="roi-secondary-number">
              To je přesně <strong>+{yearlyGain.toLocaleString('cs-CZ')} Kč</strong> ročně navíc.
            </div>
          </div>

          <div className="roi-divider"></div>

          <p className="roi-pitch">Moje práce se vám nezaplatí z úspor, ale z nově vygenerovaných zisků. Investujte do řešení, které vydělává.</p>
          
          {/* Spustí náš poptávkový formulář */}
          <button className="roi-cta-btn" onClick={onOpenInquiry}>
            Chci zvýšit zisky z webu
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default RoiCalculator;