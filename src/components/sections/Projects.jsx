import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Monitor, Video, ArrowRight, Star, Sparkles } from 'lucide-react';
import { ProjectsData } from '../../data/projectsData';
import ScrollReveal from '../ui/RevealOnScroll';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const navigate = useNavigate();

  // Hlavní / doporučený projekt
  const featuredProject = ProjectsData.find(project => project.isFeatured) || ProjectsData[0];
  
  // Vyfiltrované projekty podle vybrané záložky (mimo featured)
  const filteredProjects = ProjectsData.filter(
    project => (activeTab === 'all' || project.type === activeTab) && project.id !== featuredProject?.id
  );

  return (
    <section id="projects" className="projects-section">
      {/* Ambientní fialovo-jantarová záře na pozadí */}
      <div className="projects-ambient-glow" />

      <div className="container projects-container">
        
        {/* Hlavička sekce */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="projects-header-pro">
            <h2 className="section-title-pro">
              Případové <span className="ember-text-gradient">studie</span>
            </h2>
            <p className="projects-desc-pro">
              Ukázky toho, jak měním složité problémy na elegantní digitální produkty, 
              které přinášejí reálné výsledky a špičkový uživatelský zážitek.
            </p>
          </div>
        </ScrollReveal>

        {/* Přepínač kategorií / Taktilní záložky */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="projects-tabs-pro">
            <button 
              className={`tab-btn-pro ${activeTab === 'web' ? 'active' : ''}`}
              onClick={() => setActiveTab('web')}
            >
              <Monitor size={15} />
              <span>Webové aplikace</span>
            </button>
            
            <button 
              className={`tab-btn-pro ${activeTab === 'video' ? 'active' : ''}`}
              onClick={() => setActiveTab('video')}
            >
              <Video size={15} />
              <span>Video & Motion</span>
            </button>

            <button 
              className={`tab-btn-pro ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <Layers size={15} />
              <span>Všechny projekty</span>
            </button>
          </div>
        </ScrollReveal>

        {/* FEATURING SHOWCASE (Hlavní projekt) */}
        {featuredProject && (activeTab === 'all' || featuredProject.type === activeTab) && (
          <ScrollReveal direction="up" delay={0.25}>
            <div 
              className="featured-card-pro"
              onClick={() => navigate(`/project/${featuredProject.id}`)}
            >
              <div className="featured-badge-top">
                <Star size={12} className="star-icon" />
                <span>Hlavní případová studie</span>
              </div>

              <div className="featured-image-wrapper-pro">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title} 
                  loading="lazy" 
                />
                <div className="image-overlay-pro" />
              </div>

              <div className="featured-content-pro">
                <span className="card-category-pro">{featuredProject.category}</span>
                <h3 className="featured-title-pro">{featuredProject.title}</h3>
                <p className="featured-desc-pro">{featuredProject.shortDesc || featuredProject.description}</p>
                
                <div className="card-tech-pro">
                  {featuredProject.tech?.map((t) => (
                    <span key={t} className="tech-tag-pro">{t}</span>
                  ))}
                </div>

                <div className="featured-cta-btn">
                  <span>Prozkoumat projekt</span>
                  <div className="arrow-circle-pro">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* MŘÍŽKA PROJEKTŮ */}
        <div className="projects-grid-pro">
          {filteredProjects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              direction="up" 
              delay={0.1 + (index % 3) * 0.1}
            >
              <div 
                className="project-card-pro" 
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="card-image-pro">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="card-overlay-pro">
                    <span className="overlay-btn-pro">
                      {project.type === 'video' ? 'Přehrát ukázku' : 'Detail projektu'}
                    </span>
                  </div>
                </div>

                <div className="card-content-pro">
                  <div className="card-top-row">
                    <span className="card-category-pro">{project.category}</span>
                  </div>
                  
                  <h3 className="card-title-pro">{project.title}</h3>
                  <p className="card-desc-pro">{project.shortDesc}</p>
                  
                  <div className="card-footer-pro">
                    <div className="card-tech-pro">
                      {project.tech?.slice(0, 3).map((t) => (
                        <span key={t} className="tech-tag-pro">{t}</span>
                      ))}
                    </div>

                    <div className="arrow-circle-pro">
                      <ArrowRight size={15} />
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