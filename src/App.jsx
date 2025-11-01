import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  NavLink, // Use NavLink for active styling
} from 'react-router-dom';

// --- Helper Components for Icons ---
// Using inline SVGs for icons to keep it in one file
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
    className="lucide lucide-menu"
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
    className="lucide lucide-x"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// --- Page Components ---
// (These are the same as before, just placeholders for your pages)
const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Welcome to My Portfolio
    </h1>
    <p className="text-xl text-gray-700 dark:text-gray-300">
      This is the Home page.
    </p>
  </div>
);

const About = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
    <p className="text-xl text-gray-700 dark:text-gray-300">
      This is the About page.
    </p>
  </div>
);

const Projects = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
    <p className="text-xl text-gray-700 dark:text-gray-300">
      This is the Projects page.
    </p>
  </div>
);

const Contact = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
    <p className="text-xl text-gray-700 dark:text-gray-300">
      This is the Contact page.
    </p>
  </div>
);

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
    <p className="text-2xl text-gray-700 dark:text-gray-300">Page Not Found</p>
    <Link to="/" className="mt-4 text-blue-500 hover:underline">
      Go back home
    </Link>
  </div>
);

// --- Layout Components ---

/**
 * Responsive Navbar Component
 * This now includes a mobile menu toggle.
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper component for Nav links to reduce repetition
  // We use NavLink to automatically get an 'active' class
  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      // This function adds Tailwind classes if the link is active
      className={({ isActive }) =>
        `block md:inline-block px-3 py-2 rounded-md text-base font-medium ${
          isActive
            ? 'bg-blue-600 text-white' // Active link style
            : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400' // Inactive link style
        }`
      }
      onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 dark:text-white"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu if logo is clicked
          >
            MyPortfolio
          </Link>

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
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {/* This section is shown/hidden based on the isMobileMenuOpen state */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>
      </div>
    </nav>
  );
};

/**
 * Footer Component
 * (Unchanged, already reasonably responsive)
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

/**
 * Main Layout Component
 * (Unchanged)
 */
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

/**
 * Main App Component
 * (Unchanged, but now imports NavLink)
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

