// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: directions[direction].y, 
        x: directions[direction].x 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true, margin: "-60px" }} // Menší margin pro dřívější plynulejší náběh
      transition={{ 
        duration: 0.9, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Custom Apple/Raycast spring easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;