import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Home, User, Briefcase, Mail } from 'lucide-react'; 
import logo from '../assets/logo.jpg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="h-5 w-5 inline" /> },
    { name: 'About', path: '/about', icon: <User className="h-5 w-5 inline" /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase className="h-5 w-5 inline" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="h-5 w-5 inline" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0"
          >
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12 w-auto rounded-md" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map(({ name, path, icon }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                      ${isActive(path)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                      } hover:shadow-lg hover:text-yellow-500 hover:bg-sky-400 dark:hover:bg-sky-600
                      focus:ring focus:ring-sky-500 focus:outline-none`}
                  >
                    {icon}
                    <span className="ml-2">{name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-white/90 dark:bg-gray-900/90 h-48 backdrop-blur-sm z-40 flex flex-col"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ name, path, icon }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-2 rounded-md text-base font-medium transition-colors duration-300
                      ${isActive(path)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                      } 
                      hover:shadow-lg hover:text-yellow-500 hover:bg-sky-400 dark:hover:bg-sky-600
                      focus:ring focus:ring-sky-500 focus:outline-none`}
                  >
                    {icon}
                    <span className="ml-2">{name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;