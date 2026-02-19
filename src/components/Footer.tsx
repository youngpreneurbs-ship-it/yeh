import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: 'Overview', path: '/programs' },
      { name: 'Ages 7–11', path: '/programs/ages-7-11' },
      { name: 'Ages 12–16', path: '/programs/ages-12-16' },
    ],
    curriculum: [
      { name: 'Overview', path: '/curriculum' },
      { name: 'Entrepreneurship', path: '/curriculum/entrepreneurship' },
      { name: 'Economics', path: '/curriculum/economics' },
      { name: 'Marketing', path: '/curriculum/marketing' },
      { name: 'Design Thinking', path: '/curriculum/design-thinking' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'For Parents', path: '/parents' },
      { name: 'For Schools', path: '/schools' },
      { name: 'Contact', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png"
                alt="Young Entrepreneurs Hub"
                className="h-32 w-auto object-contain"
              />
            
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
              Building real skills. Launching real ideas. Entrepreneurship
              education for the next generation of innovators.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@younghub.academy"
                className="flex items-center gap-3 text-gray-600 hover:text-navy-700 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                hello@younghub.academy
              </a>
              <a
                href="tel:+15550142201"
                className="flex items-center gap-3 text-gray-600 hover:text-navy-700 transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                +1 (555) 014-2201
              </a>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <MapPin className="h-4 w-4" />
                Mon–Fri, 9am–5pm
              </div>
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="font-heading font-semibold text-navy-900 mb-4">
              Programs
            </h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-navy-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum Column */}
          <div>
            <h3 className="font-heading font-semibold text-navy-900 mb-4">
              Curriculum
            </h3>
            <ul className="space-y-2">
              {footerLinks.curriculum.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-navy-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-semibold text-navy-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-navy-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Young Entrepreneurs Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-navy-700 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-navy-700 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-navy-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-navy-700 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
