import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import ScrollReveal from '../ui/RevealOnScroll';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  
  const [status, setStatus] = useState(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
          setStatus('success');
          setFormData({ user_name: '', user_email: '', message: '' }); 
          setTimeout(() => setStatus(null), 5000);
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setStatus('error');
          setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section className="contact-section" id="kontakt">
      {/* Ambientní fialovo-jantarová záře */}
      <div className="contact-ambient-glow" />

      <div className="container contact-container">
        
        {/* HLAVIČKA SEKCE */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="contact-header-pro">
            
            <h2 className="contact-title-pro">
              Máte projekt? <span className="ember-text-gradient">Napište mi</span>
            </h2>
            
            <p className="contact-desc-pro">
              Máte nápad na projekt nebo dotaz? Ozvěte se a společně to probereme.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="contact-grid-pro">
            
            {/* LEVÝ SLOUPEC - INFO KARTY */}
            <div className="contact-info-pro">
              <a href="mailto:martin.habenicht05@gmail.com" className="contact-info-card">
                <div className="info-icon-box">
                  <Mail size={22} />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Email</span>
                  <p className="info-value">martin.habenicht05@gmail.com</p>
                </div>
              </a>

              <a href="tel:+420731530843" className="contact-info-card">
                <div className="info-icon-box">
                  <Phone size={22} />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Telefon</span>
                  <p className="info-value">+420 731 530 843</p>
                </div>
              </a>

              <div className="contact-info-card map-card-pro">
                <div className="map-header-row">
                  <div className="info-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div className="info-text-box">
                    <span className="info-label">Lokalita</span>
                    <p className="info-value">Česká Lípa, ČR</p>
                  </div>
                </div>
                
                <a 
                  href="https://www.google.com/maps/place/%C4%8Cesk%C3%A1+L%C3%ADpa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="map-wrapper-pro"
                >
                  <img 
                    src="/mapa-ceska-lipa.webp" 
                    alt="Mapa Česká Lípa" 
                    className="map-image-pro"
                    loading="lazy"
                  />
                  <div className="map-pin-overlay-pro">
                    <MapPin size={26} color="var(--ember-primary, #ff7a59)" fill="var(--ember-primary, #ff7a59)" />
                  </div>
                </a>
              </div>
            </div>

            {/* PRAVÝ SLOUPEC - FORMULÁŘ */}
            <form className="contact-form-card" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group-pro">
                <label htmlFor="user_name" className="form-label-pro">Jméno</label>
                <input 
                  id="user_name"
                  type="text" 
                  name="user_name" 
                  value={formData.user_name}
                  onChange={handleChange}
                  className="contact-input-pro" 
                  placeholder="Petr Novák" 
                  required 
                />
              </div>
              
              <div className="form-group-pro">
                <label htmlFor="user_email" className="form-label-pro">Email</label>
                <input 
                  id="user_email"
                  type="email" 
                  name="user_email" 
                  value={formData.user_email}
                  onChange={handleChange}
                  className="contact-input-pro" 
                  placeholder="petr@example.com" 
                  required 
                />
              </div>
              
              <div className="form-group-pro">
                <label htmlFor="message" className="form-label-pro">Zpráva</label>
                <textarea 
                  id="message"
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input-pro textarea-resize-vertical" 
                  placeholder="O jaký projekt se jedná?" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn-pro ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading'}
              >
                <span>{status === 'loading' ? 'Odesílám...' : 'Odeslat zprávu'}</span>
                <Send size={16} />
              </button>

              <div className="status-container-pro">
                {status === 'success' && (
                  <div className="status-msg-pro success">
                    <CheckCircle size={16} /> Zpráva byla úspěšně odeslána!
                  </div>
                )}
                {status === 'error' && (
                  <div className="status-msg-pro error">
                    <AlertCircle size={16} /> Došlo k chybě. Zkuste to znovu.
                  </div>
                )}
              </div>
            </form>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;