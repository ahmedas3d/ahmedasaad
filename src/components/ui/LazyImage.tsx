import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  fallback,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || src);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };

    img.onerror = () => {
      setHasError(true);
      if (fallback) {
        setImageSrc(fallback);
        setIsLoaded(true);
      }
      onError?.();
    };

    img.src = src;
  }, [src, fallback, onLoad, onError]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-light-bg-secondary via-light-bg-tertiary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-tertiary dark:to-dark-bg-secondary"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      )}

      {/* Error state */}
      {hasError && !fallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-light-bg-secondary dark:bg-dark-bg-secondary">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-lg flex items-center justify-center">
              <span className="text-2xl">📷</span>
            </div>
            <span className="text-xs text-light-text-muted dark:text-dark-text-muted">
              Image not available
            </span>
          </div>
        </div>
      )}

      {/* Actual image */}
      <motion.img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default LazyImage;