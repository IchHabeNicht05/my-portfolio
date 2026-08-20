import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // 1. IMPORT FRAMER MOTION
import { 
  ArrowLeft, Github, CheckCircle, Code2, Briefcase, 
  LayoutTemplate, Clock, Maximize, Cpu, Youtube, Lock 
} from 'lucide-react';
import { ProjectsData } from '../../data/projectsData';
import DeviceShowcase from '../sections/DeviceShowcase';
import Metrics from '../ui/ProjectMetrics';
import './ProjectDetail.css';

// Konfigurace plynulých animací
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectsData.find(p => 
    p.id?.toString() === id?.toString() || 
    p.liveLink?.includes(id) || 
    p.slug === id
  );

  const [cookieConsent, setCookieConsent] = useState(
    localStorage.getItem('cookieConsent') === 'accepted'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleConsentChange = () => {
      setCookieConsent(localStorage.getItem('cookieConsent') === 'accepted');
    };
    window.addEventListener('cookieConsentUpdated', handleConsentChange);
    return () => window.removeEventListener('cookieConsentUpdated', handleConsentChange);
  }, [id]);

  const handleInlineAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Projekt nenalezen</h2>
        <button onClick={() => navigate(-1)} className="btn-back-ghost">
          <ArrowLeft size={16} /> Zpět
        </button>
      </div>
    );
  }

  const isVideo = project.type === 'video';

  return (
    <section className="pd-section">
      <div className="pd-bg-glow" />
      
      <motion.div 
        className="pd-container relative-z"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        
        {/* NAVIGACE ZPĚT */}
        <motion.div className="pd-top-bar" variants={fadeInUp}>
          <button onClick={() => navigate(-1)} className="btn-back-ghost">
            <ArrowLeft size={16} /> Zpět na projekty
          </button>
        </motion.div>

        {/* HLAVNÍ VIZUÁL */}
        <motion.div className="pd-hero-visual-wrapper" variants={fadeInUp}>
          {isVideo && project.videoUrl ? (
            <div className="pd-hero-visual">
              {cookieConsent ? (
                <div className="pd-video-wrapper">
                  <iframe 
                    src={project.videoUrl} 
                    title={project.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="video-blocked-placeholder">
                  <div className="blocked-content">
                    <div className="blocked-icon-wrapper">
                      <div className="icon-circle">
                        <Youtube size={48} className="yt-icon" />
                      </div>
                      <div className="lock-badge">
                        <Lock size={16} className="lock-icon" />
                      </div>
                    </div>
                    <h3>Video je chráněno</h3>
                    <p>Pro spuštění přehrávače YouTube je nutné přijmout soubory cookies.</p>
                    <button onClick={handleInlineAccept} className="btn-accept-inline">
                      Povolit cookies a přehrát
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : project.hasMultiDevice ? (
            <DeviceShowcase 
              desktopImg={project.desktopImg || project.image}
              tabletImg={project.tabletImg || project.image}
              mobileImg={project.mobileImg || project.image}
              title={project.title}
            />
          ) : (
            <div className="pd-hero-visual">
              <div className="pd-image-wrapper">
                <img src={project.image || '/api/placeholder/1200/600'} alt={project.title} />
              </div>
            </div>
          )}
        </motion.div>

        {/* LAYOUT GRID */}
        <div className="pd-layout-grid">
          
          {/* HLAVNÍ OBSAH */}
          <motion.div className="pd-main-content" variants={fadeInUp}>
            <div className="pd-header-meta">
              <span className="pd-badge">{project.category}</span>
            </div>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-short-desc">{project.shortDesc}</p>
            
            <div className="pd-divider" />

            {/* VIDEO SPECIFIKACE */}
            {isVideo && (
              <div className="pd-video-specs">
                <div className="spec-item">
                  <div className="spec-icon-box"><Clock size={18} /></div>
                  <span>{project.duration || '0:00'}</span>
                </div>
                <div className="spec-item">
                  <div className="spec-icon-box"><Maximize size={18} /></div>
                  <span>{project.resolution || '4K'}</span>
                </div>
                <div className="spec-item">
                  <div className="spec-icon-box"><Cpu size={18} /></div>
                  <span>{project.fps || '60'} FPS</span>
                </div>
              </div>
            )}

            <div className="pd-text-block">
              <h3>
                <LayoutTemplate size={22} className="title-icon" /> 
                {isVideo ? 'O videu a konceptu' : 'Úvod a Výzva'}
              </h3>
              <p>{project.challenge}</p>
            </div>

            <div className="pd-text-block">
              <h3>
                <CheckCircle size={22} className="title-icon" /> 
                {isVideo ? 'Postprodukce' : 'Moje Řešení'}
              </h3>
              <p>{project.solution}</p>
            </div>

            {project.features && (
              <div className="pd-features-section">
                <h3>Použité techniky</h3>
                <div className="pd-features-grid">
                  {project.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      className="pd-feature-card"
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    >
                      <CheckCircle size={18} className="check-icon" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <Metrics metrics={project.metrics} />
          </motion.div>

          {/* SIDEBAR */}
          <motion.div className="pd-sidebar" variants={fadeInUp}>
            <div className="pd-sticky-card">
              <h3 className="pd-sidebar-title">Detaily projektu</h3>
              
              <div className="pd-meta-item">
                <div className="pd-meta-icon"><Briefcase size={18} /></div>
                <div>
                  <span className="pd-meta-label">Moje role</span>
                  <span className="pd-meta-value">{project.role}</span>
                </div>
              </div>

              <div className="pd-meta-item">
                <div className="pd-meta-icon"><Code2 size={18} /></div>
                <div>
                  <span className="pd-meta-label">{isVideo ? 'Software' : 'Technologie'}</span>
                  <div className="pd-tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="pd-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pd-sidebar-divider" />

              <div className="pd-action-buttons">
                {isVideo && project.youtubeLink && (
                  <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="btn-video-link">
                    <span>Otevřít na YouTube</span>
                    <Youtube size={18} />
                  </a>
                )}
                {!isVideo && project.liveLink && project.liveLink !== "#" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-live-link">
                    <span>Zobrazit web naživo</span>
                    <Maximize size={18} />
                  </a>
                )}
                {project.githubLink && !isVideo && project.githubLink !== "#" && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-outline-link">
                    <span>Zdrojový kód</span>
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetail;