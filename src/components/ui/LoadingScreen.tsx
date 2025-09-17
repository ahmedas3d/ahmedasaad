import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const bootSequence = useMemo(() => [
    'Initializing Ahmed Portfolio System...',
    'Loading Flutter Developer Profile...',
    'Connecting to GitHub repositories...',
    'Scanning project database...',
    'Loading skill matrix...',
    'Initializing tech stack...',
    'Compiling 5 mobile applications...',
    'Setting up Firebase connections...',
    'Loading Clean Architecture patterns...',
    'Activating Bloc state management...',
    'Portfolio system ready!',
    'Welcome to Ahmed Asaad\'s Developer Portfolio'
  ], []);

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const currentText = bootSequence[currentLine];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setDisplayText(currentText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setDisplayText('');
          }, 500);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    } else {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, [currentLine, onComplete, bootSequence]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-dark-bg-terminal text-tech-green font-code flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Background Pattern */}
      <div className="absolute inset-0 bg-circuit opacity-10"></div>

      {/* Main Terminal Window */}
      <div className="terminal w-full max-w-4xl mx-4">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-title font-header">
            Ahmed Portfolio Terminal v1.0.0
          </div>
          <div className="terminal-controls">
            <div className="terminal-control close"></div>
            <div className="terminal-control minimize"></div>
            <div className="terminal-control maximize"></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body min-h-[400px]">
          {/* Boot Sequence Lines */}
          {bootSequence.slice(0, currentLine).map((line, index) => (
            <motion.div
              key={index}
              className="terminal-line"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">{line}</span>
              <span className="text-tech-green ml-2">✓</span>
            </motion.div>
          ))}

          {/* Current Typing Line */}
          {currentLine < bootSequence.length && (
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">
                {displayText}
                {showCursor && <span className="terminal-cursor"></span>}
              </span>
            </div>
          )}

          {/* Loading Animation */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            {/* Progress Bar */}
            <div className="w-64 h-2 bg-dark-bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-red to-tech-blue"
                initial={{ width: 0 }}
                animate={{ width: `${(currentLine / bootSequence.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Loading Percentage */}
            <div className="text-dark-text-muted text-sm">
              {Math.round((currentLine / bootSequence.length) * 100)}% Complete
            </div>

            {/* Tech Icons Animation */}
            <div className="flex space-x-4 mt-6">
              {['Flutter', 'Dart', 'Firebase', 'React', 'TypeScript'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="w-8 h-8 bg-primary-red rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: currentLine > index * 2 ? 1 : 0,
                    rotate: currentLine > index * 2 ? 360 : 0
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {tech[0]}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ASCII Art - Ahmed's Logo */}
          {currentLine >= bootSequence.length - 2 && (
            <motion.div
              className="mt-8 text-center text-primary-red text-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <pre className="font-code leading-tight">
{`
    █████╗ ██╗  ██╗███╗   ███╗███████╗██████╗
   ██╔══██╗██║  ██║████╗ ████║██╔════╝██╔══██╗
   ███████║███████║██╔████╔██║█████╗  ██║  ██║
   ██╔══██║██╔══██║██║╚██╔╝██║██╔══╝  ██║  ██║
   ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██████╔╝
   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═════╝

        Flutter Developer | Mobile Expert
`}
              </pre>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Status */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-dark-text-muted text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p>Powered by React + TypeScript + Tailwind CSS</p>
        <p className="text-xs mt-1">Ahmed Asaad © 2024</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;