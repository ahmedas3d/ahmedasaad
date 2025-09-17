import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaPrint } from 'react-icons/fa';
import { personalInfo } from '../data/personal';

const Resume: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-header font-bold text-light-text dark:text-dark-text mb-4">
              <span className="text-tech-blue">&lt;</span>
              My Resume
              <span className="text-tech-blue">/&gt;</span>
            </h1>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
              Download my resume or view my qualifications
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="card p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-header font-semibold text-light-text dark:text-dark-text mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-primary-red font-code text-lg mb-4">
                  {personalInfo.title}
                </p>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                  {personalInfo.experience} Experience • {personalInfo.location}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary flex items-center space-x-2">
                    <FaDownload />
                    <span className="font-code">Download PDF</span>
                  </button>
                  <button className="btn-secondary flex items-center space-x-2">
                    <FaPrint />
                    <span className="font-code">Print Resume</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-header font-semibold text-light-text dark:text-dark-text mb-4">
                    Education
                  </h3>
                  <div className="border-l-2 border-primary-red pl-4">
                    <h4 className="font-medium text-light-text dark:text-dark-text">
                      {personalInfo.education.degree}
                    </h4>
                    <p className="text-sm text-primary-red font-code">
                      {personalInfo.education.field}
                    </p>
                    <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                      {personalInfo.education.duration} • Grade: {personalInfo.education.grade}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-header font-semibold text-light-text dark:text-dark-text mb-4">
                    Languages
                  </h3>
                  <div className="space-y-2">
                    {personalInfo.languages.map((lang, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-light-text dark:text-dark-text">{lang.name}</span>
                        <span className="text-primary-red font-code text-sm">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-header font-semibold text-light-text dark:text-dark-text mb-4">
                  Core Competencies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {personalInfo.specialties.slice(0, 8).map((specialty, index) => (
                    <div
                      key={index}
                      className="text-center p-3 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg border border-light-border dark:border-dark-border"
                    >
                      <span className="text-light-text dark:text-dark-text font-medium text-sm">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;