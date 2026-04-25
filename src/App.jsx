import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import About from './components/sections/About'; 
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Feedback from './components/sections/Feedback';
//import PricingCalculator from './components/sections/PricingCalculator'; 
import NotFound from './components/sections/NotFound'; 
import Experience from './components/sections/Experience';
import Workflow from './components/sections/Workflow';
import FAQ from './components/sections/FAQ';
//import Playground from './components/sections/Playground';
import Insights from './components/sections/Insights';

import PrivacyPolicy from './components/pages/PrivacyPolicy';
import ProjectDetail from './components/pages/ProjectDetail';
import ServiceDetail from './components/pages/ServiceDetail';
import PostDetail from './components/pages/PostDetail';

import SectionDivider from './components/ui/SectionDivider';
import CookieConsent from './components/ui/CookieConsent';
import ScrollToTop from './components/ui/ScrollToTop';
import PageLayout from './components/ui/PageLayout';
import RevealOnScroll from './components/ui/RevealOnScroll';
import Dock from './components/ui/Dock';

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
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>
      
      <main>
        <section id='home'><Hero /></section>
        <RevealOnScroll delay={0.2}><TechStack /></RevealOnScroll>
        <SectionDivider />
        <section id='about'><RevealOnScroll><About /></RevealOnScroll></section>
        <SectionDivider />
        <section id='experience'><RevealOnScroll><Experience /></RevealOnScroll></section>
        <SectionDivider />
        <section id='projects'><RevealOnScroll><Projects /></RevealOnScroll></section>
        <SectionDivider />
        {/*<section id='playground'><RevealOnScroll><Playground /></RevealOnScroll></section>
        <SectionDivider /> */}
        <section id='services'><RevealOnScroll><Services /></RevealOnScroll></section>
        <SectionDivider />
        <section id='workflow'><RevealOnScroll><Workflow /></RevealOnScroll></section>
        <SectionDivider />
        <section id='faq'><RevealOnScroll><FAQ /></RevealOnScroll></section>
        <SectionDivider />
        {/* <section id='pricing'><RevealOnScroll><PricingCalculator /></RevealOnScroll></section> */}
        {/*<SectionDivider /> */}
        <section id='reviews'><RevealOnScroll><Testimonials /></RevealOnScroll></section>
        <SectionDivider />
        <section id='insights'><RevealOnScroll><Insights /></RevealOnScroll></section>
        <SectionDivider />
        <section id='contact'><RevealOnScroll><Contact /></RevealOnScroll></section>
        <SectionDivider />
        <section id='feedback'><RevealOnScroll><Feedback /></RevealOnScroll></section>
      </main>
      
      <Footer />
    </div>

    <Dock activeSection={activeSection} />
  </>
  );
};

/* =========================================
   HLAVNÍ APP KOMPONENTA (S Routováním)
   ========================================= */
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation(); // <--- Důležité pro sledování změny URL

  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* Zabalíme Routes do AnimatePresence */}
      <AnimatePresence mode="wait">
        {/* Důležité: Předáváme location a key, aby Framer poznal změnu stránky */}
        <Routes location={location} key={location.pathname}>
          
          <Route 
            path="/" 
            element={
              <PageLayout>
                <HomePortfolio activeSection={activeSection} setActiveSection={setActiveSection} />
              </PageLayout>
            } 
          />

          <Route 
            path="/privacy-policy" 
            element={
              <PageLayout>
                <PrivacyPolicy />
              </PageLayout>
            } 
          />

          <Route 
            path="/project/:id" 
            element={
              <PageLayout>
                <ProjectDetail />
              </PageLayout>
            } 
          />

          <Route 
            path="/service/:id" 
            element={
              <PageLayout>
                <ServiceDetail />
              </PageLayout>
            } 
          />

          <Route 
            path="/insight/:id" 
            element={
              <PageLayout>
                <PostDetail />
              </PageLayout>
            } 
          />

          <Route 
            path="*" 
            element={
              <PageLayout>
                <NotFound />
              </PageLayout>
            } 
          />
          
        </Routes>
      </AnimatePresence>
        <CookieConsent />
    </>
  );
}

export default App;