import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Send } from 'lucide-react';
import './InquiryModal.css'; // Zde si nastyloval skleněný design

const InquiryModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: '',
    scope: '',
    budget: '',
    deadline: '',
    name: '',
    email: '',
    note: ''
  });

  if (!isOpen) return null;

  const handleClose = () => {
    setStep(1);
    setSubmitted(false);
    setFormData({
      serviceType: '',
      scope: '',
      budget: '',
      deadline: '',
      name: '',
      email: '',
      note: ''
    });
    onClose(); // Zavolá původní funkci z rodiče (Navbaru) pro skrytí modalu
  };

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Funkce pro odeslání dat (např. na Discord Webhook)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Tvá Discord Webhook URL (příklad)
    const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

    const discordMessage = {
      embeds: [{
        title: "💼 Nová poptávka z portfolia!",
        color: 2725887, // Krásná modrá barva
        fields: [
          { name: "👤 Jméno", value: formData.name, inline: true },
          { name: "✉️ Email", value: formData.email, inline: true },
          { name: "🛠️ Služba", value: formData.serviceType },
          { name: "📐 Rozsah projektu", value: formData.scope },
          { name: "💰 Budget", value: formData.budget, inline: true },
          { name: "📅 Termín", value: formData.deadline, inline: true },
          { name: "📝 Poznámka", value: formData.note || "Žádná" }
        ],
        timestamp: new Date()
      }]
    };

    try {
      if (DISCORD_WEBHOOK_URL) {
        await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(discordMessage)
        });
      } else {
        console.warn("Discord Webhook URL chybí v souboru .env");
      }
      
      // Přepneme na úspěšnou obrazovku
      setSubmitted(true);
    } catch (error) {
      console.error("Chyba při odesílání poptávky", error);
      alert("Něco se nepovedlo, zkuste to prosím znovu.");
    }
  };

  return (
    <div className="im-overlay">
      <div className="im-container glass-card">
        
        {/* Zavírací tlačítko */}
        <button className="im-close-btn" onClick={handleClose}>
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="im-content">
            {/* Indikátor pokroku */}
            <div className="im-progress-bar">
              <div className="im-progress-line" style={{ width: `${(step / 4) * 100}%` }} />
              <span className="im-step-counter">Krok {step} z 4</span>
            </div>

            {/* KROK 1: Výběr služby */}
            {step === 1 && (
              <div className="im-step-slide animate-fade-in">
                <h2>O jaký projekt se jedná?</h2>
                <p>Vyberte hlavní oblast, se kterou potřebujete pomoct.</p>
                <div className="im-options-grid">
                  {['Webová stránka', 'Webová aplikace (SaaS)', 'Střih videa / Postprodukce'].map((service) => (
                    <button 
                      key={service}
                      className={`im-option-card ${formData.serviceType === service ? 'active' : ''}`}
                      onClick={() => handleSelect('serviceType', service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* KROK 2: Rozsah projektu */}
            {step === 2 && (
            <div className="im-step-slide animate-fade-in">
                {formData.serviceType?.includes('video') || formData.serviceType?.includes('Střih') ? (
                // 🎥 Varianta pro VIDEO
                <>
                    <h2>Jak dlouhé video budeme tvořit?</h2>
                    <p>Pomůže mi to udělat si představu o množství materiálu a náročnosti postprodukce.</p>
                    <div className="im-options-grid">
                    {[
                        'Krátký formát / Shorts / Reels (do 1 min)',
                        'YouTube video / Klasický sestřih (10-20 min)',
                        'Dlouhý dokument / Komplexní firemní video'
                    ].map((opt) => (
                        <button 
                        key={opt}
                        className={`im-option-card ${formData.scope === opt ? 'active' : ''}`}
                        onClick={() => handleSelect('scope', opt)}
                        >
                        {opt}
                        </button>
                    ))}
                    </div>
                </>
                ) : (
                // 💻 Varianta pro WEB
                <>
                    <h2>Jaký je přibližný rozsah webu?</h2>
                    <p>Zvolte, jak moc robustní systém budeme stavět.</p>
                    <div className="im-options-grid">
                    {[
                        'Jednostránkový web (Landing Page)',
                        'Menší web (Prezentace do 5 stránek)',
                        'Komplexní systém / Webová aplikace / E-shop'
                    ].map((opt) => (
                        <button 
                        key={opt}
                        className={`im-option-card ${formData.scope === opt ? 'active' : ''}`}
                        onClick={() => handleSelect('scope', opt)}
                        >
                        {opt}
                        </button>
                    ))}
                    </div>
                </>
                )}
            </div>
            )}

            {/* KROK 3: Budget & Termín */}
            {step === 3 && (
              <div className="im-step-slide">
                <h2>Finanční rámec a termín</h2>
                <p>Abychom věděli, zda jsme na stejné vlně.</p>
                
                <label className="im-label">Přibližný rozpočet</label>
                <div className="im-options-grid mini">
                  {['Méně než 10k Kč', '10k - 30k Kč', '30k - 70k Kč', '70k+ Kč'].map((b) => (
                    <button 
                      key={b}
                      className={`im-option-card ${formData.budget === b ? 'active' : ''}`}
                      onClick={() => handleSelect('budget', b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>

                <label className="im-label" style={{marginTop: '20px', display:'block'}}>Kdy to potřebujete mít hotové?</label>
                <div className="im-options-grid mini">
                  {['Spěchá to (do 2 týdnů)', 'Do měsíce', 'Nespěchá (1-2 měsíce)'].map((d) => (
                    <button 
                      key={d}
                      className={`im-option-card ${formData.deadline === d ? 'active' : ''}`}
                      onClick={() => handleSelect('deadline', d)}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* KROK 4: Kontaktní údaje */}
            {step === 4 && (
              <div className="im-step-slide">
                <h2>Kam vám mohu poslat nabídku?</h2>
                <p>Zanechte mi na sebe kontakt a ozvu se vám do 24 hodin.</p>
                
                <div className="im-form-group">
                  <input 
                    type="text" name="name" placeholder="Vaše jméno / Firma" 
                    value={formData.name} onChange={handleInputChange} required 
                  />
                  <input 
                    type="email" name="email" placeholder="Váš e-mail" 
                    value={formData.email} onChange={handleInputChange} required 
                  />
                  <textarea 
                    name="note" placeholder="Řekněte mi o projektu víc (dobrovolné)..." 
                    value={formData.note} onChange={handleInputChange} rows={3}
                  />
                </div>
              </div>
            )}

            {/* Navigační tlačítka dole */}
            <div className="im-navigation-bar">
              {step > 1 && (
                <button className="im-btn-back" onClick={prevStep}>
                  <ArrowLeft size={16} /> Zpět
                </button>
              )}
              
              {step < 4 ? (
                <button 
                  className="im-btn-next" 
                  onClick={nextStep}
                  disabled={step === 1 && !formData.serviceType || step === 2 && !formData.scope || step === 3 && (!formData.budget || !formData.deadline)}
                >
                  Pokračovat <ArrowRight size={16} />
                </button>
              ) : (
                <button 
                  className="im-btn-submit" 
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.email}
                >
                  Odeslat poptávku <Send size={16} />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Stav po úspěšném odeslání */
          <div className="im-success-screen animate-scale-up">
            <CheckCircle2 size={64} className="success-icon" />
            <h2>Poptávka úspěšně odeslána!</h2>
            <p>Děkuji vám za zájem. Podívám se na detaily a do 24 hodin se vám ozvu na e-mail <strong>{formData.email}</strong>.</p>
            <button className="im-btn-finish" onClick={handleClose}>Zavřít okno</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default InquiryModal;