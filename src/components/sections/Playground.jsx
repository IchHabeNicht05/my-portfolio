import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiHexagon, FiZap, FiBox, FiTarget, FiLayers, FiActivity, FiMousePointer } from 'react-icons/fi';
import './Playground.css';

// --- EXPERIMENTY ---

const LiquidVisual = () => (
  <div className="visual-area">
    <motion.div
      className="liquid-blob"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 90, 180, 0],
        borderRadius: ["40% 60% 70% 30%", "50% 50% 20% 80%", "40% 60% 70% 30%"],
      }}
      transition={{ duration: 7, repeat: Infinity }}
    />
  </div>
);

const GlassVisual = () => (
  <div className="visual-area glass-bg">
    <div className="glass-object">
      <div className="glass-shine" />
    </div>
    <motion.div 
      className="glass-beam"
      animate={{ x: [-100, 100, -100] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  </div>
);

const InteractionVisual = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="visual-area" onClick={() => setActive(!active)}>
      <motion.div animate={{ scale: active ? 1.4 : 1, rotate: active ? 360 : 0 }} className="interaction-icon">
        <FiZap style={{ color: active ? '#22c55e' : 'inherit' }} />
      </motion.div>
      <p className="visual-hint">{active ? 'Aktivní' : 'Klikni na mě'}</p>
    </div>
  );
};

const MagneticTarget = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sX = useSpring(x, { stiffness: 150, damping: 15 });
  const sY = useSpring(y, { stiffness: 150, damping: 15 });
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  return (
    <div className="visual-area" onMouseMove={handleMove} onMouseLeave={() => {x.set(0); y.set(0)}}>
      <motion.div style={{ x: sX, y: sY }} className="magnetic-element"><FiTarget /></motion.div>
    </div>
  );
};

const TiltVisual = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useTransform(y, [-60, 60], [25, -25]);
  const rY = useTransform(x, [-60, 60], [-25, 25]);
  return (
    <div className="visual-area" onMouseMove={(e) => {
      const r = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - (r.left + r.width / 2));
      y.set(e.clientY - (r.top + r.height / 2));
    }} onMouseLeave={() => {x.set(0); y.set(0)}}>
      <motion.div style={{ rotateX: rX, rotateY: rY, perspective: 800 }} viewport={{ once: true }} className="tilt-card-mini"><FiLayers /></motion.div>
    </div>
  );
};

const PulseVisual = () => (
  <div className="visual-area pulse-container">
    {[...Array(5)].map((_, i) => (
      <motion.div key={i} className="pulse-bar" animate={{ height: [20, 60, 20] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }} viewport={{ once: true }} />
    ))}
  </div>
);

const experiments = [
  { id: 1, icon: <FiHexagon />, tech: "Framer Motion", title: "Liquid Hover", desc: "Experiment s deformačními keyframy a organickou SVG fyzikou.", visual: <LiquidVisual /> },
  { id: 2, icon: <FiBox />, tech: "3D Reflection", title: "Glass Physics", desc: "Simulace lomu světla a odrazů na skleněném povrchu.", visual: <GlassVisual /> },
  { id: 3, icon: <FiZap />, tech: "State Logic", title: "Micro-interactions", desc: "Plynulé přechody stavů ikon při uživatelské interakci.", visual: <InteractionVisual /> },
  { id: 4, icon: <FiTarget />, tech: "Spring Physics", title: "Magnetic Force", desc: "Výpočet magnetické přitažlivosti mezi kurzorem a elementem.", visual: <MagneticTarget /> },
  { id: 5, icon: <FiLayers />, tech: "3D Matrix", title: "Perspective Tilt", desc: "Dynamická rotace v prostoru založená na souřadnicích myši.", visual: <TiltVisual /> },
  { id: 6, icon: <FiActivity />, tech: "Keyframe Loop", title: "Audio Pulse", desc: "Simulace zvukové frekvence pomocí asynchronních animací.", visual: <PulseVisual /> },
];

const Playground = () => {
  return (
    <section className="playground-section">
      <div className="container">
        <div className="playground-header">
          <p className="tagline">Digitální pískoviště</p>
          <h2 className="title">Labs <span>&</span> Playground</h2>
          <p className="desc">Místo, kde experimentuji s novými technologiemi, 3D a vizuálními efekty.</p>
        </div>

        <div className="playground-grid">
          {experiments.map((exp) => (
            <div key={exp.id} className="p-card">
              <div className="p-card-header">
                <div className="p-icon">{exp.icon}</div>
                <div>
                  <span className="p-tech">{exp.tech}</span>
                  <h3 className="p-title">{exp.title}</h3>
                </div>
              </div>
              <p className="p-desc">{exp.desc}</p>
              <div className="p-visual-box">{exp.visual}</div>
              <div className="p-footer"><FiMousePointer /> Interaguj</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Playground;