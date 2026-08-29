import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Layout, Server, Cloud, Video, ArrowRight, Star } from 'lucide-react';
import { ProjectsData } from '../../data/projectsData';
import ScrollReveal from '../ui/RevealOnScroll';
import './Projects.css';

const TABS = [
  { id: 'all', label: 'Všechny projekty', icon: Layers },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'saas', label: 'SaaS aplikace', icon: Cloud },
  { id: 'video', label: 'Video & Motion', icon: Video },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  // Chytrá filtrační logika adaptovaná na strukturu tvojich dat
  const matchesFilter = (project, tab) => {
    if (tab === 'all') return true;

    const category = (project.category || '').toLowerCase();
    const role = (project.role || '').toLowerCase();
    const type = (project.type || '').toLowerCase();
    const tech = (project.tech || []).map(t => t.toLowerCase());

    switch (tab) {
      case 'frontend':
        return type === 'web' || role.includes('frontend') || role.includes('full-stack');

      case 'backend': {
        const backendTechKeywords = ['python', 'django', 'prisma', 'postgresql', 'neon', 'sqlite', 'node', 'express'];
        const hasBackendTech = tech.some(t => backendTechKeywords.some(kw => t.includes(kw)));
        return role.includes('backend') || role.includes('full-stack') || hasBackendTech;
      }

      case 'saas':
        return category.includes('saas') || type === 'saas';

      case 'video':
        return type === 'video' || category.includes('video') || category.includes('střih');

      default:
        return true;
    }
  };

  // Hlavní / doporučený projekt
  const featuredProject = ProjectsData.find(project => project.isFeatured) || ProjectsData[0];
  const isFeaturedVisible = featuredProject && matchesFilter(featuredProject, activeTab);

  // Vyfiltrované projekty
  const filteredProjects = ProjectsData.filter(
    project => matchesFilter(project, activeTab) && project.id !== featuredProject?.id
  );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-ambient-glow" />

      <div className="container projects-container">
        
        {/* Hlavička */}
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

        {/* Přepínač kategorií */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="projects-tabs-pro">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-btn-pro ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Featured Projekt */}
        {isFeaturedVisible && (
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

        {/* Mřížka projektů */}
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