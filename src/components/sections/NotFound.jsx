import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFound.css'; // Vytvoříme níže

const NotFound = () => {
  return (
    <div className="not-found-wrapper fade-in-content">
      <div className="ambient-glow">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Jejda, zabloudili jste!</h2>
        <p className="error-desc">
          Stránka, kterou hledáte, se pravděpodobně přesunula do jiné dimenze, nebo nikdy neexistovala.
        </p>
        
        {/* Používáme Link z React Routeru pro plynulý návrat */}
        <Link to="/" className="btn-back-home">
          <Home size={20} />
          Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
};

export default NotFound;