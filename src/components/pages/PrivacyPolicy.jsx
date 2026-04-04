import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Database, UserCheck, Scale } from 'lucide-react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pp-section">
      <div className="pp-bg-glow" />
      
      <div className="pp-container relative-z">
        <Link to="/" className="btn-back-ghost">
          <ArrowLeft size={16} /> Zpět
        </Link>

        <h1 className="pp-title">Zásady ochrany osobních údajů</h1>
        
        <div className="pp-cards-grid">
          <div className="pp-card">
            <h2><ShieldCheck className="text-primary" size={24} /> 1. Úvodní ustanovení</h2>
            <p>
              Správcem osobních údajů je <strong>Martin Habenicht</strong>. 
              Respektuji vaše soukromí a zavazuji se chránit vaše osobní údaje podle platné legislativy (GDPR).
            </p>
          </div>

          <div className="pp-card">
            <h2><Database className="text-primary" size={24} /> 2. Jaká data shromažďuji?</h2>
            <p>Shromažďuji pouze údaje, které mi sami dobrovolně poskytnete přes kontaktní formulář, konkrétně: <strong>Jméno, e-mailovou adresu a obsah vaší zprávy.</strong></p>
            <p>Dále web využívá základní soubory cookies pro zajištění správného fungování stránek a pro měření anonymních statistik návštěvnosti.</p>
          </div>

          <div className="pp-card">
            <h2><UserCheck className="text-primary" size={24} /> 3. Jak data využívám?</h2>
            <p>Informace z kontaktního formuláře slouží výhradně ke zpětnému kontaktování a pro účely případné budoucí spolupráce. Vaše data nikdy neprodávám ani neposkytuji třetím stranám.</p>
          </div>

          <div className="pp-card">
            <h2><Scale className="text-primary" size={24} /> 4. Vaše práva</h2>
            <p>Máte právo kdykoliv požádat o informaci, jaké údaje o vás eviduji, a požádat o jejich úplné vymazání na mém kontaktním e-mailu.</p>
          </div>
        </div>

        <p className="pp-footer-date">Poslední aktualizace: Březen 2026</p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;