import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeddingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/invitation', label: 'Invitation' },
    { to: '/venue', label: 'Venue' },
    { to: '/countdown', label: 'Countdown' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/rsvp', label: 'RSVP' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-maroon/95 backdrop-blur-sm shadow-luxury'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
            >
              <Heart className="w-6 h-6 fill-current" />
              <span className="font-hindi text-xl font-semibold hidden sm:inline">
                शुभ विवाह
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === link.to
                      ? 'text-gold'
                      : 'text-ivory hover:text-gold-light'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                      location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gold hover:text-gold-light focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-maroon-dark/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-maroon shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 border-b border-gold/20">
                  <span className="font-hindi text-xl font-semibold text-gold">
                    शुभ विवाह
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-gold hover:text-gold-light"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 p-6 space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                        location.pathname === link.to
                          ? 'bg-gold/20 text-gold'
                          : 'text-ivory hover:bg-gold/10 hover:text-gold-light'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="p-6 border-t border-gold/20">
                  <p className="text-ivory/60 text-sm text-center">
                    December 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
