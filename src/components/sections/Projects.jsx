import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Layers, Monitor, Video, ArrowRight } from 'lucide-react';
import { ProjectsData } from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const navigate = useNavigate();

  // Filtrování projektů podle typu (web / video)
  const filteredProjects = ProjectsData.filter(project => project.type === activeTab);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg-glow" />

      <div className="container relative-z">
        {/* HLAVIČKA SEKCE */}
        <div className="projects-header-wrapper">
          <div className="projects-tag">
            <Layers size={14} />
            PORTFOLIO
          </div>
          <h2 className="projects-title-large">Moje tvorba</h2>
          <p className="projects-description">
            Od moderních webových aplikací po dynamický video obsah. 
            Vyberte si kategorii, která vás zajímá.
          </p>

          {/* PŘEPÍNAČ (TABS) */}
          <div className="projects-tabs-container">
            <div className="projects-tabs">
              <button 
                className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
                onClick={() => setActiveTab('web')}
              >
                <Monitor size={18} />
                <span>Weby & Apps</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'video' ? 'active' : ''}`}
                onClick={() => setActiveTab('video')}
              >
                <Video size={18} />
                <span>Video tvorba</span>
              </button>
              {/* Animované pozadí aktivního tabu */}
              <motion.div 
                className="tab-indicator" 
                animate={{ x: activeTab === 'web' ? 0 : '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </div>

        {/* GRID PROJEKTŮ S ANIMACÍ PŘECHODU */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  perspective={1000}
                  scale={1.02}
                  glareEnable={true}
                  glareMaxOpacity={0.12}
                  className="tilt-wrapper"
                >
                  <div 
                    className="project-card"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    <div className="project-image-wrapper">
                      <img src={project.image} alt={project.title} loading="lazy" />
                      <div className="project-overlay">
                        <span className="view-detail-btn">
                          {activeTab === 'video' ? 'Přehrát video' : 'Zobrazit detail'}
                        </span>
                      </div>
                      {/* project.type === 'video' && <div className="video-badge">4K CONTENT</div> */}
                    </div>

                    <div className="project-content">
                      <div className="project-meta">
                        <span className="project-category">{project.category}</span>
                        <div className="tech-dots">
                          <span className="dot dot-blue"></span>
                          <span className="dot dot-purple"></span>
                        </div>
                      </div>
                      
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-short-desc">{project.shortDesc}</p>
                      
                      <div className="project-footer">
                        <div className="tech-tags-mini">
                          {project.tech.slice(0, 3).map(t => (
                            <span key={t} className="mini-tag">{t}</span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="mini-tag-count">+{project.tech.length - 3}</span>
                          )}
                        </div>
                        <div className="arrow-circle">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;