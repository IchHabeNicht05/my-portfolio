import React from 'react';
import { Gauge, Zap, TrendingUp, Cpu } from 'lucide-react';
import './ProjectMetrics.css';

const getMetricIcon = (type) => {
  switch (type) {
    case 'performance': return <Gauge size={18} />;
    case 'speed': return <Zap size={18} />;
    case 'business': return <TrendingUp size={18} />;
    default: return <Cpu size={18} />;
  }
};

const ProjectMetrics = ({ metrics }) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="project-metrics-wrapper">
      <span className="metrics-section-label">Měřitelný dopad & Výkon</span>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-header">
              <span className="metric-icon">
                {getMetricIcon(metric.type)}
              </span>
              <span className="metric-label">{metric.label}</span>
            </div>
            <div className="metric-value">{metric.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMetrics;