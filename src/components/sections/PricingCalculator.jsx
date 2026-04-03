import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./PricingCalculator.css";
import Button from "../ui/Button"; 
import { 
  Calculator, Check, Rocket, Zap, Globe, PenTool, 
  Database, Info, Sparkles, TrendingDown, Send, Loader2, User, Mail, Calendar, Layout 
} from "lucide-react";

const PricingCalculator = () => {
  // --- KONFIGURACE DAT ZE SLUŽEB ---
  // Tady máme synchronizované startovací ceny podle tvých ServicesData
  const PROJECT_TYPES = [
    { id: 'web', label: 'Prezentační web', basePrice: 10000 },
    { id: 'dev', label: 'Webová aplikace', basePrice: 12000 },
    { id: 'redesign', label: 'Kompletní redesign', basePrice: 15000 },
    { id: 'eshop', label: 'Tvorba E-shopu', basePrice: 25000 }
  ];

  const PRICE_PER_PAGE = 1500; // Cena za každou další podstránku nad rámec základu
  const DISCOUNT_THRESHOLD = 10;
  const DISCOUNT_PERCENT = 0.10;

  const SERVICE_ID = "service_2y8jhwd"; 
  const TEMPLATE_ID = "template_69wxdal"; 
  const PUBLIC_KEY = "2EFc1OxTmEHEbJin4";

  const FEATURES = [
    { id: "seo", label: "Premium SEO Optimalizace", price: 3000, icon: <Globe size={20} />, desc: "Základní nastavení klíčových slov, meta tagů a indexace." },
    { id: "design", label: "Premium UI/UX Design", price: 6000, icon: <PenTool size={20} />, desc: "Návrh unikátního designu na míru v Figmě, žádné šablony." },
    { id: "cms", label: "CMS (Admin systém)", price: 8000, icon: <Database size={20} />, desc: "Možnost, abyste si texty a obrázky měnili sami." },
    { id: "copy", label: "Copywriting", price: 2500, icon: <Sparkles size={20} />, desc: "Chytlavé texty, které prodávají. Otextování hlavních sekcí." },
  ];

  // --- STATE ---
  const [projectType, setProjectType] = useState('web'); // Výchozí je web
  const [pages, setPages] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [isExpress, setIsExpress] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [deadline, setDeadline] = useState(""); 
  const [emailStatus, setEmailStatus] = useState("idle"); 

  // --- VÝPOČTY ---
  const currentProject = PROJECT_TYPES.find(p => p.id === projectType);
  
  // Startovací cena projektu + cena za stránky navíc (1. stránka je už v základu)
  let subtotal = currentProject.basePrice + ((pages > 1 ? pages - 1 : 0) * PRICE_PER_PAGE);
  
  selectedFeatures.forEach(id => {
    const f = FEATURES.find(i => i.id === id);
    if(f) subtotal += f.price;
  });

  const isDiscountApplied = pages >= DISCOUNT_THRESHOLD;
  const discountAmount = isDiscountApplied ? Math.round(subtotal * DISCOUNT_PERCENT) : 0;
  let discountedPrice = subtotal - discountAmount;
  const expressFee = isExpress ? Math.round(discountedPrice * 0.20) : 0;
  const finalPrice = discountedPrice + expressFee;

  // --- HANDLERS ---
  const toggleFeature = (id) => {
    setSelectedFeatures(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const handleOrder = async () => {
    if (!userEmail || !userEmail.includes("@")) { alert("Prosím vyplňte platný email."); return; }
    if (!userName || userName.length < 2) { alert("Prosím vyplňte své jméno."); return; }

    setEmailStatus("sending");

    const featureNames = FEATURES.filter(f => selectedFeatures.includes(f.id)).map(f => f.label).join(", ");
    const formattedDate = deadline ? new Date(deadline).toLocaleDateString('cs-CZ') : "Dle dohody";

    const formattedMessage = `
    Dobrý den, mám zájem o: ${currentProject.label}

    💰 ODHADOVANÁ CENA: ${finalPrice.toLocaleString()} Kč
    📅 POŽADOVANÝ TERMÍN: ${formattedDate}
    ---------------------------------------------
    📌 Typ: ${currentProject.label}
    📄 Rozsah: ${pages} stránek
    🛠 Služby: ${featureNames || "Bez doplňků"}
    ⚡ Expresní dodání: ${isExpress ? "ANO (+20%)" : "NE"}
    ---------------------------------------------

    Prosím o kontaktování a potvrzení termínu.
    `;

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { user_name: userName, user_email: userEmail, message: formattedMessage }, PUBLIC_KEY);
      setEmailStatus("success");
      setTimeout(() => {
        setPages(1); setSelectedFeatures([]); setIsExpress(false);
        setUserName(""); setUserEmail(""); setDeadline(""); setEmailStatus("idle"); setProjectType('web');
      }, 3000);
    } catch (error) {
      console.error("Chyba:", error);
      setEmailStatus("error");
    }
  };

  const sliderPercentage = ((pages - 1) / (20 - 1)) * 100;

  return (
    <section className="pricing-section">
      <div className="pricing-container-wide">
        
        <div className="pricing-header-wrapper">
          <div className="pricing-tag"><Calculator size={14} /> KALKULÁTOR</div>
          <h2 className="pricing-title-large">Konfigurátor Ceny</h2>
          <p className="pricing-description">Sestavte si balíček na míru. Cena se aktualizuje v reálném čase.</p>
        </div>

        <div className="pricing-grid">
          
          {/* LEVÁ STRANA */}
          <div className="pricing-controls">
            
            {/* NOVÉ: VÝBĚR TYPU PROJEKTU */}
            <div className="control-group">
              <div className="label-row"><label>Typ projektu</label></div>
              <select 
                className="calculator-input" 
                value={projectType} 
                onChange={(e) => setProjectType(e.target.value)}
                style={{ width: '100%', marginBottom: '10px', cursor: 'pointer', appearance: 'auto' }}
              >
                {PROJECT_TYPES.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.label} (od {p.basePrice.toLocaleString()} Kč)
                  </option>
                ))}
              </select>
            </div>
            
            <div className="divider-light" />

            {/* SLIDER STRÁNEK */}
            <div className="control-group">
              <div className="label-row">
                <label>Rozsah (počet stránek)</label>
                <span className="page-counter">{pages} {pages === 1 ? "stránka" : (pages < 5 ? "stránky" : "stránek")}</span>
              </div>
              <div className="range-wrapper">
                <input
                  type="range" min="1" max="20" step="1" value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className="styled-slider" style={{ backgroundSize: `${sliderPercentage}% 100%` }}
                />
              </div>
              <div className="range-ticks">
                <span>Landing Page</span><span>Firemní web</span><span>Portál</span>
              </div>
              <div className={`discount-info ${isDiscountApplied ? "active" : ""}`}>
                {isDiscountApplied ? (
                  <> <TrendingDown size={16} /> Aktivována sleva 10% za objem! </>
                ) : (
                  <span className="hint">Přidejte ještě {DISCOUNT_THRESHOLD - pages} stránek pro 10% slevu.</span>
                )}
              </div>
            </div>
            <div className="divider-light" />
            
            {/* DOPLŇKY */}
            <div className="control-group">
              <div className="label-row"><label>Doplňkové moduly</label></div>
              <div className="features-grid-compact">
                {FEATURES.map((f) => (
                  <div key={f.id} className={`feature-box ${selectedFeatures.includes(f.id) ? "selected" : ""}`}
                    onClick={() => toggleFeature(f.id)}
                    onMouseEnter={() => setHoveredFeature(f.id)} onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="fb-header">
                      <div className="fb-icon">{f.icon}</div>
                      <div className="fb-check">{selectedFeatures.includes(f.id) && <Check size={14} strokeWidth={4} />}</div>
                    </div>
                    <div className="fb-title">{f.label}</div>
                    <div className="fb-price">+{f.price.toLocaleString()} Kč</div>
                    {hoveredFeature === f.id && (
                      <div className="feature-tooltip animate-pop-in">
                        <div className="tooltip-header"><Info size={14}/> Co to je?</div>{f.desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="divider-light" />
            
            {/* EXPRES */}
            <div className="control-group express-group">
              <div className="express-label">
                <div className={`express-icon ${isExpress ? "pulse" : ""}`}>
                  {isExpress ? <Zap size={24} fill="currentColor"/> : <Rocket size={24}/>}
                </div>
                <div><span className="bold-text">Expresní dodání do týdne</span><p className="small-text">Prioritní zpracování projektu (+20%)</p></div>
              </div>
              <label className="switch-lg">
                <input type="checkbox" checked={isExpress} onChange={() => setIsExpress(!isExpress)} />
                <span className="slider-lg round"></span>
              </label>
            </div>
          </div>

          {/* PRAVÁ STRANA - ÚČTENKA */}
          <div className="pricing-summary-wrapper">
            <div className="summary-card">
              <h3>Rekapitulace</h3>
              
              <ul className="summary-list">
                {/* ZÁKLAD PROJEKTU */}
                <li className="summary-item">
                  <span>{currentProject.label} (Základ)</span>
                  <span>{currentProject.basePrice.toLocaleString()} Kč</span>
                </li>
                {/* STRÁNKY NAVÍC */}
                {pages > 1 && (
                  <li className="summary-item">
                    <span>+ {pages - 1} podstránek</span>
                    <span>{((pages - 1) * PRICE_PER_PAGE).toLocaleString()} Kč</span>
                  </li>
                )}
                {/* DOPLŇKY */}
                {selectedFeatures.map(id => {
                  const f = FEATURES.find(i => i.id === id);
                  return (
                    <li key={id} className="summary-item feature-item">
                      <span>+ {f.label}</span>
                      <span>{f.price.toLocaleString()} Kč</span>
                    </li>
                  );
                })}
                {/* SLEVA & EXPRES */}
                {isDiscountApplied && (
                  <li className="summary-item discount-item">
                    <span><TrendingDown size={14}/> Množstevní sleva (10%)</span>
                    <span>-{discountAmount.toLocaleString()} Kč</span>
                  </li>
                )}
                {isExpress && (
                  <li className="summary-item express-item">
                    <span><Zap size={14}/> Expresní příplatek</span>
                    <span>+{expressFee.toLocaleString()} Kč</span>
                  </li>
                )}
              </ul>

              <div className="summary-divider"></div>

              <div className="total-row">
                <span>Celkem od:</span>
                <span className="total-price">{finalPrice.toLocaleString()} Kč</span>
              </div>
              <p className="vat-note">Nejsem plátce DPH.</p>

              {/* INPUTY */}
              <div className="input-group-vertical">
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input type="text" placeholder="Vaše jméno" className="calculator-input" value={userName}
                    onChange={(e) => setUserName(e.target.value)} disabled={emailStatus === "success" || emailStatus === "sending"}
                  />
                </div>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input type="email" placeholder="Váš email" className="calculator-input" value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)} disabled={emailStatus === "success" || emailStatus === "sending"}
                  />
                </div>
                <div className="input-with-icon">
                  <Calendar size={18} className="input-icon" />
                  <input type="date" className="calculator-input date-input" value={deadline}
                    min={new Date().toISOString().split("T")[0]} onChange={(e) => setDeadline(e.target.value)}
                    disabled={emailStatus === "success" || emailStatus === "sending"}
                  />
                </div>
              </div>

              <Button variant="primary" className="w-full mt-3" onClick={handleOrder}
                disabled={emailStatus === "sending" || emailStatus === "success"}>
                {emailStatus === "idle" && <>Odeslat nezávaznou poptávku <Send size={16} style={{marginLeft:8}}/></>}
                {emailStatus === "sending" && <>Odesílám... <Loader2 size={16} className="spin" style={{marginLeft:8}}/></>}
                {emailStatus === "success" && <>Odesláno úspěšně! <Check size={16} style={{marginLeft:8}}/></>}
                {emailStatus === "error" && <>Chyba, zkuste to znovu</>}
              </Button>

              {emailStatus === "success" && <p className="success-message">Díky! Formulář se za chvíli resetuje.</p>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;