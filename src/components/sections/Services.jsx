import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Briefcase, ArrowRight, Check, User, Clock, Tag } from 'lucide-react';
import { ServicesData } from '../../data/servicesData'; 
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-bg-glow" />

      <div className="container relative-z">
        {/* HLAVIČKA */}
        <div className="services-header-wrapper">
          <div className="services-tag">
            <Briefcase size={14} />
            CO NABÍZÍM
          </div>
          <h2 className="services-title-large">Moje Služby & Balíčky</h2>
          <p className="services-description">
            Od jednoduchých úprav po komplexní weby a aplikace. Vyberte si balíček, který nejlépe sedí vašim potřebám.
          </p>

          {/* INFO O DPH - důležité pro firemní klienty */}
          <div className="services-info-meta">
            <span className="dph-notice">Nejsem plátce DPH</span>
            <span className="info-divider">•</span>
            <p className="payment-notice">
              <Check size={14} className="text-primary" /> 
              Práce začínají po uhrazení <strong>50% zálohy</strong>
            </p>
          </div>

          {/* --- POZNÁMKA O SLEVĚ --- */}
          <motion.div 
            className="special-promo-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Tag size={16} className="promo-icon" />
            <span>
              <strong>Bonus pro nové klienty:</strong> Na náš první projekt sleva <strong>20 %</strong>!
            </span>
          </motion.div>
        </div>
        
        {/* GRID KARET S ANIMACÍ */}
        <div className="services-grid">
          {ServicesData.map((service, index) => (
            <motion.div 
              key={service.id} 
              className={`service-card ${service.isPopular ? 'popular-card' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              
              <div className="service-header">
                <div className="service-icon-box">
                  <service.icon size={24} />
                </div>
                <span className={`package-badge ${service.isPopular ? 'badge-popular' : ''}`}>
                  {service.packageLabel}
                </span>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              {/* PRO KOHO & DOBA DODÁNÍ */}
              <div className="service-meta-box">
                <div className="meta-row">
                  <User size={15} className="meta-icon" />
                  <span className='label-meta'>Pro koho: <strong>{service.target}</strong></span>
                </div>
                <div className="meta-row">
                  <Clock size={15} className="meta-icon" />
                  <span className='label-meta'>Doba dodání: <strong>{service.deliveryTime}</strong></span>
                </div>
              </div>
              
              <div className="service-price-row">
                <span className="service-price">{service.price}</span>
              </div>
              
              <div className="service-divider" />

              <ul className="service-list">
                {service.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="service-item">
                    <Check size={16} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to={`/service/${service.id}`} className={`btn-service ${service.isPopular ? 'btn-popular' : ''}`}>
                Více info & Poptat <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;