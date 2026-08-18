import React, { useState, useEffect } from 'react';
import './Dock.css';
import { 
  Home, 
  User, 
  Award, 
  Briefcase, 
  Layers, 
  Workflow,    
  HelpCircle,
  Star, 
  Mail, 
  MessageSquare, 
  Menu
} from 'lucide-react';

const DOCK_ITEMS = [
  { id: 'hero', icon: Home, label: 'Domů', href: '#' },
  { id: 'about', icon: User, label: 'O mně', href: '#about' },
  { id: 'experience', icon: Award, label: 'Zkušenosti', href: '#experience' },
  { id: 'projects', icon: Briefcase, label: 'Projekty', href: '#projects' },
  { id: 'services', icon: Layers, label: 'Služby', href: '#services' },
  { id: 'workflow', icon: Workflow, label: 'Workflow', href: '#workflow' },
  { id: 'faq', icon: HelpCircle, label: 'FAQ', href: '#faq' },
  { id: 'reviews', icon: Star, label: 'Recenze', href: '#reviews' },
  { id: 'contact', icon: Mail, label: 'Kontakt', href: '#contact' },
  { id: 'feedback', icon: MessageSquare, label: 'Feedback', href: '#feedback' },
];

const Dock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Zavření Docku při scrollování na mobilních zařízeních
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen && window.innerWidth <= 768) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="dock-wrapper">
      <nav 
        className={`dock-container ${isOpen ? 'expanded' : 'collapsed'}`}
        onTouchStart={() => setIsTouchDevice(true)}
        onMouseEnter={() => !isTouchDevice && setIsOpen(true)}
        onMouseLeave={() => !isTouchDevice && setIsOpen(false)}
      >
        
        {/* Obsah sbaleného Docku (Ikona Menu) */}
        <div 
          className="dock-collapsed-view"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Otevřít menu"
        >
          <Menu size={22} className="menu-icon" />
        </div>

        {/* Obsah rozbaleného Docku (Ikonky) */}
        <div className="dock-expanded-view">
          {DOCK_ITEMS.map((item) => (
            <a 
              key={item.id} 
              href={item.href} 
              className="dock-item"
              aria-label={item.label}
              onClick={() => setIsOpen(false)}
            >
              <div className="icon-wrapper">
                <item.icon size={19} />
              </div>
              <span className="dock-tooltip">{item.label}</span>
            </a>
          ))}
        </div>

      </nav>
    </div>
  );
};

export default Dock;