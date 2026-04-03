import { useState, useEffect } from 'react';
import './Projects.css';
import { 
  ArrowRight, Layers
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

import { ProjectsData } from '../../data/projectsData';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [selectedProject] = useState(null);

  const navigate = useNavigate();

  // Efekt pro zamezení scrollování pozadí, když je otevřený modal
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-is-open');
    } else {
      document.body.classList.remove('modal-is-open');
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section">
      {/* Ambientní pozadí */}
      <div className="projects-bg-glow" />

      <div className="container">
        
        {/* HLAVIČKA SEKCE */}
        <div className="projects-header-wrapper">
          <div className="projects-tag">
            <Layers size={14} />
            PROJEKTY
          </div>
          <h2 className="projects-title-large">Vybrané Projekty</h2>
          <p className="projects-description">
            Ukázka mé práce. Od webových aplikací po komplexní systémy.
          </p>
        </div>
        
        {/* GRID PROJEKTŮ */}
        <div className="projects-grid">
          {ProjectsData.map((project) => (
            /* --- TILT EFEKT --- */
            <Tilt
              key={project.id}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1500}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="24px" 
              style={{ 
                height: '100%', 
                display: 'flex', 
                borderRadius: '24px'
              }}
            >
              {/* PŘIDÁNA CHYBĚJÍCÍ TŘÍDA 'project-card' */}
              <div 
                className="project-card"
                onClick={() => navigate(`/project/${project.id}`)}
                role="button"
                style={{ width: '100%' }} 
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <span className="view-detail-btn">Detail projektu</span>
                  </div>
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
                      {project.tech.slice(0, 3).map(t => <span key={t} className="mini-tag">{t}</span>)}
                      {project.tech.length > 3 && <span className="mini-tag-count">+{project.tech.length - 3}</span>}
                    </div>
                    <div className="arrow-circle">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;