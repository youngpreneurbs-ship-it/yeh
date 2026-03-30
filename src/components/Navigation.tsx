import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Careers', target: '_blank', path: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__cI7zrtUM0NHNzFZNEZNSlpFQjg5SEZSNEtFMkVDUS4u' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky py-2 top-0 left-0 right-0 z-50 transition-all duration-300  bg-white  ${isScrolled ? 'shadow-md border-b border-gray-200' : 'border-b border-gray-200'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Young Entrepreneurs Hub home"
            className="flex h-18 w-auto items-center gap-3"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src="/images/logo.png"
              alt="Young Entrepreneurs Hub"
              className="h-16 w-auto object-contain"
            />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                target={link?.target}
                aria-label={link.name}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'text-navy-700 bg-navy-50'
                  : 'text-gray-700 hover:text-navy-700 hover:bg-gray-50'
                  }`}
                onClick={() => {
                  if (location.pathname === link.path) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-navy hover:bg-navy-800 text-white font-medium rounded-lg px-6"
            >
              <Link to="/eoi" aria-label="Expression of interest form">
                Expression Of Interest
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  target={link?.target}
                  aria-label={link.name}
                  onClick={() => {
                    if (location.pathname === link.path) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm font-medium ${isActive(link.path)
                    ? 'text-navy-700 bg-navy-50'
                    : 'text-gray-700'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button
                  asChild
                  className="bg-navy hover:bg-navy-800 text-white font-medium rounded-lg px-6 w-full "
                >
                  <Link
                    to="/eoi"
                    target="_blank"
                    aria-label="Expression of interest contact form"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (location.pathname === "/eoi") {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    Expression Of Interest
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
