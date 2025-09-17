import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import ContactForm from '../components/forms/ContactForm';
import TechParticles from '../components/animations/TechParticles';
import FloatingCode from '../components/animations/FloatingCode';
import ScrollIndicator from '../components/animations/ScrollIndicator';
import { personalInfo } from '../data/personal';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Background Tech Particles */}
      <TechParticles />

      {/* Floating Code Elements */}
      <FloatingCode />

      {/* Scroll Progress Indicator */}
      <ScrollIndicator />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="section-padding bg-light-bg-secondary dark:bg-dark-bg-secondary relative">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-header font-bold text-light-text dark:text-dark-text mb-4">
              <span className="text-tech-blue">&lt;</span>
              About Me
              <span className="text-tech-blue">/&gt;</span>
            </h2>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Passionate Flutter developer creating cross-platform mobile experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h3 className="text-2xl font-header font-semibold text-light-text dark:text-dark-text mb-6">
                  My Developer Journey
                </h3>
                <div className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
                  <p>
                    {personalInfo.bio.long}
                  </p>
                  <p>
                    With {personalInfo.experience} of hands-on experience, I've successfully delivered mobile applications
                    across various domains including sports, e-commerce, news, and social platforms.
                  </p>
                  <p>
                    My approach focuses on clean architecture, maintainable code, and delivering exceptional user experiences
                    that make a real difference in people's lives.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-header font-semibold text-light-text dark:text-dark-text mb-3">
                    What I Believe In:
                  </h4>
                  <ul className="space-y-2">
                    {personalInfo.taglines.map((tagline, index) => (
                      <li key={index} className="flex items-center space-x-3 text-light-text-secondary dark:text-dark-text-secondary">
                        <span className="text-primary-red">▸</span>
                        <span>{tagline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h3 className="text-2xl font-header font-semibold text-light-text dark:text-dark-text mb-6">
                  Education & Background
                </h3>

                <div className="mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center text-white font-bold">
                      🎓
                    </div>
                    <div>
                      <h4 className="font-header font-semibold text-light-text dark:text-dark-text">
                        {personalInfo.education.degree}
                      </h4>
                      <p className="text-primary-red font-code">
                        {personalInfo.education.field}
                      </p>
                      <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                        {personalInfo.education.duration} • Grade: {personalInfo.education.grade}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-header font-semibold text-light-text dark:text-dark-text mb-3">
                    Languages
                  </h4>
                  <div className="space-y-2">
                    {personalInfo.languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-light-text-secondary dark:text-dark-text-secondary">
                          {lang.name}
                        </span>
                        <span className="px-2 py-1 bg-primary-red text-white text-xs rounded font-code">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-light-text dark:text-dark-text mb-3">
                    Location & Availability
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary-red">📍</span>
                      <span className="text-light-text-secondary dark:text-dark-text-secondary">
                        {personalInfo.location}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-tech-green rounded-full animate-pulse"></span>
                      <span className="text-light-text-secondary dark:text-dark-text-secondary">
                        Available for remote work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-header font-bold text-light-text dark:text-dark-text mb-4">
              <span className="text-tech-blue">&lt;</span>
              Get In Touch
              <span className="text-tech-blue">/&gt;</span>
            </h2>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Ready to build your next mobile app? Let's discuss your project and bring your ideas to life.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;