import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';

/**
 * The Home page.
 * This is the main landing page of the portfolio.
 */
const Home = () => {
  // Direct links to your profiles
  const GITHUB_URL = "https://github.com/aakash0101200";
  const LINKEDIN_URL = "https://www.linkedin.com/in/aakash-gupta-0101200/"; // Assuming this is the correct URL
  const RESUME_URL = "/Aakash_Gupta_Resume.pdf"; // Make sure to add your resume to the `public` folder

  return (
    // The `animate-fade-in` class is a custom animation defined in `index.css`
    <div className="container mx-auto px-6 py-24 md:py-32 animate-fade-in">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Aakash Gupta
        </h1>
        
        {/* Subtitle / Professional Title */}
        <p className="mt-4 text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          Full-Stack Developer
        </p>

        {/* Bio / Professional Summary */}
        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl">
          I build robust, end-to-end web applications, specializing in the Java Spring Boot ecosystem and modern React front-ends. I'm passionate about writing clean code, architecting scalable systems, and bringing complex ideas to life.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white
                       bg-indigo-600 rounded-lg shadow-lg
                       transition-all duration-300 ease-in-out
                       hover:bg-indigo-700 hover:shadow-indigo-500/40
                       transform hover:scale-105"
          >
            View My Work
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-indigo-300
                       bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg
                       transition-all duration-300 ease-in-out
                       hover:bg-gray-700 hover:text-white
                       transform hover:scale-105"
          >
            Download Resume
            <Download className="w-5 h-5 ml-2 transition-all duration-300 group-hover:text-cyan-300" />
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex gap-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-400 transition-colors duration-300 hover:text-indigo-400"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-400 transition-colors duration-300 hover:text-indigo-400"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          {/* Add more social links here if you have them (e.g., Twitter/X) */}
        </div>
        
      </div>
    </div>
  );
};

export default Home;

