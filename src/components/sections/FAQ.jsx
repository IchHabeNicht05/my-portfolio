import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
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

  return (
    <section id="faq" className="faq-section">
      <ScrollReveal direction="up" delay={0.1}>
      <div className="container">
        <div className="faq-header">
            <p className="faq-label">
                <HelpCircle size={16} /> 
                Máte dotazy?
            </p>
            <h2 className="faq-title">Často kladené otázky</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <span className="question-text">
                  <HelpCircle size={18} className="q-icon" />
                  {faq.question}
                </span>
                <ChevronDown className={`chevron ${activeIndex === index ? 'rotate' : ''}`} />
              </div>

              {activeIndex === index && (
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default FAQ;