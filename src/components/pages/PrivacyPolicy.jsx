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

          <div className="pp-card">
            <h2><UserCheck className="text-primary" size={24} /> 5. Reference a zpětná vazba</h2>
            <p>
              Pokud mi po dokončení projektu poskytnete dobrovolnou zpětnou vazbu (e-mailem nebo přes formulář), 
              mohu váš text, křestní jméno (případně název firmy) a logo využít v sekci <strong>Reference</strong> na tomto webu pro prezentaci své práce.
            </p>
            <p>
              Vaše soukromí je prioritou – pokud si budete přát svou referenci dodatečně upravit, anonymizovat nebo zcela odstranit, 
              stačí mi napsat a obratem tak učiním.
            </p>
          </div>

          <div className="pp-card">
            <h2><Scale className="text-primary" size={24} /> 6. Platební podmínky a zálohy</h2>
            <p>
              Standardní postup spolupráce vyžaduje úhradu <strong>zálohové faktury ve výši 50 %</strong> z dohodnuté ceny před zahájením vývojových prací. 
              Tato částka pokrývá úvodní analýzu zadání, návrh architektury a přípravu vývojového prostředí.
            </p>
            <p>
              Doplatek zbývajících 50 % je splatný po dokončení díla a jeho finálním odsouhlasení, nejpozději však před ostrým nasazením na vaši doménu nebo předáním zdrojových kódů.
            </p>
          </div>
        </div>

        <p className="pp-footer-date">Poslední aktualizace: Březen 2026</p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;