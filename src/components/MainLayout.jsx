import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

/**
 * MainLayout component
 * This component acts as the primary layout for all pages,
 * including the Navbar, Footer, and the main content area.
 */
const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-gray-100">
      {/* Navbar: Sticky, z-index 50 */}
      <Navbar />

      {/* Main Content Area:
        - 'flex-grow' makes this element take up all available space
          between the Navbar and Footer.
        - 'container mx-auto' centers the content.
        - 'px-6 py-12' adds horizontal and vertical padding.
      */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <Outlet /> 
        {/* Outlet renders the current route's component (e.g., Home, About) */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;

