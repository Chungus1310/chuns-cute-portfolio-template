import React from 'react';
import ProjectCard from './ProjectCard';
import HeroSection from './HeroSection';
import projects from '../data/projects';

const ProjectsPage = () => {
  const featuredProjects = projects.filter(project => project.type === 'featured');
  const otherProjects = projects.filter(project => project.type === 'other');

  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
      <HeroSection />
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary relative inline-block">
          <span className="relative z-10">Featured Projects</span>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent transform origin-left transition-transform duration-300 hover:scale-x-110"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="relative">
        <h2 className="text-3xl font-bold mb-8 text-primary relative inline-block">
          <span className="relative z-10">Other Projects</span>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-secondary transform origin-left transition-transform duration-300 hover:scale-x-110"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {otherProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
