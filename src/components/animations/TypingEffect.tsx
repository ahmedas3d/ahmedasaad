import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  backSpeed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  prefix?: string;
  showCursor?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  speed = 100,
  backSpeed = 50,
  delay = 1000,
  loop = true,
  className = '',
  prefix = '',
  showCursor = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = texts[currentIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, backSpeed);
      } else {
        const nextIndex = loop ? (currentIndex + 1) % texts.length : currentIndex + 1;
        if (nextIndex < texts.length || loop) {
          setCurrentIndex(nextIndex % texts.length);
          setIsTyping(true);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, speed, backSpeed, delay, loop]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursorBlink(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {prefix}{displayText}
      {showCursor && (
        <motion.span
          className="inline-block w-0.5 h-1em bg-primary-red ml-1"
          animate={{ opacity: showCursorBlink ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </span>
  );
};

export default TypingEffect;