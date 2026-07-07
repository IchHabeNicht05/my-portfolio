import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Check, User, Clock, Tag, ShieldCheck } from 'lucide-react';
import { ServicesData } from '../../data/servicesData'; 
import ScrollReveal from '../ui/RevealOnScroll';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-ambient-glow" />

      <div className="container relative-z">
        
        {/* HLAVIČKA A INFO */}
        <ScrollReveal direction="up" delay={0}>
          <div className="services-header-pro">
            <div className="section-tag-pro">
              <Briefcase size={14} />
              <span>Nabídka služeb</span>
            </div>
            
            <h2 className="section-title-pro">
              Služby & <span className="text-pro-gradient">digitální řešení</span>
            </h2>
            
            <p className="services-desc-pro">
              Od rychlých webových prezentací po komplexní systémy s databází. 
              Vyberte si řešení na míru vašemu projektu.
            </p>

            {/* Sjednocené, čisté klientské info - bez zbytečného šumu */}
            <div className="services-meta-info-pro">
              <span>Nejsem plátce DPH</span>
              <span className="pro-separator">•</span>
              <span>Záloha 50 % před startem</span>
              <span className="pro-separator">•</span>
              <span className="pro-bonus-text">Startovací bonus −20 % na první projekt</span>
            </div>
          </div>
        </ScrollReveal>
        
        {/* GRID KARET S KASKÁDOVÝM EFEKTEM */}
        <div className="services-grid">
          {ServicesData.map((service, index) => (
            <ScrollReveal 
              key={service.id || index} 
              direction="up" 
              delay={0.1 + index * 0.15} // Stagger efekt pro každou kartu
            >
              <div className={`service-card-pro ${service.isPopular ? 'popular' : ''}`}>
                {service.isPopular && <div className="popular-badge">Doporučeno</div>}
                
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <service.icon size={24} />
                  </div>
                  <span className={`package-badge-pro ${service.isPopular ? 'badge-popular-pro' : ''}`}>
                    {service.packageLabel}
                  </span>
                </div>
                
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                
                {/* CÍLOVKA & TIME */}
                <div className="service-specs-box">
                  <div className="spec-row">
                    <User size={15} className="spec-icon" />
                    <span>Pro: <strong>{service.target}</strong></span>
                  </div>
                  <div className="spec-row">
                    <Clock size={15} className="spec-icon" />
                    <span>Dodání: <strong>{service.deliveryTime}</strong></span>
                  </div>
                </div>
                
                <div className="service-card-price">{service.price}</div>
                
                <div className="service-card-divider" />

                <ul className="service-features-list">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i}>
                      <Check size={16} className="check-icon-pro" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/service/${service.id}`} 
                  className={`btn-service-pro ${service.isPopular ? 'btn-indigo' : 'btn-outline'}`}
                >
                  Detail řešení <ArrowRight size={16} />
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