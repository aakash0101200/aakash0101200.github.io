import React from 'react';

/**
 * A simple footer component
 */
const Footer = () => (
  <footer className="w-full bg-white dark:bg-gray-800 shadow-inner mt-12 py-6">
    <div className="container mx-auto px-6 text-center">
      <p className="text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
