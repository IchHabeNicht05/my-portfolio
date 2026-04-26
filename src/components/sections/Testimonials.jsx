import React from 'react';
import './Testimonials.css';
import { Star, MessageSquare, Quote } from 'lucide-react';
import ScrollReveal from '../ui/RevealOnScroll';

const reviews = [
  {
    id: 1,
    name: "Štěpán M.",
    role: "Student VŠ",
    text: "Spolupráce s tebou byla velmi dobrá, práce je odvedená kvalitně a výsledek vypadá opravdu dobře. Navíc jsi byl ochotný pomoct i s věcmi mimo samotný projekt, čehož si vážím.",
    avatar: "ŠM",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id='reviews' className="testimonials-section">
      {/* Ambientní fialová záře na pozadí */}
      <div className="testimonials-bg-glow" />
      <ScrollReveal direction="up" delay={0.1}>

      <div className="testimonials-container">
        
        {/* HLAVIČKA SEKCE */}
        <div className="testimonials-header-wrapper">
          <div className="testimonials-tag">
            <MessageSquare size={14} />
            REFERENCE
          </div>
          <h2 className="testimonials-title-large">Co o mně říkají klienti</h2>
          <p className="testimonials-description">
            Důvěra a spokojenost mých klientů je pro mě největší motivací.
          </p>
        </div>
        
        {/* KONTEJNER PRO KARTY */}
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              
              {/* Ikona uvozovek v rohu */}
              <Quote className="card-quote-icon" size={44} />

              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-meta">
                  <h4 className="review-name">{review.name}</h4>
                  <p className="review-role">{review.role}</p>
                </div>
              </div>

              {/* HODNOCENÍ HVĚZDIČKAMI */}
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "#fbbf24" : "none"} 
                    color={i < review.rating ? "#fbbf24" : "#4b5563"} 
                    strokeWidth={i < review.rating ? 0 : 1.5}
                  />
                ))}
              </div>

              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default Testimonials;