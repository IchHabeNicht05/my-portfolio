import React, { useState } from "react";
import "./Feedback.css";
import Button from "../ui/Button"; // Tvá UI komponenta
import { Star, Send, CheckCircle, Loader2, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    project: "",
    text: "" 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert("Prosím, vyberte počet hvězdiček.");
      return;
    }

    setIsSending(true);
    setError(null);

    const templateParams = {
      user_name: formData.name,
      user_project: formData.project,
      user_rating: rating,
      user_message: formData.text,
    };

    // VLOŽ SVÉ ÚDAJE Z EMAILJS
    const SERVICE_ID = "service_2y8jhwd"; 
    const TEMPLATE_ID = "template_xcuknfm"; 
    const PUBLIC_KEY = "2EFc1OxTmEHEbJin4"; 

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Feedback odeslán!', response.status, response.text);
        setIsSubmitted(true);
        setFormData({ name: "", project: "", text: "" });
        setRating(0);
      })
      .catch((err) => {
        console.error('Chyba při odesílání:', err);
        setError("Nepodařilo se odeslat hodnocení. Zkuste to prosím později.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="feedback-section">
      {/* Ambientní pozadí pro sjednocení s About sekcí - teď se může bezpečně rozlít do stran */}
      <div className="ambient-glow left"></div>
      <div className="ambient-glow right"></div>

      {/* Nový obal kontejneru pro vycentrování obsahu */}
      <div className="container feedback-container">
        
        {/* HLAVIČKA SEKCE */}
        <div className="feedback-header-wrapper">
          <div className="feedback-tag">
            <MessageSquare size={14} />
            ZPĚTNÁ VAZBA
          </div>
          <h2 className="feedback-title-large">Vaše spokojenost</h2>
          <p className="feedback-description">
            Pomozte mi se zlepšovat. Vaše hodnocení je pro mě klíčové.
          </p>
        </div>

        <div className="feedback-glass-card">
          {!isSubmitted ? (
            <>
              <div className="feedback-header">
                <h2 className="section-title-small">Spokojenost s prací?</h2>
                <p className="feedback-subtitle">
                  Vaše zpětná vazba mi pomáhá se zlepšovat a dodávat ještě lepší
                  výsledky.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="feedback-form" aria-label="Formulář pro odeslání zpětné vazby">
                
                {/* --- HVĚZDIČKY --- */}
                <div className="star-rating-container">
                  <p className="label-text">Vaše hodnocení:</p>
                  <div className="stars-wrapper">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        className={`star-btn ${star <= (hoverRating || rating) ? "active" : ""}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`Ohodnotit ${star} hvězdičkami`}
                      >
                        <Star
                          size={32}
                          fill={star <= (hoverRating || rating) ? "currentColor" : "none"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* --- VSTUPY --- */}
                <div className="inputs-grid">
                  <div className="form-group">
                    <label className="form-label">Vaše jméno</label>
                    <input
                      type="text"
                      className="glass-input"
                      placeholder="Petr Novák"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Projekt / Firma</label>
                    <input
                      type="text"
                      className="glass-input"
                      placeholder="E-shop s kávou"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      aria-label="Název projektu nebo firmy"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Slovní hodnocení (volitelné)</label>
                  <textarea
                    rows="4"
                    className="glass-input textarea-resize-none"
                    placeholder="Co se vám líbilo nejvíce a co mohu zlepšit?"
                    aria-label="Slovní hodnocení"
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  ></textarea>
                </div>

                {/* Chybová hláška */}
                {error && <p className="error-text">{error}</p>}

                <div className="submit-wrapper">
                  <Button 
                    variant="primary" 
                    className="btn-feedback"
                    disabled={isSending}
                    aria-label='Odeslat hodnocení'
                  >
                    {isSending ? (
                      <>Odesílám... <Loader2 size={18} className="spin-animation" style={{ marginLeft: 8 }} /></>
                    ) : (
                      <>Odeslat hodnocení <Send size={18} style={{ marginLeft: 8 }} /></>
                    )}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            /* --- STAV PO ODESLÁNÍ --- */
            <div className="success-message animate-pop-in">
              <div className="success-icon-box">
                <CheckCircle size={48} />
              </div>
              <h3>Děkuji za hodnocení!</h3>
              <p>Vážím si vašeho času. Zpětná vazba byla úspěšně odeslána.</p>
              <button
                className="btn-text-only"
                onClick={() => setIsSubmitted(false)}
                aria-label="Odeslat další hodnocení"
              >
                Odeslat další
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;