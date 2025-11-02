import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories, getTopSkills } from '../../data/skills';
import { FaMobile, FaServer, FaCode, FaPalette, FaTools, FaProjectDiagram } from 'react-icons/fa';
import TechIcons from '../ui/TechIcons';
import { useTranslation } from '../../hooks/useTranslation';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('mobile');
  const topSkills = getTopSkills(8);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      mobile: <FaMobile className="w-6 h-6" />,
      backend: <FaServer className="w-6 h-6" />,
      frontend: <FaCode className="w-6 h-6" />,
      design: <FaPalette className="w-6 h-6" />,
      tools: <FaTools className="w-6 h-6" />,
      architecture: <FaProjectDiagram className="w-6 h-6" />
    };
    return icons[category] || <FaCode className="w-6 h-6" />;
  };

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'from-tech-green to-tech-blue';
    if (level >= 70) return 'from-primary-red to-tech-blue';
    return 'from-tech-blue to-primary-red';
  };

  const activeSkillCategory = skillCategories.find(cat =>
    cat.name.toLowerCase().includes(activeCategory)
  );

  return (
    <section id="skills" className="section-padding bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-header font-bold text-light-text dark:text-dark-text mb-4">
            <span className="text-tech-blue">&lt;</span>
            {t('skills.title')}
            <span className="text-tech-blue">/&gt;</span>
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>

          {/* Terminal Command */}
          <motion.div
            className="inline-block mt-6 p-3 bg-dark-bg-terminal rounded-lg border border-dark-border"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-tech-green font-code text-sm">
              <span className="text-tech-blue">$</span>
              <span>{t('skills.command')}</span>
              <div className="w-2 h-4 bg-tech-green animate-pulse ml-1"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Icons Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-header font-semibold text-light-text dark:text-dark-text mb-8 text-center">
            {t('skills.technologiesTitle')}
          </h3>
          <TechIcons />
        </motion.div>

        {/* Top Skills Overview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-header font-semibold text-light-text dark:text-dark-text mb-8 text-center">
            {t('skills.coreCompetencies')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="card p-6 text-center group hover:border-primary-red"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-2xl font-bold text-white transition-all duration-300"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.name.charAt(0)}
                </div>
                <h4 className="text-lg font-header font-semibold text-light-text dark:text-dark-text mb-2">
                  {skill.name}
                </h4>
                <div className="mb-3">
                  <div className="skill-bar">
                    <motion.div
                      className={`skill-progress bg-gradient-to-r ${getSkillColor(skill.level)}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-sm font-code text-primary-red mt-1">
                    {skill.level}%
                  </div>
                </div>
                <p className="text-xs text-light-text-muted dark:text-dark-text-muted">
                  {skill.yearsOfExperience === 1
                    ? t('skills.yearsExperience', { years: skill.yearsOfExperience })
                    : t('skills.yearsExperiencePlural', { years: skill.yearsOfExperience })
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Skills by Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-header font-semibold text-light-text dark:text-dark-text mb-8 text-center">
            {t('skills.detailedExpertise')}
          </h3>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skillCategories.map((category) => {
              const categoryKey = category.name.toLowerCase().split(' ')[0];
              const isActive = activeCategory === categoryKey;

              // Map category keys to translation keys
              const getCategoryTranslation = (key: string) => {
                const keyMap: { [key: string]: string } = {
                  'mobile': 'skills.categories.mobile',
                  'backend': 'skills.categories.backend',
                  'architecture': 'skills.categories.architecture',
                  'ui/ux': 'skills.categories.design',
                  'design': 'skills.categories.design',
                  'development': 'skills.categories.tools',
                  'tools': 'skills.categories.tools'
                };
                return keyMap[key] || category.name;
              };

              return (
                <motion.button
                  key={categoryKey}
                  onClick={() => setActiveCategory(categoryKey)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-code text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-red text-white shadow-glow'
                      : 'bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-red hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getCategoryIcon(categoryKey)}
                  <span>{t(getCategoryTranslation(categoryKey))}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeSkillCategory?.skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="card p-6 group hover:border-primary-red"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-header font-semibold text-light-text dark:text-dark-text">
                        {skill.name}
                      </h4>
                      <p className="text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                        {skill.yearsOfExperience}yr exp
                      </p>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-primary-red font-code">
                    {skill.level}%
                  </div>
                </div>

                <div className="mb-4">
                  <div className="skill-bar">
                    <motion.div
                      className={`skill-progress bg-gradient-to-r ${getSkillColor(skill.level)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-3">
                  {skill.description}
                </p>

                {skill.projects.length > 0 && (
                  <div>
                    <p className="text-xs font-code text-light-text-muted dark:text-dark-text-muted mb-2">
                      {skill.projects.length === 1
                        ? t('skills.usedIn', { count: skill.projects.length })
                        : t('skills.usedInPlural', { count: skill.projects.length })
                      }
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {skill.projects.slice(0, 3).map((projectId) => (
                        <span
                          key={projectId}
                          className="text-xs px-2 py-1 bg-primary-red text-white rounded-md"
                        >
                          {projectId}
                        </span>
                      ))}
                      {skill.projects.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-md">
                          +{skill.projects.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-header font-semibold text-light-text dark:text-dark-text mb-4">
              {t('skills.proficiencySummary')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red font-code">85+</div>
                <div className="text-sm font-code text-light-text-muted dark:text-dark-text-muted">
                  {t('skills.stats.mobileDev')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-blue font-code">75+</div>
                <div className="text-sm font-code text-light-text-muted dark:text-dark-text-muted">
                  {t('skills.stats.backendServices')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-green font-code">80+</div>
                <div className="text-sm font-code text-light-text-muted dark:text-dark-text-muted">
                  {t('skills.stats.devTools')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red font-code">1+</div>
                <div className="text-sm font-code text-light-text-muted dark:text-dark-text-muted">
                  {t('skills.stats.yearsExp')}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;