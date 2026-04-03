import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  CheckCircle, 
  Code2, 
  Briefcase, 
  LayoutTemplate 
} from 'lucide-react';
import { ProjectsData } from '../../data/projectsData'; // Uprav cestu
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectsData.find(p => p.id === parseInt(id) || p.id === id);

  // Vždy po načtení detailu odskrolujeme nahoru
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Projekt nenalezen</h2>
        <button onClick={() => navigate(-1)} className="btn-back">
          <ArrowLeft size={16} /> Zpět
        </button>
      </div>
    );
  }

  return (
    <section className="pd-section">
      <div className="pd-bg-glow" />

      <div className="pd-container relative-z">
        
        {/* Tlačítko Zpět (přesně jak jsi chtěl, pomocí historie) */}
        <div className="pd-top-bar">
          <button onClick={() => navigate(-1)} className="btn-back-ghost">
            <ArrowLeft size={16} /> Zpět
          </button>
        </div>

        {/* HERO OBRÁZEK (Ideálně široký coverImage, jinak fallback na image) */}
        {/*<div className="pd-hero-image-wrapper">
          <img 
            src={project.coverImage || project.image} 
            alt={project.title} 
            className="pd-hero-image" 
          />
        </div>*/}

        {/* DVOUSLOUPCOVÝ LAYOUT */}
        <div className="pd-layout-grid">
          
          {/* LEVÝ SLOUPEC: Hlavní obsah, texty, obrázky */}
          <div className="pd-main-content">
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-short-desc">{project.shortDesc}</p>
            
            <div className="pd-divider" />

            {/* VÝZVA (The Challenge) */}
            {project.challenge && (
              <div className="pd-text-block">
                <h3>Úvod a Výzva</h3>
                <p>{project.challenge}</p>
              </div>
            )}

            {/* ŘEŠENÍ (The Solution) */}
            {project.solution && (
              <div className="pd-text-block">
                <h3>Moje Řešení</h3>
                <p>{project.solution}</p>
              </div>
            )}

            {/* KLÍČOVÉ FUNKCE (Key Features) */}
            {project.features && project.features.length > 0 && (
              <div className="pd-features-section">
                <h3><LayoutTemplate size={20} className="text-primary" /> Klíčové vlastnosti</h3>
                <div className="pd-features-grid">
                  {project.features.map((feature, i) => (
                    <div key={i} className="pd-feature-card">
                      <CheckCircle size={16} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* PRAVÝ SLOUPEC: Detaily projektu a odkazy (Sticky) */}
          <div className="pd-sidebar">
            <div className="pd-sticky-card">
              
              <h3 className="pd-sidebar-title">Detaily projektu</h3>
              
              {/* Role */}
              {project.role && (
                <div className="pd-meta-item">
                  <div className="pd-meta-icon"><Briefcase size={16} /></div>
                  <div>
                    <span className="pd-meta-label">Moje role</span>
                    <span className="pd-meta-value">{project.role}</span>
                  </div>
                </div>
              )}

              {/* Použité technologie */}
              {project.tech && project.tech.length > 0 && (
                <div className="pd-meta-item">
                  <div className="pd-meta-icon"><Code2 size={16} /></div>
                  <div>
                    <span className="pd-meta-label">Technologie</span>
                    <div className="pd-tech-tags">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="pd-tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="pd-sidebar-divider" />

              {/* Tlačítka pro Live ukázku a GitHub */}
              <div className="pd-action-buttons">
                {/* project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary-link">
                    Ukázat živý web <ExternalLink size={18} />
                  </a>
                )*/}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-outline-link">
                    Zdrojový kód <Github size={18} />
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* ZÁVĚREČNÉ CTA (Call to Action) */}
        <div className="pd-cta-banner">
          <h2>Zaujal vás tento projekt?</h2>
          <p>Hledáte někoho, kdo by vytvořil něco podobného pro váš byznys?</p>
          <button onClick={() => navigate('/#kontakt')} className="btn-cta">
            Pojďme se pobavit o vašem nápadu
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;