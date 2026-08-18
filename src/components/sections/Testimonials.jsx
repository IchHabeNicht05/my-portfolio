import React from 'react';
import { Sparkles, Quote, Star } from 'lucide-react';
import ScrollReveal from '../ui/RevealOnScroll';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: "Štěpán M.",
    role: "Student VŠ",
    text: "Spolupráce s tebou byla velmi dobrá, práce je odvedená kvalitně a výsledek vypadá opravdu dobře. Navíc jsi byl ochotný pomoct i s věcmi mimo samotný projekt, čehož si vážím.",
    avatar: "ŠM",
    rating: 5
  },
  {
    id: 2,
    name: "Zuzana H.",
    role: "Psí salon U Zuzky",
    text: "Jsem velice spokojená s vytvořeným webem pro můj nový psí salon 🐕🤩✂️ Krásně barevné, přehledné a celkově líbivé 🤩",
    avatar: "ZH",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="testimonials-section">
      {/* Ambientní fialovo-jantarová záře na pozadí */}
      <div className="testimonials-ambient-glow" />

      <div className="container testimonials-container">
        
        {/* HLAVIČKA SEKCE */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="testimonials-header-pro">
            <div className="testimonials-tag-pro">
              <Sparkles size={13} className="tag-sparkle" />
              <span>Reference & Hodnocení</span>
            </div>
            
            <h2 className="testimonials-title-pro">
              Co o mně říkají <span className="ember-text-gradient">klienti</span>
            </h2>
            
            <p className="testimonials-desc-pro">
              Důvěra a spokojenost mých klientů je pro mě největší motivací. Každý projekt stavím na maximální kvalitě a preciznosti.
            </p>
          </div>
        </ScrollReveal>
        
        {/* MŘÍŽKA KARET (RAYCAST TACTILE CARDS) */}
        <div className="testimonials-grid-pro">
          {reviews.map((review, index) => (
            <ScrollReveal 
              key={review.id || index} 
              direction="up" 
              delay={0.1 + index * 0.1}
            >
              <div className="testimonial-card-pro">
                
                {/* Horní lišta: Autor & Ikona */}
                <div className="card-top-bar">
                  <div className="author-info-box">
                    <div className="author-avatar">{review.avatar}</div>
                    <div className="author-meta">
                      <h3 className="author-name">{review.name}</h3>
                      <span className="author-role">{review.role}</span>
                    </div>
                  </div>
                  <div className="quote-icon-box">
                    <Quote size={18} />
                  </div>
                </div>

                {/* Tělo karty */}
                <div className="card-body-pro">
                  <div className="stars-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < review.rating ? "star-active" : "star-inactive"} 
                      />
                    ))}
                  </div>
                  <p className="testimonial-text">"{review.text}"</p>
                </div>

                {/* Spodní dekorativní linka s jantarovým bodem */}
                <div className="card-footer-pro">
                  <span className="review-verified-label">Ověřená reference</span>
                  <div className="ember-dot-indicator" />
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;