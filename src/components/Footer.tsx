import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";

export function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: "Home", path: "/" },
      { name: "Programs", path: "/programs" },
      {
        name: "Curriculum",
        path: "/curriculum",
      },
      { name: "Careers", target: '_blank', path: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__cI7zrtUM0NHNzFZNEZNSlpFQjg5SEZSNEtFMkVDUS4u' },
      { name: "Contact", path: "/contact" },
    ],
  };



  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <Link
            to="/"
            aria-label="Youngpreneurs Business School home"
            className="flex items-center gap-3 mb-6"
          >
            <img
              src="/images/logo.png"
              alt="Youngpreneurs Business School"
              className="h-32 w-auto object-contain"
            />
          </Link>

          {/* Programs Column */}
          <div>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    target={link?.target}
                    to={link.path}
                    aria-label={link.name}
                    className="text-gray-600 hover:text-navy-700 transition-colors text-sm"
                    onClick={() => {
                      if (location.pathname === link.path) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-navy-900 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:info@youngpreneurbs.com"
                aria-label="Email Youngpreneurs Business School at info@youngpreneurbs.com"
                className="flex items-center gap-3 text-gray-600 hover:text-navy-700 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                info@youngpreneurbs.com
              </a>
              <a
                href="tel:0403593061"
                aria-label="Call Youngpreneurs Business School on 0403 593 061"
                className="flex items-center gap-3 text-gray-600 hover:text-navy-700 transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                0403 593 061
              </a>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <MapPin className="h-4 w-4" />
                Tuesday - Saturday, 10am – 9pm
              </div>
              {/* Website */}
              <a
                href="https://www.youngpreneurbs.com"
                aria-label="Visit Youngpreneurs Business School website at youngpreneurbs.com"
                className="flex items-center gap-3 text-gray-600 hover:text-navy-700 transition-colors text-sm"
              >
                <Globe className="h-4 w-4" />
                youngpreneurbs.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Youngpreneurs Business School. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/youngpreneurbs/"
              aria-label="Follow Youngpreneurs Business School on Instagram"
              className="text-gray-400 hover:text-navy-700 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Follow Youngpreneurs Business School on Twitter"
              className="text-gray-400 hover:text-navy-700 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Connect with Youngpreneurs Business School on LinkedIn"
              className="text-gray-400 hover:text-navy-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Subscribe to Youngpreneurs Business School on YouTube"
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
