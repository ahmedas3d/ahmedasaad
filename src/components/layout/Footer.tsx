import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaCode,
} from "react-icons/fa";
import { personalInfo, socialLinks } from "../../data/personal";
import { useTranslation } from "../../hooks/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      FaGithub: <FaGithub className="w-5 h-5" />,
      FaLinkedin: <FaLinkedin className="w-5 h-5" />,
      FaTwitter: <FaTwitter className="w-5 h-5" />,
      FaEnvelope: <FaEnvelope className="w-5 h-5" />,
      FaPhone: <FaPhone className="w-5 h-5" />,
      FaWhatsapp: <FaWhatsapp className="w-5 h-5" />,
    };
    return icons[iconName] || <FaCode className="w-5 h-5" />;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { name: t('nav.about'), section: "about" },
    { name: t('nav.skills'), section: "skills" },
    { name: t('nav.projects'), section: "projects" },
    { name: t('nav.contact'), section: "contact" },
  ];

  const techStack = [
    "Flutter",
    "Dart",
    "Firebase",
    "React",
    "TypeScript",
    "Clean Architecture",
  ];

  return (
    <footer className="relative bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-border dark:border-dark-border">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-circuit opacity-5"></div>

      <div className="relative container-custom">
        <div className="section-padding">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-red to-tech-blue rounded-lg flex items-center justify-center shadow-lg">
                  <FaCode className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-header font-bold text-light-text dark:text-dark-text">
                    {personalInfo.name.split(" ")[0]}
                    <span className="text-gradient">
                      {personalInfo.name.split(" ")[1]}
                    </span>
                  </h3>
                  <p className="text-sm font-code text-light-text-muted dark:text-dark-text-muted">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 max-w-md">
                {personalInfo.bio.short}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-header font-semibold text-light-text dark:text-dark-text mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full text-xs font-code text-light-text-secondary dark:text-dark-text-secondary border border-light-border dark:border-dark-border"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 23, 68, 0.1)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.slice(0, 4).map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-lg flex items-center justify-center text-light-text-muted dark:text-dark-text-muted hover:bg-primary-red hover:text-white transition-all duration-300 border border-light-border dark:border-dark-border"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    title={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-header font-semibold text-light-text dark:text-dark-text mb-4">
                <span className="text-tech-blue">&lt;</span>
                {t('footer.quickLinks')}
                <span className="text-tech-blue">/&gt;</span>
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-red transition-colors duration-300 font-code text-sm block"
                    >
                      <span className="text-tech-blue mr-1">$</span>
                      {link.name.toLowerCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-header font-semibold text-light-text dark:text-dark-text mb-4">
                <span className="text-tech-blue">&lt;</span>
                {t('footer.connect')}
                <span className="text-tech-blue">/&gt;</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaEnvelope className="w-4 h-4 text-primary-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                      Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-red transition-colors duration-300 text-sm break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaPhone className="w-4 h-4 text-primary-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                      Phone
                    </p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-red transition-colors duration-300 text-sm"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-primary-red rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                      Location
                    </p>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="btn-secondary text-sm w-full"
                  >
                    <span className="font-code">Get In Touch</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="pt-8 border-t border-light-border dark:border-dark-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-light-text-muted dark:text-dark-text-muted text-sm">
                <span>
                  © {currentYear} {personalInfo.name}.
                </span>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <span className="text-light-text-muted dark:text-dark-text-muted font-code">
                  Version 1.0.0
                </span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-tech-green rounded-full animate-pulse"></div>
                  <span className="text-tech-green text-xs font-code">
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal Command */}
            <motion.div
              className="mt-4 p-3 bg-dark-bg-terminal rounded-lg border border-dark-border"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-tech-green font-code text-xs">
                <span className="text-tech-blue">$</span>
                <span>git commit -m "Thanks for visiting my portfolio!"</span>
                <div className="w-2 h-4 bg-tech-green animate-pulse ml-1"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
