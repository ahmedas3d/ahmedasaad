import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CodeElement {
  id: number;
  text: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  color: string;
}

const FloatingCode: React.FC = () => {
  const [codeElements] = useState<CodeElement[]>(() => {
    const codeSnippets = [
      'class FlutterApp {}',
      'Widget build()',
      'setState(() => {})',
      'Future<void>',
      'MaterialApp()',
      'Scaffold()',
      'Container()',
      'Column()',
      'Row()',
      'Text()',
      'final String',
      'async/await',
      'Navigator.push()',
      'Provider<T>',
      'StreamBuilder',
      'FutureBuilder',
      'dispose()',
      'initState()',
      'build(context)',
      'ThemeData()',
    ];

    const colors = [
      '#FF1744', // Tech Red
      '#00BCD4', // Cyber Blue
      '#00E676', // Matrix Green
      '#9C27B0', // Purple
      '#FF9800', // Orange
    ];

    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {codeElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute font-code text-xs opacity-5 font-medium"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            color: element.color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 3, -3, 0],
            scale: [1, 1.05, 0.95, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {element.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCode;