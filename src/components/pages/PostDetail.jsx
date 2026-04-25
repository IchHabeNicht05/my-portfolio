import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi'
import { BLOG_POSTS } from '../../data/blogData';
import './PostDetail.css';


const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS[id];

  // Ošetření neexistujícího článku a scroll nahoru při načtení
  useEffect(() => {
    if (!post) {
      navigate('/');
    } else {
      window.scrollTo(0, 0);
    }
  }, [post, navigate]);

  if (!post) return null;

  // Funkce pro dynamické barvy tagů stejné jako v Insights
  const getTagClass = (tag) => {
    switch (tag.toLowerCase()) {
      case 'tech': return 'tag-tech';
      case 'design': return 'tag-design';
      case 'performance': return 'tag-performance';
      default: return 'tag-default';
    }
  };

  return (
    <motion.div 
      className="post-detail-page fade-in-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="ambient-glow post-ambient">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="container-read">
        {/* Tlačítko zpět */}
        <button className="back-link" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Zpět
        </button>

        {/* Hlavička článku */}
        <header className="post-header">
          <div className="post-meta-top">
            <span className={`insight-tag ${getTagClass(post.tag)}`}>{post.tag}</span>
            <div className="post-stats">
              <span><FiCalendar /> {post.date}</span>
              <span><FiClock /> {post.readTime}</span>
            </div>
          </div>
          
          <h1>{post.title}</h1>
          
          <div className="author-bar">
            <div className="author-avatar-placeholder"></div> {/* Nahraď <img> tagem s tvou fotkou */}
            <div className="author-info">
              <p className="author-name">{post.author}</p>
              <p className="author-role">{post.role}</p>
            </div>
          </div>
        </header>

        {/* Hlavní obsah článku */}
        <article 
          className="post-content" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Konverzní patička (CTA) */}
        <footer className="post-footer">
          <div className="post-cta">
            <h3>Líbí se vám tento přístup?</h3>
            <p>Můžeme probrat, jak tyto technologie a postupy aplikovat přímo na vašem projektu a posunout ho na další úroveň.</p>
            <button className="btn-primary" onClick={() => navigate('/#contact')}>
              Pojďme to probrat
            </button>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default PostDetail;