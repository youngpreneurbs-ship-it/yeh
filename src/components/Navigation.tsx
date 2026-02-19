import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
    { name: 'About', path: '/about' },
    {
      name: 'Programs',
      path: '/programs',
      children: [
        { name: 'Overview', path: '/programs' },
        { name: 'Ages 7–11', path: '/programs/ages-7-11' },
        { name: 'Ages 12–16', path: '/programs/ages-12-16' },
      ],
    },
    {
      name: 'Curriculum',
      path: '/curriculum',
      children: [
        { name: 'Overview', path: '/curriculum' },
        { name: 'Entrepreneurship', path: '/curriculum/entrepreneurship' },
        { name: 'Economics', path: '/curriculum/economics' },
        { name: 'Marketing', path: '/curriculum/marketing' },
        { name: 'Design Thinking', path: '/curriculum/design-thinking' },
      ],
    },
    { name: 'Parents', path: '/parents' },
    { name: 'Schools', path: '/schools' },
    // { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky py-2 top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex h-18 w-auto items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Young Entrepreneurs Hub"
              className="h-16 w-auto object-contain"
            />
          
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.path) || link.children.some(c => isActive(c.path))
                          ? 'text-navy-700 bg-navy-50'
                          : 'text-gray-700 hover:text-navy-700 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="bg-white border border-gray-200 shadow-lg"
                  >
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.path} asChild>
                        <Link
                          to={child.path}
                          className={`text-sm ${
                            isActive(child.path)
                              ? 'text-navy-700 bg-navy-50'
                              : 'text-gray-700 hover:text-navy-700 hover:bg-gray-50'
                          }`}
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-navy-700 bg-navy-50'
                      : 'text-gray-700 hover:text-navy-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-navy hover:bg-navy-800 text-white font-medium rounded-lg px-6"
            >
              <Link to="/contact">Join a free taster</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
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
                <div key={link.name}>
                  {link.children ? (
                    <div className="space-y-1">
                      <span className="block px-4 py-2 text-gray-500 text-sm font-label uppercase tracking-wider">
                        {link.name}
                      </span>
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-8 py-2 text-sm ${
                            isActive(child.path)
                              ? 'text-navy-700 bg-navy-50'
                              : 'text-gray-700'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-2 text-sm font-medium ${
                        isActive(link.path)
                          ? 'text-navy-700 bg-navy-50'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Button
                  asChild
                  className="w-full bg-lime hover:bg-navy-800 text-white font-medium rounded-lg"
                >
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Join a free taster
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
