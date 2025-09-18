import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';
import LoadingScreen from './components/ui/LoadingScreen';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import { preloadCriticalAssets, measureLoadingPerformance } from './utils/assetPreloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsPreloaded, setAssetsPreloaded] = useState(false);

  useEffect(() => {
    const performanceMeasure = measureLoadingPerformance();

    // Start preloading critical assets immediately
    preloadCriticalAssets()
      .then(() => {
        setAssetsPreloaded(true);
        performanceMeasure.finish();
      })
      .catch(() => {
        // Even if preloading fails, don't block the app
        setAssetsPreloaded(true);
        performanceMeasure.finish();
      });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="App relative min-h-screen">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
          ) : (
            <Router key="app">
              <Layout>
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:projectId" element={<ProjectDetail />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
                </AnimatePresence>
              </Layout>
            </Router>
          )}
        </AnimatePresence>

        {/* Background Tech Pattern */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;