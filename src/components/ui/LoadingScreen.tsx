import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getOptimalLoadingTime,
  generateLoadingSteps,
  markUserVisited,
  measureLoadingPerformance,
  detectUserPreferences
} from "../../utils/smartTiming";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [userSkipped, setUserSkipped] = useState(false);

  // Smart timing configuration
  const timingConfig = getOptimalLoadingTime();
  const loadingSteps = generateLoadingSteps(timingConfig);
  const userPrefs = detectUserPreferences();

  // Handle skip functionality
  const handleSkip = () => {
    setUserSkipped(true);
    markUserVisited();
    onComplete();
  };

  // Handle typing completion
  const handleTypingComplete = () => {
    // Trigger completion immediately when typing is done
    setIsComplete(true);
    markUserVisited();
    setTimeout(onComplete, 300); // Brief delay for smooth transition
  };

  useEffect(() => {
    const performanceMeasure = measureLoadingPerformance();
    let currentStepIndex = 0;
    let progressAnimation: NodeJS.Timeout;
    let skipTimer: NodeJS.Timeout | undefined;

    // Show skip option after appropriate time (not for reduced motion users)
    if (!userPrefs.reducedMotion) {
      skipTimer = setTimeout(() => {
        if (!isComplete && !userSkipped) {
          setShowSkip(true);
        }
      }, Math.max(2500, timingConfig.phases.intro + timingConfig.phases.loading * 0.6));
    }

    // Show code animation based on user preferences
    const codeAnimationDelay = userPrefs.reducedMotion ? 100 : timingConfig.phases.intro * 0.5;
    setTimeout(() => setShowCode(true), codeAnimationDelay);

    // Execute loading phases
    const executeLoadingSteps = () => {
      if (currentStepIndex < loadingSteps.length && !userSkipped) {
        const step = loadingSteps[currentStepIndex];
        setCurrentStep(step.label);

        // Calculate progress animation
        const startProgress = currentStepIndex === 0 ? 0 : loadingSteps[currentStepIndex - 1].targetProgress;
        const progressDiff = step.targetProgress - startProgress;
        const progressIncrement = progressDiff / (step.duration / 50);
        let currentProgress = startProgress;

        progressAnimation = setInterval(() => {
          currentProgress += progressIncrement;
          setProgress(Math.min(currentProgress, step.targetProgress));

          if (currentProgress >= step.targetProgress) {
            clearInterval(progressAnimation);
            currentStepIndex++;

            if (currentStepIndex < loadingSteps.length) {
              // Move to next step with smooth transition
              setTimeout(executeLoadingSteps, 100);
            } else {
              // All steps complete - start completion phase
              setTimeout(() => {
                setIsComplete(true);
                markUserVisited();
                performanceMeasure.finish();
                setTimeout(onComplete, timingConfig.phases.transition);
              }, timingConfig.phases.completion * 0.3);
            }
          }
        }, 50);
      }
    };

    // Start loading sequence after intro phase
    setTimeout(executeLoadingSteps, timingConfig.phases.intro);

    // Cleanup function
    return () => {
      if (progressAnimation) clearInterval(progressAnimation);
      if (skipTimer) clearTimeout(skipTimer);
    };
  }, [onComplete, timingConfig, loadingSteps, userPrefs, isComplete, userSkipped]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900
                     flex items-center justify-center z-50 overflow-hidden"
        >
          {/* Background Tech Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 gap-4 h-full animate-pulse">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-red-500 rounded-lg"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: "3s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Loading Content */}
          <div className="text-center z-10 max-w-md mx-auto px-6">
            {/* Flutter-inspired Logo Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.6,
              }}
              className="mb-8"
            >
              <div className="relative w-20 h-20 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-full h-full border-4 border-red-500 border-t-transparent rounded-full"
                />
                <div className="absolute inset-2 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AA</span>
                </div>
              </div>
            </motion.div>

            {/* Developer Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Ahmed Asaad
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-red-300 text-lg mb-8"
            >
              Flutter Developer
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mb-6"
            >
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-300 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Progress Info */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-mono">
                  {Math.round(progress)}%
                </span>
                <span className="text-red-300 font-code text-xs">
                  {currentStep}
                </span>
              </div>
            </motion.div>

            {/* Flutter Code Animation */}
            <AnimatePresence>
              {showCode && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-mono text-xs text-left bg-gray-800
                             rounded-lg p-4 border border-gray-700 overflow-hidden"
                >
                  <TypewriterCode onTypingComplete={handleTypingComplete} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tech Icons */}
            <motion.div
              className="flex justify-center space-x-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {["F", "D", "FB", "R", "TS"].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-400
                             rounded-lg flex items-center justify-center text-white
                             text-xs font-bold shadow-lg"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: progress > index * 20 ? 1 : 0.3,
                    rotate: progress > index * 20 ? 360 : 0,
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skip Button - Only show for users without reduced motion preferences */}
          {showSkip && !userSkipped && !userPrefs.reducedMotion && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSkip}
              className="absolute bottom-8 right-8 text-gray-400 hover:text-white
                         text-sm underline transition-all duration-200 font-code
                         bg-black bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm
                         border border-gray-600 hover:border-red-500"
            >
              Skip intro →
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Fast Typewriter Code Component
interface TypewriterCodeProps {
  onTypingComplete?: () => void;
}

const TypewriterCode: React.FC<TypewriterCodeProps> = ({ onTypingComplete }) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const codeSnippet = `class Portfolio extends StatelessWidget {
  @override
  Widget build(context) {
    return MaterialApp(
      home: AhmedAsaadProfile(),
      theme: ThemeData.dark(),
    );
  }
}`;  // Flutter Portfolio Code

  useEffect(() => {
    let index = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (index < codeSnippet.length) {
        setDisplayedCode(codeSnippet.slice(0, index + 1));
        index++;

        // Variable typing speed for more realistic effect
        const char = codeSnippet[index - 1];
        let delay = 30; // Base speed

        // Slower for punctuation and spaces to simulate natural typing
        if (char === ' ') delay = 80;
        else if (['.', '(', ')', '{', '}', ';', ','].includes(char)) delay = 120;
        else if (char === '\n') delay = 200;

        timeoutId = setTimeout(typeNextCharacter, delay);
      } else {
        setIsTypingComplete(true);
        // Call the completion callback after a brief delay
        setTimeout(() => {
          onTypingComplete?.();
        }, 800);
      }
    };

    // Start typing after a small delay
    timeoutId = setTimeout(typeNextCharacter, 200);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onTypingComplete, codeSnippet]);

  const highlightSyntax = (code: string) => {
    return code
      .replace(/(class|extends|Widget|@override|return)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(StatelessWidget|MaterialApp|ThemeData)/g, '<span class="text-purple-400">$1</span>')
      .replace(/(build|dark)/g, '<span class="text-yellow-400">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="text-green-300">$1</span>');
  };

  return (
    <div className="text-green-400">
      <pre className="whitespace-pre-wrap text-xs">
        <span
          dangerouslySetInnerHTML={{
            __html: highlightSyntax(displayedCode)
          }}
        />
        {!isTypingComplete && (
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-white"
          >
            |
          </motion.span>
        )}
      </pre>
    </div>
  );
};

export default LoadingScreen;
