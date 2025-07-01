import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSearch, FiMoon, FiSun } from 'react-icons/fi';
import logo from './../assets/images/1.jpg';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [searchQuery, setSearchQuery] = useState('');

  // Enable/disable dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-10">
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`relative group text-sm font-medium inline-block max-w-max ${
              isActive(path)
                ? 'text-blue-500 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {label}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                isActive(path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
              style={{ maxWidth: '100%' }}
            ></span>
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search Input (Desktop Only) */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-1 rounded border dark:bg-gray-800 dark:text-white"
          />
          <FiSearch className="absolute right-2 top-2 text-gray-500 dark:text-gray-300" />
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl text-gray-600 dark:text-yellow-400"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 px-6 py-4 flex flex-col space-y-3 md:hidden z-50 shadow-md">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`relative group text-sm font-medium inline-block max-w-max ${
                isActive(path)
                  ? 'text-blue-500 font-semibold'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                  isActive(path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
                style={{ maxWidth: '100%' }}
              ></span>
            </Link>
          ))}

          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1 rounded border dark:bg-gray-700 dark:text-white"
            />
            <FiSearch className="absolute right-3 top-2 text-gray-400 dark:text-gray-200" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
