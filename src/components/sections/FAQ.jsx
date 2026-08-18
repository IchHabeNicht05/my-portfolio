import React, { useState } from 'react';
import { ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import ScrollReveal from '../ui/RevealOnScroll';
import './FAQ.css';

const faqs = [
  {
    question: "Kolik stojí tvorba webu?",
    answer: "Cena je vždy individuální. Záleží na tom, zda potřebujete jednoduchou vizitku nebo komplexní prodejní systém. Moje weby ale nejsou výdaj, nýbrž investice, která se vám skrze nové zákazníky vrátí."
  },
  {
    question: "Jak dlouho trvá dodání projektu?",
    answer: "Standardní web obvykle doručím do 2 až 4 týdnů od schválení návrhu. Vždy záleží na rychlosti dodání podkladů a složitosti funkcí."
  },
  {
    question: "Budu moci web sám upravovat?",
    answer: "Ano. Weby stavím tak, abyste měli nad obsahem kontrolu. Buď skrze jednoduché administrační rozhraní, nebo vás naučím základy práce s texty a obrázky v kódu."
  },
  {
    question: "Nabízíte i následnou správu a servis?",
    answer: "Samozřejmě. Spuštěním webu naše spolupráce končit nemusí. Nabízím pravidelné aktualizace, zálohování a sledování výkonu webu, abyste se mohli soustředit na svůj byznys."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      {/* Ambientní fialovo-jantarové světlo */}
      <div className="faq-ambient-glow" />

      <div className="container faq-container">
        {/* HLAVIČKA SEKCE */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="faq-header-pro">
            <div className="faq-tag-pro">
              <Sparkles size={13} className="tag-sparkle" />
              <span>Odpovědi na otázky</span>
            </div>
            
            <h2 className="faq-title-pro">
              Často kladené <span className="ember-text-gradient">otázky</span>
            </h2>
            
            <p className="faq-desc-pro">
              Vše, co potřebujete vědět o procesu vývoje, financování a následné péči o projekt.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ AKORDEON */}
        <div className="faq-list-pro">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={0.1 + index * 0.08}
              >
                <div 
                  className={`faq-card-pro ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question-pro">
                    <div className="q-left-box">
                      <span className="q-number">{`0${index + 1}`}</span>
                      <span className="q-text">{faq.question}</span>
                    </div>
                    <div className="q-chevron-box">
                      <ChevronDown className={`chevron-icon ${isOpen ? 'rotate' : ''}`} size={18} />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="faq-answer-pro">
                      <div className="answer-divider" />
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* BOTTOM HINT BADGE */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="faq-footer-hint">
            <div className="hint-pill">
              <MessageCircle size={15} className="hint-icon" />
              <span>Nenašli jste odpověď na vaši otázku?</span>
              <a href="#kontakt" className="hint-link">Napište mi přímo &rarr;</a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default FAQ;