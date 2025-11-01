import React from 'react';
// Outlet is a placeholder from React Router
// It renders the current active page (Home, About, etc.)
import { Outlet } from 'react-router-dom';

// Import your shared components
// Fixed paths to be relative to the current directory
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

/**
 * This component provides the consistent "wrapper"
 * for every page on your site.
 */
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar is always at the top */}
      <Navbar />
      
      {/* The main content (Home, About, etc.) renders here */}
      <main className="flex-grow container mx-auto px-6 py-8">
        <Outlet />
      </main>
      
      {/* Footer is always at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;

