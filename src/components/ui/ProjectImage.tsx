import React from 'react';
import { motion } from 'framer-motion';
import { getProjectPlaceholder } from '../../data/assets';

interface ProjectImageProps {
  projectKey: 'sportify' | 'homeFood' | 'newsHub' | 'scholarChat' | 'flowery';
  title: string;
  className?: string;
  showLetter?: boolean;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  projectKey,
  title,
  className = '',
  showLetter = true
}) => {
  const gradient = getProjectPlaceholder(projectKey);
  const letter = title.charAt(0);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradient }}
    >
      {/* Project Letter/Icon */}
      {showLetter && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl md:text-8xl font-bold text-white/90 select-none">
            {letter}
          </div>
        </motion.div>
      )}

      {/* Mobile App Frame Mockup */}
      <motion.div
        className="absolute bottom-4 right-4 w-12 h-20 bg-white/20 rounded-lg border border-white/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="w-full h-2 bg-white/40 rounded-t-lg"></div>
        <div className="p-1">
          <div className="w-full h-3 bg-white/30 rounded mb-1"></div>
          <div className="w-2/3 h-2 bg-white/25 rounded mb-1"></div>
          <div className="w-full h-2 bg-white/25 rounded mb-1"></div>
          <div className="w-3/4 h-2 bg-white/20 rounded"></div>
        </div>
      </motion.div>

      {/* Tech Stack Indicator */}
      <motion.div
        className="absolute top-4 left-4 px-2 py-1 bg-black/20 rounded-md backdrop-blur-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-xs text-white/90 font-code">Flutter</span>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1
          }}
        />
      </div>
    </div>
  );
};

export default ProjectImage;