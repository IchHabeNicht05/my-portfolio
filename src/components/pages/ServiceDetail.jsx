import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ArrowLeft, Check, Mail, Loader2, Sparkles, User } from 'lucide-react'; // Přidána ikonka User
import { ServicesData } from '../../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = ServicesData.find(s => s.id === id);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // STAVY FORMULÁŘE
  const [userName, setUserName] = useState(""); // Nový stav pro jméno
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="sd-not-found">
        <h2 className="sd-title">Služba nenalezena</h2>
        <Link to="/" className="btn-back">
          <ArrowLeft size={16} /> Zpět
        </Link>
      </div>
    );
  }

  const handleSendInquiry = async () => {
    // VALIDACE
    if (!userName.trim()) { alert("Prosím vyplňte vaše jméno."); return; }
    if (!email || !email.includes("@")) { alert("Prosím vyplňte platný email."); return; }
    if (!message) { alert("Prosím napište zprávu."); return; }

    setEmailStatus("sending");

    // PŘÍPRAVA DAT PRO EMAILJS
    const fullMessage = `ZÁJEM O SLUŽBU: ${service.title}\n\nOd: ${userName}\nZpráva:\n${message}`;
    
    const templateParams = { 
      user_email: email, 
      user_name: userName, // Teď posíláme reálné jméno místo statického textu
      message: fullMessage,
      service_title: service.title // Můžeš využít v šabloně jako {{service_title}}
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setEmailStatus("success");
    } catch (error) {
      console.error(error);
      setEmailStatus("error");
    }
  };

  return (
    <section className="sd-section">
      <div className="sd-bg-glow" />
      
      <div className="sd-container relative-z">
        
        {/* NAVIGACE ZPĚT */}
        <div className="sd-top-bar">
          <Link to="/" className="btn-back-ghost">
            <ArrowLeft size={16} /> Zpět
          </Link>
        </div>

        {/* DVOU-SLOUPCOVÝ LAYOUT */}
        <div className="sd-layout-grid">
          
          {/* LEVÝ SLOUPEC: Informace */}
          <div className="sd-content-column">
            <div className="sd-header-badge">
              <service.icon size={20} className="sd-badge-icon" />
              <span>Detail služby</span>
            </div>

            <h1 className="sd-title">{service.title}</h1>
            <h2 className="sd-subtitle">{service.desc}</h2>
            
            <div className="sd-divider" />

            <div className="sd-text-content">
              <h3>O co přesně jde?</h3>
              <p className="sd-long-desc">{service.longDesc}</p>
            </div>

            <div className="sd-features-section">
              <h3 className="sd-section-title">
                <Sparkles size={18} className="text-primary" /> Co je zahrnuto v ceně:
              </h3>
              <div className="sd-features-grid">
                {service.features.map((feature, i) => (
                  <div key={i} className="sd-feature-card">
                    <div className="sd-check-circle">
                      <Check size={14} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PRAVÝ SLOUPEC: Sticky formulář a cena */}
          <div className="sd-sidebar-column">
            <div className="sd-sticky-card">
              
              <div className="sd-price-banner">
                <span className="sd-price-label">Předpokládaná cena</span>
                <span className="sd-price">{service.price}</span>
              </div>

              <div className="sd-form-wrapper">
                <h3 className="sd-form-title">Poptat tuto službu</h3>
                <p className="sd-form-subtitle">Napište mi detaily a obratem se vám ozvu s dalším postupem.</p>
                
                {/* NOVÉ POLE: JMÉNO */}
                <div className="sd-form-group">
                  <label>Vaše Jméno</label>
                  <input 
                     type="text" 
                     placeholder="Jan Novák" 
                     className="sd-input"
                     value={userName}
                     onChange={(e) => setUserName(e.target.value)}
                     disabled={emailStatus === "success" || emailStatus === "sending"}
                  />
                </div>

                <div className="sd-form-group">
                  <label>Váš Email</label>
                  <input 
                     type="email" 
                     placeholder="vas@email.cz" 
                     className="sd-input"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     disabled={emailStatus === "success" || emailStatus === "sending"}
                  />
                </div>
                
                <div className="sd-form-group">
                  <label>Detail projektu / Zpráva</label>
                  <textarea 
                     rows="4" 
                     placeholder={`Dobrý den, mám zájem o ${service.title}...`} 
                     className="sd-textarea"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     disabled={emailStatus === "success" || emailStatus === "sending"}
                  />
                </div>
                
                <button 
                   className={`btn-submit ${emailStatus}`}
                   onClick={handleSendInquiry}
                   disabled={emailStatus === "success" || emailStatus === "sending"}
                >
                  {emailStatus === "idle" && <>Odeslat poptávku <Mail size={18} /></>}
                  {emailStatus === "sending" && <>Odesílám... <Loader2 size={18} className="sd-spin" /></>}
                  {emailStatus === "success" && <>Odesláno <Check size={18} /></>}
                  {emailStatus === "error" && <>Chyba, zkuste to znovu</>}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;