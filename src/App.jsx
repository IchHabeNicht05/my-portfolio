import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// --- SECTIONS ---
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import About from './components/sections/About'; 
import Experience from './components/sections/Experience'; // Vráceno
import Services from './components/sections/Services';
import Workflow from './components/sections/Workflow';     // Vráceno
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Feedback from './components/sections/Feedback';
import NotFound from './components/sections/NotFound'; 
import Footer from './components/sections/Footer';

// --- PAGES ---
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import ProjectDetail from './components/pages/ProjectDetail';
import ServiceDetail from './components/pages/ServiceDetail';

// --- UI COMPONENTS ---
import CookieConsent from './components/ui/CookieConsent';
import ScrollToTop from './components/ui/ScrollToTop';
import PageLayout from './components/ui/PageLayout'; 
import Dock from './components/ui/Dock';
import ScrollReveal from './components/ui/RevealOnScroll';

/* =========================================
   KOMPONENTA DOMOVSKÉ STRÁNKY
   ========================================= */
/* =========================================
   KOMPONENTA DOMOVSKÉ STRÁNKY
   ========================================= */
const HomePortfolio = ({ activeSection, setActiveSection }) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { 
      threshold: 0.3,
      rootMargin: "-10% 0px -10% 0px"
    });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <div className="app fade-in-content">
        <div className="ambient-glow">
          <div className="glow-orb orb-1" />
          <div className="glow-orb orb-2" />
          <div className="glow-orb orb-3" />
        </div>
        
        <main>
          {/* Hero sekce - animuje se shora dolů hned při načtení */}
          <section id='home'>
              <Hero />
          </section>

          <section>
              <TechStack /> 
          </section>
          
          {/* O mně - klasický výjezd nahoru */}
          <section id='about'>
              <About />
          </section>

          {/* Zkušenosti - nástup zleva pro dynamiku */}
          <section id='experience'>
              <Experience />
          </section>
          
          {/* Projekty - bezpečný výjezd nahoru, aby vynikly karty */}
          <section id='projects'>
              <Projects />
          </section>
          
          {/* Služby - nástup zprava */}
          <section id='services'>
              <Services />
          </section>

          {/* Workflow - vyžaduje soustředění, proto čistý výjezd nahoru */}
          <section id='workflow'>
              <Workflow />
          </section>
          
          <section id='faq'>
              <FAQ />
          </section>
          
          {/* Reference - jemný delay pro pocit lehkosti */}
          <section id='reviews'>
              <Testimonials />
          </section>
          
          {/* Kontakt a Feedback - vizuální "sevření" (jeden zleva, druhý zprava) */}
          <section id='contact'>
              <Contact />
          </section>
          
          <section id='feedback'>
              <Feedback />
          </section>
        </main>
        
        <Footer />
      </div>

      <Dock activeSection={activeSection} />
    </>
  );
};

/* =========================================
   HLAVNÍ APP KOMPONENTA
   ========================================= */
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageLayout>
            <HomePortfolio activeSection={activeSection} setActiveSection={setActiveSection} />
          </PageLayout>
        } />
        <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicy /></PageLayout>} />
        <Route path="/project/:id" element={<PageLayout><ProjectDetail /></PageLayout>} />
        <Route path="/service/:id" element={<PageLayout><ServiceDetail /></PageLayout>} />
        <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
      </Routes>
      
      <CookieConsent />
    </>
  );
}

export default App;