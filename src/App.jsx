import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- SECTIONS ---
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import About from './components/sections/About'; 
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import Workflow from './components/sections/Workflow';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
// import Feedback from './components/sections/Feedback';
import NotFound from './components/sections/NotFound'; 
import Footer from './components/sections/Footer';
import InquiryModal from './components/sections/InquiryModal';

// --- PAGES ---
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import ProjectDetail from './components/pages/ProjectDetail';
import ServiceDetail from './components/pages/ServiceDetail';

// --- UI COMPONENTS ---
import PageTransition from './components/ui/PageTransition';
import CookieConsent from './components/ui/CookieConsent';
import SectionDivider from './components/ui//SectionDivider';
// import ScrollToTop from './components/ui/ScrollToTop';
import PageLayout from './components/ui/PageLayout'; 
// import Dock from './components/ui/Dock';
import ScrollProgress from './components/ui/ScrollProgress';

/* =========================================
   KOMPONENTA DOMOVSKÉ STRÁNKY
   ========================================= */
const HomePortfolio = ({ setActiveSection, onOpenInquiry }) => {
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
      <div className="app bg-grid-pattern">
        <div className="ambient-glow">
          <div className="glow-orb orb-1" />
          <div className="glow-orb orb-2" />
        </div>
        
        <main>
          <section id="home">
            <Hero onOpenInquiry={onOpenInquiry} />
          </section>

          <SectionDivider label="O mně" />

          <section id="about">
            <About />
          </section>

          <SectionDivider label="Portfolio" />

          <section id="experience">
            <Experience />
          </section>

          <SectionDivider label="Projekty" />
          
          <section id="projects">
            <Projects />
          </section>

          <SectionDivider label="Služby" />
          
          <section id="services">
            <Services onOpenInquiry={onOpenInquiry} />
          </section>

          <SectionDivider label="Průběh práce" />

          <section id="workflow">
            <Workflow />
          </section>

          <SectionDivider label="FAQ" />
          
          <section id="faq">
            <FAQ />
          </section>

          <SectionDivider label="Reference" />
          
          <section id="reviews">
            <Testimonials />
          </section>

          <SectionDivider label="Kontakt" />
          
          <section id="contact">
            <Contact />
          </section>
          
          {/* <section id="feedback">
            <Feedback />
          </section> */}
        </main>
        
        <Footer onOpenInquiry={onOpenInquiry} />
      </div>

      {/* <Dock activeSection={activeSection} /> */}
    </>
  );
};

/* =========================================
   HLAVNÍ APP KOMPONENTA
   ========================================= */
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const location = useLocation();

  const handleOpenInquiry = () => setIsInquiryOpen(true);
  const handleCloseInquiry = () => setIsInquiryOpen(false);

  return (
    <>
      <Navbar onOpenInquiry={handleOpenInquiry} />
      {/* <ScrollToTop /> */}

      <AnimatePresence 
        mode="wait" 
        onExitComplete={() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTo(0, 0);
          document.body.scrollTo(0, 0);
        }}
      >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageLayout>
            <HomePortfolio 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
              onOpenInquiry={handleOpenInquiry}
            />
          </PageLayout>
        } />
        <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicy /></PageLayout>} />
        <Route path="/project/:id" element={<PageLayout><ProjectDetail /></PageLayout>} />
        <Route path="/service/:id" element={<PageLayout><ServiceDetail /></PageLayout>} />
        <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
      </Routes>
      </AnimatePresence>
      
      <CookieConsent />
      <ScrollProgress />

      {/* Global Inquiry Modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />
    </>
  );
}

export default App;