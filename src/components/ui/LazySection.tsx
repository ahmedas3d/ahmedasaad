import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const DefaultFallback: React.FC = () => (
  <div className="flex items-center justify-center h-64 w-full">
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-2 h-8 bg-red-500 rounded-full"
        animate={{ scaleY: [1, 0.3, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-2 h-8 bg-red-400 rounded-full"
        animate={{ scaleY: [1, 0.3, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-2 h-8 bg-red-300 rounded-full"
        animate={{ scaleY: [1, 0.3, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
      />
      <span className="ml-4 text-gray-400 text-sm font-code">Loading...</span>
    </motion.div>
  </div>
);

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <DefaultFallback />
}) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
);

export default LazySection;