import React from 'react';
import { Database, Layout, Smartphone, Cloud, Code, GitBranch, Settings } from 'lucide-react';

/**
 * The About page.
 * Provides a brief bio and a list of technical skills.
 */
const About = () => {
  // TODO: Customize your tech stack
  const techStack = [
    { 
      category: 'Frontend', 
      icon: Layout, 
      color: 'text-cyan-400',
      skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3'] 
    },
    { 
      category: 'Backend', 
      icon: Code,
      color: 'text-green-400',
      skills: ['Spring Boot', 'Java', 'Node.js', 'REST APIs', 'JWT'] 
    },
    { 
      category: 'Databases', 
      icon: Database,
      color: 'text-indigo-400',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'] 
    },
    { 
      category: 'DevOps & Tools', 
      icon: GitBranch,
      color: 'text-orange-400',
      skills: ['Git', 'GitHub Actions', 'Docker', 'Vercel', 'Render'] 
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A developer passionate about creating solutions that matter.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* Left Column: Bio */}
        <div className="lg:w-1/2 space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
          <p>
            Hello! I'm Aakash, a software developer based in [Your Location] with a strong passion for building efficient and scalable web applications. My journey in tech started with a curiosity for how things work, which quickly evolved into a full-fledged dedication to software craftsmanship.
          </p>
          <p>
            I specialize in full-stack development, with deep experience in the <span className="text-white font-medium">Spring Boot</span> and <span className="text-white font-medium">React</span> ecosystems. I enjoy the challenge of connecting a robust, secure backend with a clean, interactive user interface.
          </p>
          <p>
            When I'm not coding, I'm usually exploring new technologies, contributing to open-source projects, or [Your Hobby Here - e.g., "brewing the perfect cup of coffee"]. I am always looking for new opportunities to learn, grow, and make a tangible impact.
          </p>
        </div>

        {/* Right Column: Tech Stack */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-semibold text-white mb-8">My Tech Stack</h2>
          <div className="space-y-6">
            {techStack.map((category) => (
              <TechCategory 
                key={category.category}
                icon={category.icon}
                title={category.category}
                skills={category.skills}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * A reusable component to display a category of technologies.
 */
const TechCategory = ({ icon: Icon, title, skills, color }) => (
  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Icon className={`w-6 h-6 mr-3 ${color}`} />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1 text-sm font-medium text-gray-200 bg-gray-700/60 rounded-md"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default About;

