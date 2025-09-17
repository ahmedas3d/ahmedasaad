import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40 h-1 bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary-red via-tech-blue to-tech-green shadow-glow"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Terminal-style progress indicator */}
      <motion.div
        className="absolute right-4 top-3 text-xs font-code text-light-text dark:text-dark-text bg-light-bg/90 dark:bg-dark-bg/90 px-2 py-1 rounded backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {Math.round(scrollProgress)}%
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;