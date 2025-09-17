import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { FaCode, FaMoon, FaSun, FaBars, FaTimes, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleTheme, isDark } = useTheme();

  const navItems = [
    { name: 'Home', path: '/', section: 'hero' },
    { name: 'About', path: '/', section: 'about' },
    { name: 'Skills', path: '/', section: 'skills' },
    { name: 'Projects', path: '/', section: 'projects' },
    { name: 'Contact', path: '/', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.path === '/' && item.section) {
      scrollToSection(item.section);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-light-bg/95 dark:bg-dark-bg/95 backdrop-glass shadow-lg border-b border-light-border dark:border-dark-border'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/" onClick={() => scrollToSection('hero')} className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-red to-tech-blue rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-tech-green rounded-full animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-header font-bold text-light-text dark:text-dark-text">
                    {personalInfo.name.split(' ')[0]}
                    <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
                  </h1>
                  <p className="text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                    {personalInfo.title}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="nav-link font-code text-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <span className="text-tech-blue">&lt;</span>
                  {item.name}
                  <span className="text-tech-blue">/&gt;</span>
                </motion.button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Links */}
              <motion.a
                href="https://github.com/ahmedasaad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-light-text-muted dark:text-dark-text-muted hover:text-primary-red transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/ahmed-asaad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-light-text-muted dark:text-dark-text-muted hover:text-primary-red transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="relative p-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border hover:border-primary-red transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaSun className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaMoon className="w-5 h-5 text-blue-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Resume Download */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary flex items-center space-x-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-code">Hire Me</span>
                <FaDownload className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* Theme Toggle Mobile */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary"
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? (
                  <FaSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <FaMoon className="w-5 h-5 text-blue-500" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaTimes className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBars className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="fixed top-20 left-0 right-0 z-50 bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border shadow-xl lg:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-4 py-3 rounded-lg font-code text-lg hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-tech-blue">&lt;</span>
                    {item.name}
                    <span className="text-tech-blue">/&gt;</span>
                  </motion.button>
                ))}

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-light-border dark:border-dark-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <a
                        href="https://github.com/ahmedasaad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-light-text-muted dark:text-dark-text-muted hover:text-primary-red transition-colors duration-300"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                      <a
                        href="https://linkedin.com/in/ahmed-asaad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-light-text-muted dark:text-dark-text-muted hover:text-primary-red transition-colors duration-300"
                      >
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                    </div>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <span className="font-code">Hire Me</span>
                      <FaDownload className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;