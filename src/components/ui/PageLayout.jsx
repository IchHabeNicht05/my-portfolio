import { motion } from 'framer-motion';

const PageLayout = ({ children }) => {
  return (
    <motion.div
      // Výchozí stav (před zobrazením)
      initial={{ opacity: 0, y: 15 }} 
      // Stav po načtení
      animate={{ opacity: 1, y: 0 }}   
      // Stav při opouštění stránky
      exit={{ opacity: 0, y: -15 }}    
      // Plynulost animace
      transition={{ duration: 0.4, ease: "easeOut" }} 
    >
      {children}
    </motion.div>
  );
};

export default PageLayout;