import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import OptimizedImage from './common/OptimizedImage';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative flex flex-col h-[500px] w-full transform transition-all duration-500 hover:scale-[1.02]">
      {/* Glass effect overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Card content */}
      <div className="relative h-full rounded-xl overflow-hidden bg-glass-light border-2 border-glass-light shadow-glass group-hover:shadow-glass-hover">
        <div className="relative h-48 overflow-hidden">
          <OptimizedImage 
            src={project.imageUrl} 
            alt={project.title}
            width={400}
            height={192}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="p-6 flex flex-col justify-between h-[calc(100%-192px)] bg-gradient-to-b from-glass-light to-primary/10">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gradient group-hover:text-primary transition-colors duration-300 text-shadow-pink -webkit-text-stroke-[0.5px] text-stroke-black">
              {project.title}
            </h3>
            <p className="text-body mb-4 line-clamp-3 group-hover:text-primary/90 transition-colors duration-300 text-shadow-sm">
              {project.description}
            </p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-primary to-accent-pink text-white text-sm rounded-full font-medium tracking-wide transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <span className="relative z-10">{tech}</span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <Link
                to={`/projects/${project.id}`}
                className="relative z-20 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent-pink text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105 flex items-center gap-1 shadow-md hover:shadow-glow hover:-translate-y-0.5 overflow-hidden text-shadow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More ✨
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
              
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-primary"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
