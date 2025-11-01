import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

/**
 * The 404 Not Found page.
 * Displayed when a user navigates to a non-existent route.
 */
const NotFound = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col items-center justify-center text-center">
        
        {/* Large 404 Text */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
          404
        </h1>
        
        {/* Page Title */}
        <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white">
          Page Not Found
        </h2>
        
        {/* Helper Text */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you might have mistyped the URL.
        </p>
        
        {/* Back to Home Button */}
        <Link
          to="/"
          className="group mt-10 inline-flex items-center px-6 py-3 text-base font-semibold text-white
                     bg-indigo-600 rounded-lg shadow-lg
                     transition-all duration-300 ease-in-out
                     hover:bg-indigo-700 hover:shadow-indigo-500/40
                     transform hover:scale-105"
        >
          <Home className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;

