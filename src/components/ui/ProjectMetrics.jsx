import React from 'react';
import './ProjectMetrics.css';

const CircularProgress = ({ score }) => {
  const radius = 32;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const numericScore = typeof score === 'number' ? score : parseInt(score, 10) || 0;
  const offset = circumference - (numericScore / 100) * circumference;

  return (
    <div className="metric-circle-wrapper">
      <svg className="metric-svg" viewBox="0 0 76 76">
        <circle className="metric-circle-bg" cx="38" cy="38" r={radius} strokeWidth={strokeWidth} />
        <circle
          className="metric-circle-progress"
          cx="38"
          cy="38"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="metric-value">{score}</span>
    </div>
  );
};

const ProjectMetrics = ({ metrics }) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="project-metrics-wrapper">
      <span className="metrics-section-label">Lighthouse Performance & Metrics</span>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-item">
            {metric.type === 'pill' ? (
              <div className="metric-pill">
                <span className="pill-dot" />
                <span className="pill-value">{metric.value}</span>
              </div>
            ) : (
              <CircularProgress score={metric.value} />
            )}
            <span className="metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMetrics;