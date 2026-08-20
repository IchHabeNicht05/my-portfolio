import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // 1. IMPORT FRAMER MOTION
import emailjs from '@emailjs/browser';
import { ArrowLeft, Check, Mail, Loader2, Sparkles } from 'lucide-react';
import { ServicesData } from '../../data/servicesData';
import './ServiceDetail.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = ServicesData.find(s => s.id === id);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [userName, setUserName] = useState("");
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
        <Link to="/" className="btn-back-ghost">
          <ArrowLeft size={16} /> Zpět na hlavní stránku
        </Link>
      </div>
    );
  }

  const handleSendInquiry = async () => {
    if (!userName.trim()) { alert("Prosím vyplňte vaše jméno."); return; }
    if (!email || !email.includes("@")) { alert("Prosím vyplňte platný email."); return; }
    if (!message) { alert("Prosím napište zprávu."); return; }

    setEmailStatus("sending");

    const fullMessage = `ZÁJEM O SLUŽBU: ${service.title}\n\nOd: ${userName}\nZpráva:\n${message}`;
    
    const templateParams = { 
      user_email: email, 
      user_name: userName,
      message: fullMessage,
      service_title: service.title
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
      
      <motion.div 
        className="sd-container relative-z"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        
        {/* NAVIGACE ZPĚT */}
        <motion.div className="sd-top-bar" variants={fadeInUp}>
          <Link to="/" className="btn-back-ghost">
            <ArrowLeft size={16} /> Zpět na služby
          </Link>
        </motion.div>

        {/* DVOU-SLOUPCOVÝ LAYOUT */}
        <div className="sd-layout-grid">
          
          {/* LEVÝ SLOUPEC: Informace */}
          <motion.div className="sd-content-column" variants={fadeInUp}>
            <div className="sd-header-badge">
              <service.icon size={18} className="sd-badge-icon" />
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
                <Sparkles size={20} className="sparkle-icon" /> Co je zahrnuto v ceně:
              </h3>
              <div className="sd-features-grid">
                {service.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="sd-feature-card"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div className="sd-check-circle">
                      <Check size={14} />
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PRAVÝ SLOUPEC: Sticky formulář a cena */}
          <motion.div className="sd-sidebar-column" variants={fadeInUp}>
            <div className="sd-sticky-card">
              
              <div className="sd-price-banner">
                <span className="sd-price-label">Předpokládaná cena</span>
                <span className="sd-price">{service.price}</span>
              </div>

              <div className="sd-form-wrapper">
                <h3 className="sd-form-title">Poptat tuto službu</h3>
                <p className="sd-form-subtitle">Napište mi detaily a obratem se vám ozvu s dalším postupem.</p>
                
                <div className="sd-form-group">
                  <label htmlFor="sd_name">Vaše Jméno</label>
                  <input 
                    id="sd_name"
                    name="user_name"
                    type="text" 
                    placeholder="Jan Novák" 
                    className="sd-input"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    disabled={emailStatus === "success" || emailStatus === "sending"}
                  />
                </div>

                <div className="sd-form-group">
                  <label htmlFor="sd_email">Váš Email</label>
                  <input 
                    id="sd_email"
                    name="user_email"
                    type="email" 
                    placeholder="vas@email.cz" 
                    className="sd-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={emailStatus === "success" || emailStatus === "sending"}
                  />
                </div>
                
                <div className="sd-form-group">
                  <label htmlFor="sd_message">Detail projektu / Zpráva</label>
                  <textarea 
                    id="sd_message"
                    name="message"
                    rows="4" 
                    placeholder={`Dobrý den, mám zájem o ${service.title}...`} 
                    className="sd-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={emailStatus === "success" || emailStatus === "sending"}
                  />
                </div>
                
                <motion.button 
                   className={`btn-submit ${emailStatus}`}
                   onClick={handleSendInquiry}
                   disabled={emailStatus === "success" || emailStatus === "sending"}
                   whileTap={{ scale: 0.98 }}
                >
                  {emailStatus === "idle" && <><span>Odeslat poptávku</span> <Mail size={18} /></>}
                  {emailStatus === "sending" && <><span>Odesílám...</span> <Loader2 size={18} className="sd-spin" /></>}
                  {emailStatus === "success" && <><span>Odesláno</span> <Check size={18} /></>}
                  {emailStatus === "error" && <><span>Chyba, zkuste to znovu</span></>}
                </motion.button>
              </div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ServiceDetail;