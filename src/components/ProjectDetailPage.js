import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import projects from '../data/projects';
import OptimizedImage from './common/OptimizedImage';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-gradient text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="link-text inline-flex items-center gap-2">
            Return to projects ✨
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <Link 
        to="/"
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-effect hover:shadow-glow transition-all duration-300 text-text-pink hover:text-accent-pink font-medium"
      >
        <FaArrowLeft className="text-sm" /> Back to Projects
      </Link>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="glass-effect rounded-2xl p-8 shadow-glass"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-xl overflow-hidden mb-6 shadow-soft"
        >
          <OptimizedImage
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-64 object-cover rounded-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-shadow-glow -webkit-text-stroke-[1px] text-stroke-black">
            <span className="text-gradient">{project.title}</span>
          </h1>
          
          <p className="text-body mb-8 text-lg leading-relaxed text-shadow-sm">{project.longDescription || project.description}</p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-primary to-accent-pink text-white text-sm rounded-full font-medium tracking-wide transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 relative overflow-hidden group cursor-default"
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 moving-glass-effect-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent-pink text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105 group overflow-hidden shadow-glass hover:shadow-glass-hover text-shadow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaGithub /> View Code
                </span>
                <div className="absolute inset-0 moving-glass-effect"></div>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-6 py-3 rounded-full glass-effect border-2 border-primary hover:border-accent-pink text-text-pink hover:text-accent-pink font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaExternalLinkAlt /> Live Demo
                </span>
                <div className="absolute inset-0 moving-glass-effect-subtle"></div>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailPage;
