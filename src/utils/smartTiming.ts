// Smart Loading Timing System
export interface UserPreferences {
  reducedMotion: boolean;
  slowConnection: boolean;
  isReturningVisitor: boolean;
  isMobile: boolean;
}

export interface TimingConfig {
  total: number;
  phases: {
    intro: number;
    loading: number;
    completion: number;
    transition: number;
  };
}

// Detect user preferences
export const detectUserPreferences = (): UserPreferences => {
  const preferences = {
    // Check if user prefers reduced motion
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,

    // Check connection speed (if available)
    slowConnection: (navigator as any).connection?.effectiveType === 'slow-2g' ||
                   (navigator as any).connection?.effectiveType === '2g',

    // Check if user is returning visitor
    isReturningVisitor: localStorage.getItem('portfolio-visited') === 'true',

    // Check if mobile device
    isMobile: window.innerWidth < 768
  };

  return preferences;
};

// Get optimal loading time based on user preferences
export const getOptimalLoadingTime = (): TimingConfig => {
  const prefs = detectUserPreferences();

  // Quick mode for development/demo - always fast completion
  const quickMode = true; // Set to false for production timing

  if (quickMode) {
    return {
      total: 7000,
      phases: {
        intro: 1200,
        loading: 4800,
        completion: 800,
        transition: 200
      }
    };
  }

  // Accessibility: Quick for reduced motion
  if (prefs.reducedMotion) {
    return {
      total: 1800,
      phases: {
        intro: 400,
        loading: 1000,
        completion: 300,
        transition: 100
      }
    };
  }

  // Performance: Shorter for slow connections
  if (prefs.slowConnection) {
    return {
      total: 2500,
      phases: {
        intro: 500,
        loading: 1500,
        completion: 400,
        transition: 100
      }
    };
  }

  // UX: Shorter for returning users
  if (prefs.isReturningVisitor) {
    return {
      total: 2800,
      phases: {
        intro: 500,
        loading: 1700,
        completion: 500,
        transition: 100
      }
    };
  }

  // Mobile: Slightly shorter attention span
  if (prefs.isMobile) {
    return {
      total: 3400,
      phases: {
        intro: 600,
        loading: 2100,
        completion: 600,
        transition: 100
      }
    };
  }

  // Desktop: Full professional experience for first-time users
  return {
    total: 3800,
    phases: {
      intro: 600,
      loading: 2500,
      completion: 600,
      transition: 100
    }
  };
};

// Calculate optimal loading steps based on timing
export const generateLoadingSteps = (timing: TimingConfig) => {
  const stepDuration = timing.phases.loading / 4;

  return [
    {
      label: 'Initializing Flutter Environment...',
      duration: stepDuration * 0.8,
      targetProgress: 25
    },
    {
      label: 'Loading Portfolio Data...',
      duration: stepDuration * 1.1,
      targetProgress: 50
    },
    {
      label: 'Compiling Projects...',
      duration: stepDuration * 1.0,
      targetProgress: 80
    },
    {
      label: 'Ready to Launch!',
      duration: stepDuration * 0.9,
      targetProgress: 100
    }
  ];
};

// Mark user as visited
export const markUserVisited = () => {
  localStorage.setItem('portfolio-visited', 'true');
};

// Performance measurement
export const measureLoadingPerformance = () => {
  const startTime = performance.now();

  return {
    finish: () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      console.log(`🎯 Smart Loading completed in ${duration.toFixed(2)}ms`);

      // Log user experience metrics
      const prefs = detectUserPreferences();
      console.log('📊 User Profile:', {
        reducedMotion: prefs.reducedMotion,
        slowConnection: prefs.slowConnection,
        returning: prefs.isReturningVisitor,
        mobile: prefs.isMobile
      });

      return duration;
    }
  };
};