import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SimpleLoadingScreenProps {
  onLoadingComplete: () => void;
}

export const SimpleLoadingScreen: React.FC<SimpleLoadingScreenProps> = ({
  onLoadingComplete
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simple, fast loading - 2.5 seconds total
    const duration = 2500;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          // Quick transition
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (isComplete) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Simple Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-16 h-16 mx-auto bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">AS</span>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-2xl font-bold text-white mb-2"
        >
          Ahmed Asaad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-red-300 mb-8"
        >
          Flutter Developer
        </motion.p>

        {/* Simple Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="w-64 mx-auto"
        >
          <div className="w-full bg-gray-800 rounded-full h-1">
            <motion.div
              className="h-1 bg-red-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="text-gray-400 text-sm mt-3 font-mono">
            {Math.round(progress)}%
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SimpleLoadingScreen;