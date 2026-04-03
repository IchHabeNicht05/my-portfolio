import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Zablokuje scrollování stránky, když je modal otevřený
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        {/* Horní část - obrázek nebo gradient */}
        <div className="modal-header" style={{ background: project.gradient || '#333' }}>
          <project.icon size={60} className="modal-icon" />
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-desc">{project.description}</p>
          
          <div className="modal-tags">
            {['React', 'CSS', 'Node.js'].map(tag => ( // Tady bys bral tagy z dat
              <span key={tag} className="modal-tag">{tag}</span>
            ))}
          </div>

          <div className="modal-actions">
            <button className="btn btn-primary"><ExternalLink size={18} /> Live Demo</button>
            <button className="btn btn-secondary"><Github size={18} /> Zdrojový kód</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;