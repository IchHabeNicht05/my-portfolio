import React, { useState } from 'react';
import './Dock.css';
import { 
  Home, User, Briefcase, Award, Sparkles, Star, MessageSquare, Mail, 
  Menu
} from 'lucide-react';

const DOCK_ITEMS = [
  { id: 'hero', icon: Home, label: 'Domů', href: '#' },
  { id: 'about', icon: User, label: 'O mně', href: '#about' },
  { id: 'experience', icon: Award, label: 'Zkušenosti', href: '#experience' },
  { id: 'projects', icon: Briefcase, label: 'Projekty', href: '#projects' },
  { id: 'services', icon: Sparkles, label: 'Služby', href: '#services' },
  { id: 'reviews', icon: Star, label: 'Recenze', href: '#reviews'},
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
        onClick={() => setIsOpen(!isOpen)} // Pro podporu na mobilu (kliknutí)
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