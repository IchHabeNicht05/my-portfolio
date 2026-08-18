import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-bg-glow" />
      
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Jejda, zabloudili jste!</h2>
        <p className="error-desc">
          Stránka, kterou hledáte, se pravděpodobně přesunula do jiné dimenze nebo nikdy neexistovala.
        </p>
        
        <Link to="/" className="btn-back-home">
          <Home size={18} />
          <span>Zpět na hlavní stránku</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;