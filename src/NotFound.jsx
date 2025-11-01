import React from 'react';
import { Link } from 'react-router-dom';

// This is your 404 page component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
    <p className="text-2xl text-gray-700 dark:text-gray-300">Page Not Found</p>
    <Link to="/" className="mt-4 text-blue-500 hover:underline">
      Go back home
    </Link>
  </div>
);

export default NotFound;
