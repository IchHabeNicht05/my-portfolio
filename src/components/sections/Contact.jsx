import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
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
    // Dynamicky updatuje state podle atributu 'name'
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
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

            <div className="info-item map-item">
              <div className="map-header">
                <div className="icon-box"><MapPin size={24} /></div>
                <h3>Česká Lípa, ČR</h3>
              </div>
              <a 
                href="https://www.google.com/maps/place/%C4%8Cesk%C3%A1+L%C3%ADpa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-wrapper static-map"
              >
                <img 
                  src="/mapa-ceska-lipa.webp" 
                  alt="Mapa Česká Lípa" 
                  className="map-image"
                  loading='lazy'
                />
                <div className="map-pin-overlay">
                  <div className="pin-pulse"></div>
                  <MapPin size={28} color="#3b82f6" fill="#3b82f6" />
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Jméno</label>
              <input 
                type="text" 
                name="user_name" // Musí odpovídat {{user_name}}
                value={formData.user_name}
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
                name="user_email" // Musí odpovídat {{user_email}}
                value={formData.user_email}
                onChange={handleChange}
                className="contact-input" 
                placeholder="petr@example.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Zpráva</label>
              <textarea 
                name="message" // Musí odpovídat {{message}}
                value={formData.message}
                onChange={handleChange}
                className="contact-input textarea-resize-vertical" 
                placeholder="O jaký projekt se jedná?" 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${status === 'loading' ? 'loading' : ''}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Odesílám...' : 'Odeslat zprávu'} 
              <Send size={18} />
            </button>

            <div className="status-container">
              {status === 'success' && (
                <div className="status-msg success">
                  <CheckCircle size={18} /> Zpráva byla úspěšně odeslána!
                </div>
              )}
              {status === 'error' && (
                <div className="status-msg error">
                  <AlertCircle size={18} /> Došlo k chybě. Zkuste to znovu.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;