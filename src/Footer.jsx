import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

/**
 * A minimal and professional footer component.
 * Includes social links and a copyright notice.
 */
const Footer = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/aakash0101200' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/your-profile' // TODO: Update this link
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:your-email@example.com' // TODO: Update this email
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          
          {/* Copyright Notice */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} sky. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Built with React, Tailwind CSS, and Vite.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex mt-4 sm:mt-0 space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

