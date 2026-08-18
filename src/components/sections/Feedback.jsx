import React, { useState } from "react";
import "./Feedback.css";
import { Star, Send, CheckCircle, Loader2, Sparkles } from "lucide-react";
import emailjs from '@emailjs/browser';
import ScrollReveal from '../ui/RevealOnScroll';

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

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          setIsSending(false);
          setIsSubmitted(true);
          setFormData({ name: "", project: "", text: "" });
          setRating(0);
        },
        (err) => {
          setIsSending(false);
          setError("Došlo k chybě při odesílání. Zkuste to prosím znovu.");
          console.error("EmailJS Error:", err);
        }
      );
  };

  return (
    <section id="feedback" className="feedback-section">
      <div className="feedback-ambient-glow" />

      <ScrollReveal direction="up" delay={0.1}>
        <div className="container feedback-container">
          
          {/* HLAVIČKA SEKCE S POŽADOVANÝM STYLEM */}
          <div className="feedback-header-pro">
            <div className="feedback-tag-pro">
              <Sparkles size={13} className="tag-sparkle" />
              <span>Zpětná vazba</span>
            </div>
            
            <h2 className="feedback-title-pro">
              Vaše <span className="ember-text-gradient">hodnocení</span>
            </h2>
            
            <p className="feedback-desc-pro">
              Pomozte mi neustále posouvat kvalitu služeb. Vaše zkušenost a názor jsou pro mě zásadní.
            </p>
          </div>

          {/* KARTA FORMULÁŘE (TACTILE GLASS) */}
          <div className="feedback-glass-card">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="feedback-form">
                
                {/* HODNOCENÍ HVĚZDIČKAMI */}
                <div className="rating-container">
                  <label className="form-label">Jak jste byli spokojeni?</label>
                  <div className="stars-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${star <= (hoverRating || rating) ? 'active' : ''}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`Hodnocení ${star} z 5`}
                      >
                        <Star 
                          size={28} 
                          fill={star <= (hoverRating || rating) ? "var(--ember-primary, #ff7a59)" : "none"}
                          color={star <= (hoverRating || rating) ? "var(--ember-primary, #ff7a59)" : "var(--text-muted, #64748b)"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="feedback-name" className="form-label">Jméno / Firma</label>
                    <input
                      id="feedback-name"
                      type="text"
                      className="glass-input"
                      placeholder="Jan Novák"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="feedback-project" className="form-label">Název projektu</label>
                    <input
                      id="feedback-project"
                      type="text"
                      className="glass-input"
                      placeholder="Redesign webu / E-shop..."
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="feedback-text" className="form-label">Slovní hodnocení</label>
                  <textarea
                    id="feedback-text"
                    className="glass-input textarea-resize-vertical"
                    placeholder="Napište krátkou recenzi vaší zkušenosti..."
                    rows={4}
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    required
                  ></textarea>
                </div>

                {error && <p className="feedback-error-msg">{error}</p>}

                <div className="submit-wrapper">
                  <button
                    type="submit"
                    className="btn-feedback-submit"
                    disabled={isSending}
                    aria-label="Odeslat hodnocení"
                  >
                    {isSending ? (
                      <>Odesílám... <Loader2 size={18} className="spin-animation" /></>
                    ) : (
                      <>Odeslat hodnocení <Send size={18} /></>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* STAV PO ODESLÁNÍ */
              <div className="success-message animate-pop-in">
                <div className="success-icon-box">
                  <CheckCircle size={44} />
                </div>
                <h3 className="success-title">Děkuji za hodnocení!</h3>
                <p className="success-desc">Vážím si vašeho času. Zpětná vazba byla úspěšně doručena.</p>
                <button
                  type="button"
                  className="btn-text-only"
                  onClick={() => setIsSubmitted(false)}
                >
                  Odeslat další hodnocení
                </button>
              </div>
            )}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default Feedback;