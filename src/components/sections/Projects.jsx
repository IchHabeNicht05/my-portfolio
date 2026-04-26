import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Monitor, Video, ArrowRight, Star } from 'lucide-react';
import { ProjectsData } from '../../data/projectsData';
import ScrollReveal from '../ui/RevealOnScroll';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const navigate = useNavigate();

  const featuredProject = ProjectsData.find(project => project.isFeatured) || ProjectsData[0];
  
  const filteredProjects = ProjectsData.filter(
    project => project.type === activeTab && project.id !== featuredProject?.id
  );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-ambient-glow" />

      <div className="container relative-z">
        
        {/* HLAVIČKA SEKCE */}
        <ScrollReveal direction="up" delay={0}>
          <div className="projects-header-pro">
            <div className="section-tag-pro">
              <Layers size={14} style={{ marginRight: '8px' }} />
              VYBRANÁ PRÁCE
            </div>
            <h2 className="section-title-pro">Případové <span className="text-pro-gradient">studie</span></h2>
            <p className="projects-desc-pro">
              Ukázky toho, jak měním složité problémy na elegantní digitální produkty, 
              které přinášejí reálné výsledky.
            </p>
          </div>
        </ScrollReveal>

        {/* --- HLAVNÍ PROJEKT (SHOWCASE) --- */}
        {featuredProject && (
          <ScrollReveal direction="up" delay={0.2}>
            <div className="featured-card-pro">
              <div className="featured-content-pro">
                <div className="featured-badge-pro">
                  <Star size={14} className="star-icon-pro" /> Vlajkový projekt
                </div>
                <h3 className="featured-title-pro">{featuredProject.title}</h3>
                <p className="featured-text-pro">{featuredProject.shortDesc}</p>
                
                <div className="tech-stack-pro">
                  {featuredProject.tech.slice(0, 4).map(t => (
                    <span key={t} className="tech-tag-pro">{t}</span>
                  ))}
                </div>

                <button 
                  className="btn-pro btn-indigo"
                  onClick={() => navigate(`/project/${featuredProject.id}`)}
                >
                  Prohlédnout Case Study <ArrowRight size={18} />
                </button>
              </div>

              <div 
                className="featured-image-wrapper-pro"
                onClick={() => navigate(`/project/${featuredProject.id}`)}
              >
                <div className="indigo-overlay-pro"></div>
                <img src={featuredProject.image} alt={featuredProject.title} loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ODDĚLOVAČ A PŘEPÍNAČ */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="projects-filter-wrapper-pro">
            <h3 className="filter-title-pro">Projekty</h3>
            <div className="tabs-pro">
              <button 
                className={`tab-btn-pro ${activeTab === 'web' ? 'active' : ''}`}
                onClick={() => setActiveTab('web')}
              >
                <Monitor size={16} />
                <span>Weby</span>
              </button>
              <button 
                className={`tab-btn-pro ${activeTab === 'video' ? 'active' : ''}`}
                onClick={() => setActiveTab('video')}
              >
                <Video size={16} />
                <span>Video</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* GRID OSTATNÍCH PROJEKTŮ - ZDE JE KOUZLO S INDEXEM */}
        <div className="projects-grid-pro">
          {filteredProjects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              direction="up" 
              delay={0.1 + index * 0.15} // Každá další karta má o 0.15s větší zpoždění
            >
              <div className="project-card-pro" onClick={() => navigate(`/project/${project.id}`)}>
                <div className="card-image-pro">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="card-overlay-pro">
                    <span className="overlay-btn-pro">
                      {activeTab === 'video' ? 'Přehrát video' : 'Zobrazit detail'}
                    </span>
                  </div>
                </div>

                <div className="card-content-pro">
                  <span className="card-category-pro">{project.category}</span>
                  <h3 className="card-title-pro">{project.title}</h3>
                  <p className="card-desc-pro">{project.shortDesc}</p>
                  
                  <div className="card-footer-pro">
                    <div className="card-tech-pro">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="tech-tag-pro">{t}</span>
                      ))}
                    </div>
                    <div className="arrow-circle-pro">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;