import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  getFeaturedProjects,
  getProjectCategories,
  getProjectsByCategory,
} from "../../data/projects";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaMobile,
  FaPlay,
} from "react-icons/fa";
import ProjectImage from "../ui/ProjectImage";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const allProjects = getFeaturedProjects();
  const categories = getProjectCategories();

  // Map project titles to asset keys
  const getProjectKey = (
    title: string
  ): "sportify" | "homeFood" | "newsHub" | "scholarChat" | "flowery" => {
    const titleMap: Record<
      string,
      "sportify" | "homeFood" | "newsHub" | "scholarChat" | "flowery"
    > = {
      Sportify: "sportify",
      "Home Food": "homeFood",
      "News Hub": "newsHub",
      "Scholar Chat": "scholarChat",
      Flowery: "flowery",
    };
    return titleMap[title] ?? "sportify";
  };

  const filteredProjects =
    activeFilter === "all" ? allProjects : getProjectsByCategory(activeFilter);

  const filterButtons = [
    { key: "all", label: "All Projects", icon: <FaCode /> },
    ...categories.map((category) => ({
      key: category,
      label: category,
      icon: <FaMobile />,
    })),
  ];

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: -20 },
  };

  return (
    <section id="projects" className="section-padding">
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
            Featured Projects
            <span className="text-tech-blue">/&gt;</span>
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Explore my mobile applications built with Flutter, showcasing clean
            architecture and modern development practices
          </p>

          {/* Git Command */}
          <motion.div
            className="inline-block mt-6 p-3 bg-dark-bg-terminal rounded-lg border border-dark-border"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-tech-green font-code text-sm">
              <span className="text-tech-blue">$</span>
              <span>git log --oneline --graph</span>
              <div className="w-2 h-4 bg-tech-green animate-pulse ml-1"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filterButtons.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-code text-sm transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-primary-red text-white shadow-glow"
                  : "bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-red hover:text-white border border-light-border dark:border-dark-border"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="card overflow-hidden h-full hover:border-primary-red transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <ProjectImage
                      projectKey={getProjectKey(project.title)}
                      title={project.title}
                      className="w-full h-64"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-4">
                        <Link
                          to={`/project/${project.id}`}
                          className="w-12 h-12 bg-white text-primary-red rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                        >
                          <FaExternalLinkAlt />
                        </Link>
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white text-primary-red rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                          >
                            <FaGithub />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white text-primary-red rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
<<<<<<< HEAD
                          >
                            <FaPlay />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-code ${
                          project.status === 'completed'
                            ? 'bg-tech-green text-white'
                            : project.status === 'in-progress'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-gray-500 text-white'
                        }`}
                      >
                        {project.status.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white text-primary-red rounded-full text-xs font-code font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-header font-bold text-light-text dark:text-dark-text mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm font-code text-primary-red">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="text-right text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                        <div>{project.year}</div>
                        <div>{project.duration}</div>
                      </div>
                    </div>

                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.primaryTech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-xs font-code rounded-md text-light-text-secondary dark:text-dark-text-secondary"
=======
>>>>>>> a46590524d878b8ed83c43eeb42b1a7bbe155c80
                          >
                            <FaPlay />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-code ${
                          project.status === "completed"
                            ? "bg-tech-green text-white"
                            : project.status === "in-progress"
                            ? "bg-yellow-500 text-white"
                            : "bg-gray-500 text-white"
                        }`}
                      >
                        {project.status.replace("-", " ")}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white text-primary-red rounded-full text-xs font-code font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-header font-bold text-light-text dark:text-dark-text mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm font-code text-primary-red">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="text-right text-xs font-code text-light-text-muted dark:text-dark-text-muted">
                      <div>{project.year}</div>
                      <div>{project.duration}</div>
                    </div>
                  </div>

                  <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.primaryTech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-xs font-code rounded-md text-light-text-secondary dark:text-dark-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length >
                        project.primaryTech.length && (
                        <span className="px-2 py-1 bg-primary-red text-white text-xs font-code rounded-md">
                          +
                          {project.technologies.length -
                            project.primaryTech.length}{" "}
                          more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="flex justify-between items-center text-xs font-code text-light-text-muted dark:text-dark-text-muted mb-4">
                    <span>
                      Team: {project.teamSize} member
                      {project.teamSize > 1 ? "s" : ""}
                    </span>
                    <span>Role: {project.myRole}</span>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-code font-semibold text-light-text dark:text-dark-text mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-light-text-secondary dark:text-dark-text-secondary space-y-1">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-2"
                          >
                            <span className="text-primary-red mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Link
                      to={`/project/${project.id}`}
                      className="flex-1 btn-primary text-center text-sm py-2"
                    >
                      <span className="font-code">View Details</span>
                    </Link>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-primary-red text-primary-red rounded-lg hover:bg-primary-red hover:text-white transition-all duration-300 flex items-center justify-center"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-header font-bold text-light-text dark:text-dark-text mb-4">
              Ready to Build Your Next App?
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
              Let's discuss your mobile app project and bring your ideas to life
              with Flutter.
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-code">Start Your Project</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
