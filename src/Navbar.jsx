import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// --- Icon Components (to avoid external libraries) ---
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

/**
 * A helper component for navigation links
 * This uses NavLink to automatically add styles to the active link
 */
const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block md:inline-block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'bg-blue-600 text-white' // Active link style
          : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400' // Inactive link style
      }`
    }
    onClick={onClick}
  >
    {children}
  </NavLink>
);

/**
 * The main responsive Navbar component
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-gray-800 dark:text-white"
            onClick={closeMenu}
          >
            MyPortfolio
          </NavLink>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle main menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavItem to="/" onClick={closeMenu}>Home</NavItem>
            <NavItem to="/about" onClick={closeMenu}>About</NavItem>
            <NavItem to="/projects" onClick={closeMenu}>Projects</NavItem>
            <NavItem to="/contact" onClick={closeMenu}>Contact</NavItem>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavItem to="/" onClick={closeMenu}>Home</NavItem>
          <NavItem to="/about" onClick={closeMenu}>About</NavItem>
          <NavItem to="/projects" onClick={closeMenu}>Projects</NavItem>
          <NavItem to="/contact" onClick={closeMenu}>Contact</NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
