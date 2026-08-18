import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Check, User, Clock, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { ServicesData } from '../../data/servicesData'; 
import ScrollReveal from '../ui/RevealOnScroll';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      {/* Ambientní fialovo-jantarová záře na pozadí */}
      <div className="services-ambient-glow" />

      <div className="container services-container">
        
        {/* HLAVIČKA A INFO */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="services-header-pro">
            <div className="services-tag-pro">
              <Sparkles size={13} className="tag-sparkle" />
              <span>Nabídka služeb</span>
            </div>
            
            <h2 className="section-title-pro">
              Služby & <span className="ember-text-gradient">digitální řešení</span>
            </h2>
            
            <p className="services-desc-pro">
              Od reprezentativních webových prezentací po komplexní webové systémy na míru. 
              Vyberte si řešení s maximálním zaměřením na výkon a uživatelský zážitek.
            </p>

            {/* Klientské garance a pravidla */}
            <div className="services-meta-info-pro">
              <div className="meta-chip-pro">
                <ShieldCheck size={14} className="meta-icon" />
                <span>Nejsem plátce DPH</span>
              </div>
              <span className="pro-separator">•</span>
              <div className="meta-chip-pro">
                <Zap size={14} className="meta-icon" />
                <span>Záloha 50 % před startem</span>
              </div>
              <span className="pro-separator">•</span>
              <div className="meta-chip-pro">
                <Clock size={14} className="meta-icon" />
                <span>Garantovaný termín dodání</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* MŘÍŽKA SLUŽEB */}
        <div className="services-grid-pro">
          {ServicesData.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              direction="up" 
              delay={0.1 + index * 0.1}
            >
              <div className={`service-card-pro ${service.isPopular ? 'popular-card-pro' : ''}`}>
                
                {/* Zvýrazněný badge pro populární balíček */}
                {service.isPopular && (
                  <div className="popular-badge-pro">
                    <Sparkles size={12} />
                    <span>Nejoblíbenější volba</span>
                  </div>
                )}

                <div className="service-card-header-pro">
                  <div className="service-icon-box">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>
                </div>
                
                {/* CÍLOVÁ SKUPINA A DOBA DODÁNÍ */}
                <div className="service-specs-box">
                  <div className="spec-row">
                    <User size={14} className="spec-icon" />
                    <span>Pro: <strong>{service.target}</strong></span>
                  </div>
                  <div className="spec-row">
                    <Clock size={14} className="spec-icon" />
                    <span>Dodání: <strong>{service.deliveryTime}</strong></span>
                  </div>
                </div>
                
                {/* CENA */}
                <div className="service-card-price-box">
                  <span className="price-label">Předpokládaná investice</span>
                  <div className="service-card-price">{service.price}</div>
                </div>
                
                <div className="service-card-divider" />

                {/* FUNKCE / CO JE ZAHRNUTO */}
                <ul className="service-features-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <div className="check-icon-wrapper">
                        <Check size={14} className="check-icon-pro" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA AKCE */}
                <Link 
                  to={`/service/${service.id}`} 
                  className={`btn-service-pro ${service.isPopular ? 'btn-ember-primary' : 'btn-ember-secondary'}`}
                >
                  <span>Detail řešení</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;