import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../data/projects';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : null;

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center section-padding"
      >
        <div className="text-center">
          <h1 className="text-4xl font-header font-bold text-light-text dark:text-dark-text mb-4">
            Project Not Found
          </h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    );
  }

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-primary-red hover:text-primary-red-dark transition-colors duration-300 mb-8"
            >
              <FaArrowLeft />
              <span className="font-code">Back to Projects</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-header font-bold text-light-text dark:text-dark-text mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8">
              {project.description}
            </p>

            <div className="card p-8">
              <h2 className="text-2xl font-header font-semibold text-light-text dark:text-dark-text mb-4">
                Project Overview
              </h2>
              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-header font-semibold text-light-text dark:text-dark-text mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-red text-white rounded-md text-sm font-code"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-header font-semibold text-light-text dark:text-dark-text mb-3">
                    Project Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Duration:</span> {project.duration}</p>
                    <p><span className="font-medium">Team Size:</span> {project.teamSize} member{project.teamSize > 1 ? 's' : ''}</p>
                    <p><span className="font-medium">My Role:</span> {project.myRole}</p>
                    <p><span className="font-medium">Status:</span> {project.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;