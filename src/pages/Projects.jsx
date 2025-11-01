import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

/**
 * The Projects page.
 * Displays a grid of project cards with details and links.
 */
const Projects = () => {
  // TODO: Replace this with your actual project data
  const projectData = [
    {
      title: 'Unified College Management Portal (UCMP)',
      description: 'A full-stack web application for managing students, faculty, and courses, built with Spring Boot, React, and PostgreSQL.',
      imageUrl: 'https://placehold.co/600x400/1F2937/4F46E5?text=UCMP',
      tags: ['React', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
      liveUrl: 'https://ucmp-khaki.vercel.app/', // Your Vercel frontend
      githubUrl: 'https://github.com/aakash0101200/UCMP_BE', // Your backend repo
    },
    {
      title: 'Personal Portfolio Website',
      description: 'This very portfolio, designed to be minimal, responsive, and professional. Built with Vite, React, and Tailwind CSS.',
      imageUrl: 'https://placehold.co/600x400/1F2937/7C3AED?text=Portfolio',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://aakash0101200.github.io/',
      githubUrl: 'https://github.com/aakash0101200/aakash0101200.github.io',
    },
    {
      title: 'More Projects Coming Soon...',
      description: 'I am actively working on new and exciting projects. Check back soon for more updates and case studies.',
      imageUrl: 'https://placehold.co/600x400/1F2937/34D399?text=Soon',
      tags: ['In Progress'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A selection of projects I've built, showcasing my skills in web development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

/**
 * A reusable card component for displaying a single project.
 */
const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, tags, liveUrl, githubUrl } = project;

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden
                    border border-gray-700/50
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:border-indigo-400/50 hover:scale-[1.02]">
      
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover" 
        onError={(e) => { e.target.src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Image+Error'; }}
      />
      
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs font-semibold text-cyan-200 bg-cyan-900/50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>

        {/* Links */}
        <div className="flex items-center space-x-4">
          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md
                         hover:bg-indigo-700 transition-colors duration-300"
            >
              Live Demo
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
          {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md
                         hover:bg-gray-600 hover:text-white transition-colors duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

