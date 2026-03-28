import { Outlet, Link, useLocation } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/storage', label: 'Storage' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0B001A] to-[#050505]">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={false}
        animate={{
          paddingTop: scrolled ? '0.75rem' : '2rem',
          paddingBottom: scrolled ? '0.75rem' : '2rem',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="relative transition-all duration-500"
            animate={{
              backgroundColor: scrolled ? 'rgba(75, 0, 130, 0.2)' : 'rgba(0, 0, 0, 0)',
              backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
              borderRadius: scrolled ? '1rem' : '9999px',
              padding: scrolled ? '1rem 1.5rem' : '0.75rem 0',
              boxShadow: scrolled
                ? '0 0 0 1px rgba(124, 58, 237, 0.3), 0 20px 40px -10px rgba(0, 0, 0, 0.4)'
                : '0 0 0 0px rgba(0, 0, 0, 0)',
            }}
          >
            <div className="flex items-center justify-between">
              {/* Logo - Left Side */}
              <Link to="/" className="flex items-center group relative z-10">
                <motion.div
                  className="relative overflow-hidden rounded-lg"
                  animate={{
                    width: scrolled ? '56px' : '72px',
                    height: scrolled ? '56px' : '72px',
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/LOGO_CV LOGO TYPE WHITE.png"
                    alt="CV Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </motion.div>
              </Link>

              {/* Desktop Navigation - Right Side in Pill */}
              <div className="hidden md:flex items-center">
                <motion.div
                    layout
                    className="flex items-center gap-1 transition-all duration-500"
                    animate={{
                    backgroundColor: scrolled ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: scrolled ? 'blur(0px)' : 'blur(10px)',
                    borderRadius: '9999px',
                    padding: scrolled ? '0' : '0.5rem 1rem',
                    border: scrolled
                      ? '0px solid rgba(0, 0, 0, 0)'
                      : '1px solid rgba(124, 58, 237, 0.2)',
                  }}
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="relative px-6 py-2.5 text-white/90 hover:text-white transition-colors group/link"
                    >
                      <span className="relative z-10">{link.label}</span>
                      {location.pathname === link.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        initial={false}
                        className="absolute inset-0 bg-purple-600/30 rounded-full"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  ))}
                  
                  <motion.div
                    className="ml-2"
                    animate={{
                      opacity: scrolled ? 0 : 1,
                      width: scrolled ? 0 : 'auto',
                      marginLeft: scrolled ? 0 : '0.5rem',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to="/storage"
                      className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap inline-block"
                    >
                      Reserve Now
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Reserve button appears on scroll */}
                <motion.div
                  animate={{
                    opacity: scrolled ? 1 : 0,
                    width: scrolled ? 'auto' : 0,
                    marginLeft: scrolled ? '1.5rem' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <Link
                    to="/storage"
                    className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap inline-block"
                  >
                    Reserve Now
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-6 bg-black/95 backdrop-blur-lg border border-purple-900/30 rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white/80 hover:text-white hover:bg-purple-600/20 transition-all py-3 px-4 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/storage"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg mt-4"
              >
                Reserve Now
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Main Content */}
      <ScrollToTop />
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-900/20 bg-black/30 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <img
                  src="/LOGO_CV LOGO TYPE WHITE.png"
                  alt="CV Logo"
                  className="h-10 object-contain"
                />
              </div>
              <p className="text-white/60 text-sm">
                Premier exotic car storage facility in Indio, California. Trusted by collectors and enthusiasts.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-white/60">
                <p>Indio, California 92201</p>
                <p>Near Coachella Festival Grounds</p>
                <p className="text-purple-400">info@cvstorage.com</p>
                <p>(760) 555-CARS</p>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-900/20 mt-8 pt-8 text-center text-white/40 text-sm">
            <p>© 2026 Coachella Valley Exotic Storage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}