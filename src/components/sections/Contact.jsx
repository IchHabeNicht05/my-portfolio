import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Zde bys napojil reálné odesílání (např. EmailJS, Formspree)
    console.log('Odesíláno:', formData);
    setStatus('success');
    
    // Vyčištění formuláře po odeslání
    setTimeout(() => {
      setStatus(null);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact-section" id="kontakt">
      <div className="contact-bg-glow"></div>
      
      <div className="contact-container">
        <div className="contact-header-wrapper">
          <span className="contact-tag">Kontakt</span>
          <h2 className="contact-title-large">Napište mi</h2>
          <p className="contact-description">
            Máte nápad na projekt nebo dotaz? Ozvěte se a společně to probereme.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEVÝ SLOUPEC: Informace a Mapa */}
          <div className="contact-info">
            
            <a href="mailto:martin.habenicht05@gmail.com" className="info-item">
              <div className="icon-box"><Mail size={24} /></div>
              <div>
                <h3>Email</h3>
                <p>martin.habenicht05@gmail.com</p>
              </div>
            </a>

            <a href="tel:+420731530843" className="info-item">
              <div className="icon-box"><Phone size={24} /></div>
              <div>
                <h3>Telefon</h3>
                <p>+420 731 530 843</p>
              </div>
            </a>

            {/* UPRAVENÁ KARTA S MAPOU */}
            <div className="info-item map-item">
              <div className="map-header">
                <div className="icon-box"><MapPin size={24} /></div>
                <h3>Česká Lípa, ČR</h3>
              </div>
              
              {/* Statická mapa jako odkaz */}
              <a 
                href="https://www.google.com/maps/place/Česká+Lípa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-wrapper static-map"
              >
                {/* Zde si ideálně doplň cestu k vlastnímu screenu tmavé mapy! */}
                <img 
                  src="/mapa-ceska-lipa.png" 
                  alt="Mapa Česká Lípa" 
                  className="map-image"
                />
                <div className="map-pin-overlay">
                  <div className="pin-pulse"></div>
                  <MapPin size={28} weight="fill" />
                </div>
              </a>
            </div>

          </div>

          {/* PRAVÝ SLOUPEC: Formulář */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Jméno</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input" 
                placeholder="Petr Novák" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input" 
                placeholder="petr@example.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Zpráva</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-input textarea-resize-vertical" 
                placeholder="O jaký projekt se jedná?" 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Odeslat zprávu <Send size={18} />
            </button>

            {status === 'success' && (
              <div className="status-msg success">Zpráva byla úspěšně odeslána!</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;