import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaCode, FaMobile } from 'react-icons/fa';
import { personalInfo, quickStats } from '../../data/personal';
import { ASSETS } from '../../data/assets';
import TypingEffect from '../animations/TypingEffect';
import LazyImage from '../ui/LazyImage';
import { useTranslation } from '../../hooks/useTranslation';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const techTitles = [
    t('hero.titles.flutterDev'),
    t('hero.titles.mobileExpert'),
    t('hero.titles.cleanCode'),
    t('hero.titles.firebaseSpecialist'),
    t('hero.titles.crossPlatform')
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-circuit opacity-5"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 text-primary-red opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 4 === 0 && <FaCode />}
            {i % 4 === 1 && <FaMobile />}
            {i % 4 === 2 && <span className="font-code text-lg">{'{}'}</span>}
            {i % 4 === 3 && <span className="font-code text-lg">{'</>'}</span>}
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Terminal Header */}
            <motion.div
              className="mb-8 p-4 bg-dark-bg-terminal rounded-lg border border-dark-border shadow-terminal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs font-code text-dark-text-muted">ahmed@portfolio:~$</span>
              </div>
              <div className="font-code text-tech-green text-sm">
                <div className="flex items-center mb-1">
                  <span className="text-tech-blue">$</span>
                  <span className="ml-2">whoami</span>
                </div>
                <div className="text-dark-text-secondary ml-3">
                  {personalInfo.name} - {personalInfo.title}
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-tech-blue">$</span>
                  <span className="ml-2">cat skills.txt</span>
                </div>
                <div className="text-dark-text-secondary ml-3">
                  Flutter • Dart • Firebase • Clean Architecture
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-6">
              <motion.p
                className="text-primary-red font-code text-lg mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="text-tech-blue">&lt;</span>
                {t('hero.helloWorld')}
                <span className="text-tech-blue">/&gt;</span>
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-header font-bold text-light-text dark:text-dark-text mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {t('hero.greeting')} <span className="text-gradient">{personalInfo.name}</span>
              </motion.h1>

              <motion.div
                className="text-2xl md:text-3xl lg:text-4xl font-header text-light-text-secondary dark:text-dark-text-secondary mb-6 h-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <TypingEffect
                  texts={techTitles}
                  speed={100}
                  backSpeed={50}
                  delay={2000}
                  loop={true}
                  className="text-primary-red"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {t('hero.description')}
              <span className="text-primary-red font-code"> Flutter</span>,
              <span className="text-tech-blue font-code"> Firebase</span>, {t('common.and')}
              <span className="text-tech-green font-code"> Clean Architecture</span>.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                className="text-center p-3 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg border border-light-border dark:border-dark-border"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-primary-red font-header">
                  {quickStats.projectsCompleted}
                </div>
                <div className="text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                  {t('stats.projectsCompleted')}
                </div>
              </motion.div>
              <motion.div
                className="text-center p-3 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg border border-light-border dark:border-dark-border"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-primary-red font-header">
                  {quickStats.yearsExperience}
                </div>
                <div className="text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                  {t('stats.yearsExperience')}
                </div>
              </motion.div>
              <motion.div
                className="text-center p-3 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg border border-light-border dark:border-dark-border"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-primary-red font-header">
                  {quickStats.technologiesMastered}
                </div>
                <div className="text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                  {t('stats.technologiesMastered')}
                </div>
              </motion.div>
              <motion.div
                className="text-center p-3 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg border border-light-border dark:border-dark-border"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-primary-red font-header">
                  {quickStats.clientSatisfaction}
                </div>
                <div className="text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                  {t('stats.clientSatisfaction')}
                </div>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye />
                <span className="font-code">{t('hero.cta.viewWork')}</span>
              </motion.button>

              <motion.a
                href={ASSETS.resume}
                download="Ahmed_Asaad_CV.pdf"
                className="btn-secondary flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span className="font-code">{t('hero.cta.downloadResume')}</span>
              </motion.a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="mt-8 flex items-center space-x-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-tech-green rounded-full animate-pulse"></div>
                <span className="text-light-text-muted dark:text-dark-text-muted font-code">
                  {t('hero.availability.availableForHire')}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
                <span className="text-light-text-muted dark:text-dark-text-muted font-code">
                  {t('hero.availability.remoteFriendly')}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Main Profile Container */}
              <motion.div
                className="relative w-80 h-80 mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-primary-red rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ borderStyle: 'dashed' }}
                />

                {/* Inner Circle */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary-red to-tech-blue rounded-full p-1">
                  <div className="w-full h-full bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Ahmed's Profile Image */}
                    <LazyImage
                      src={ASSETS.profile.main}
                      alt="Ahmed Asaad - Flutter Developer"
                      className="w-full h-full rounded-full object-cover"
                      fallback={ASSETS.profile.avatar}
                    />

                    {/* Floating Tech Elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-white font-bold">F</span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-4 left-4 w-10 h-10 bg-tech-blue rounded-lg flex items-center justify-center"
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <span className="text-white font-bold">D</span>
                    </motion.div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {['React', 'Flutter', 'Firebase', 'TypeScript'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="absolute w-12 h-12 bg-dark-bg-secondary dark:bg-light-bg-secondary rounded-lg flex items-center justify-center shadow-lg"
                    style={{
                      top: '50%',
                      left: '50%',
                      marginTop: '-24px',
                      marginLeft: '-24px',
                    }}
                    animate={{
                      x: Math.cos((index * Math.PI) / 2) * 150,
                      y: Math.sin((index * Math.PI) / 2) * 150,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  >
                    <span className="text-xs font-bold text-primary-red">
                      {tech.slice(0, 2)}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Code Snippet Background */}
              <motion.div
                className="absolute -z-10 -top-8 -left-8 w-full h-full bg-dark-bg-code rounded-lg p-4 overflow-hidden opacity-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <pre className="font-code text-xs text-tech-green">
{`class FlutterDeveloper {
  final String name = "${personalInfo.name}";
  final List<String> skills = [
    "Flutter", "Dart", "Firebase"
  ];

  void buildApp() {
    print("Building amazing apps!");
  }
}`}
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;