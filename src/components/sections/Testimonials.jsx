import React from 'react';
import './Testimonials.css';
import { Star, MessageSquare, Quote } from 'lucide-react'; // Přidána ikonka Quote

const reviews = [
  {
    id: 1,
    name: "Štefys",
    role: "Student VŠ",
    text: "Spolupráce s tebou byla velmi dobrá, práce je odvedená kvalitně a výsledek vypadá opravdu dobře. Navíc jsi byl ochotný pomoct i s věcmi mimo samotný projekt, čehož si vážím.",
    avatar: "JN",
    rating: 5
  },
  {
    id: 2,
    name: "Petra Svobodová",
    role: "Marketing Director",
    text: "Spolupráce byla skvělá. Oceňuji hlavně proaktivní přístup a cit pro detail. Doporučuji všem!",
    avatar: "PS",
    rating: 5
  },
  {
    id: 3,
    name: "Tomáš Dvořák",
    role: "Founder, Appify",
    text: "Kód je čistý, škálovatelný a perfektně zdokumentovaný. Profesionál každým coulem.",
    avatar: "TD",
    rating: 5
  },
  {
    id: 4,
    name: "Lucie Králová",
    role: "Product Owner",
    text: "Design, který Petr navrhl, nám zvedl konverze o 30%. Nemůžu si vynachválit.",
    avatar: "LK",
    rating: 5
  },
  {
    id: 5,
    name: "Martin Veselý",
    role: "CTO, FutureSoft",
    text: "Hledali jsme někoho, kdo umí React do hloubky, a našli jsme. Skvělá znalost moderních technologií.",
    avatar: "MV",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id='reviews' className="testimonials-section">
      {/* Ambientní pozadí */}
      <div className="testimonials-bg-glow" />

      <div className="testimonials-container">
        
        {/* 1. HLAVIČKA (Sjednocený styl) */}
        <div className="testimonials-header-wrapper">
          <div className="testimonials-tag">
            <MessageSquare size={14} />
            REFERENCE
          </div>
          <h2 className="testimonials-title-large">Co o mně říkají klienti</h2>
          <p className="testimonials-description">
            Důvěra a spokojenost klientů je pro mě na prvním místě.
            Podívejte se na jejich zkušenosti.
          </p>
        </div>
        
        {/* 2. INFINITE SCROLLER */}
        <div className="scroller">
          <div className="scroller-inner">
            
            {/* Smyčka pro karty (2x za sebou kvůli efektu nekonečna) */}
            {[...reviews, ...reviews].map((review, index) => (
              <div className="review-card" key={index}>
                
                {/* Ikonka uvozovek na pozadí karty */}
                <Quote className="card-quote-icon" size={40} />

                <div className="review-header">
                  <div className="review-avatar">{review.avatar}</div>
                  <div>
                    <h4 className="review-name">{review.name}</h4>
                    <p className="review-role">{review.role}</p>
                  </div>
                </div>

                {/* ⭐ HVĚZDIČKY ⭐ */}
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < review.rating ? "#fbbf24" : "none"} // Plná jen pokud je v ratingu
                      color={i < review.rating ? "#fbbf24" : "#4b5563"} // Šedá pro prázdné
                      strokeWidth={i < review.rating ? 0 : 1.5}
                    />
                  ))}
                </div>

                <p className="review-text">"{review.text}"</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;