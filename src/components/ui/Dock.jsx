import React, { useState } from 'react';
import './Dock.css';
import { 
  Home, 
  User, 
  Award, 
  Briefcase, 
  Sparkles, 
  Layers, 
  Workflow,    
  HelpCircle,
  Star, 
  BookOpen,
  Mail, 
  MessageSquare, 
  Menu
} from 'lucide-react';

const DOCK_ITEMS = [
  { id: 'hero', icon: Home, label: 'Domů', href: '#' },
  { id: 'about', icon: User, label: 'O mně', href: '#about' },
  { id: 'experience', icon: Award, label: 'Zkušenosti', href: '#experience' },
  { id: 'projects', icon: Briefcase, label: 'Projekty', href: '#projects' },
  { id: 'playground', icon: Sparkles, label: 'Playground', href: '#playground' },
  { id: 'services', icon: Layers, label: 'Služby', href: '#services' },
  { id: 'workflow', icon: Workflow, label: 'Workflow', href: '#workflow' },
  { id: 'faq', icon: HelpCircle, label: 'FAQ', href: '#faq' },
  { id: 'reviews', icon: Star, label: 'Recenze', href: '#reviews'},
  { id: 'insights', icon: BookOpen, label: 'Insights', href: '#insights'},
  { id: 'contact', icon: Mail, label: 'Kontakt', href: '#contact' },
  { id: 'feedback', icon: MessageSquare, label: 'Feedback', href: '#feedback' },
];

const Dock = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dock-wrapper">
      <nav 
        className={`dock-container ${isOpen ? 'expanded' : 'collapsed'}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        
        {/* Obsah sbaleného Docku (Ikona Menu) */}
        <div className="dock-collapsed-view">
          <Menu size={24} className="menu-icon" />
        </div>

        {/* Obsah rozbaleného Docku (Ikonky) */}
        <div className="dock-expanded-view">
          {DOCK_ITEMS.map((item) => (
            <a 
              key={item.id} 
              href={item.href} 
              className="dock-item"
              aria-label={item.label}
            >
              <div className="icon-wrapper">
                <item.icon size={20} />
              </div>
              
              {/* Tooltip (bublina s textem) */}
              <span className="dock-tooltip">{item.label}</span>
            </a>
          ))}
        </div>

      </nav>
    </div>
  );
};

export default Dock;