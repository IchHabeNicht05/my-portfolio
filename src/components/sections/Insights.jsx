import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { BookOpen } from 'lucide-react';
import { posts } from '../../data/post';
import './Insights.css';

const getTagClass = (tag) => {
  switch (tag.toLowerCase()) {
    case 'tech': return 'tag-tech';
    case 'design': return 'tag-design';
    case 'performance': return 'tag-performance';
    case 'architecture': return 'tag-architecture';
    case 'css': return 'tag-css';
    case 'ux': return 'tag-ux';
    default: return 'tag-default';
  }
};

const Insights = () => {
  const navigate = useNavigate();

  return (
    <section id="insights" className="insights-section">
      <div className="container">
        
        {/* Hlavička sekce */}
        <div className="insights-intro">
            <p className="p-label">
                <BookOpen size={16} /> 
                My Thoughts
            </p>
            <h2 className="p-main-title">Digital <span>Garden</span></h2>
            <p className="p-sub-desc">
                Zápisky o technologiích, designu a výkonu, které mi zrovna rostou pod rukama.
            </p>
        </div>

        {/* Grid s články */}
        <div className="insights-grid">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id} 
              className="insight-card"
              onClick={() => navigate(`/insight/${post.id}`)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                ease: [0.23, 1, 0.32, 1] 
              }}
            >
              {/* Opravené meta informace (bez divných bloků) */}
              <div className="insight-meta">
                <span className={`insight-tag ${getTagClass(post.tag)}`}>
                  {post.tag}
                </span>
                <span className="insight-date">{post.date}</span>
              </div>
              
              <h3 className="insight-title">{post.title}</h3>
              
              <div className="insight-link">
                <span>Číst více</span>
                <FiArrowUpRight className="link-icon" />
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Insights;