import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';
import SimpleLoadingScreen from './components/ui/SimpleLoadingScreen';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Layout from './components/layout/Layout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Resume = lazy(() => import('./pages/Resume'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500" />
  </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);

    // Preload critical assets after loading completes
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = '/assets/images/profile/ahmed-profile-main.jpg';
    preloadLink.as = 'image';
    document.head.appendChild(preloadLink);
  };

  if (isLoading) {
    return <SimpleLoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="App relative min-h-screen">
          <Router>
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:projectId" element={<ProjectDetail />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </Layout>
          </Router>

          {/* Background Tech Pattern */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
          </div>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;