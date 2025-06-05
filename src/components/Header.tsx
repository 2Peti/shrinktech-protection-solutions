
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              ShrinkTech<span className="text-red-600">®</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </a>
            <a href="#flex-caps" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              STEC-F Flex Caps
            </a>
            <a href="#coatings" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              PVC Coatings
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#flex-caps"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                STEC-F Flex Caps
              </a>
              <a
                href="#coatings"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                PVC Coatings
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
